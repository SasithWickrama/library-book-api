import Book from '../models/Book.js';
import Review from '../models/Review.js';

export const addReview = async (req, res) => {
  try {
    const { bookId, rating, comment } = req.body;

    // Verify book exists
    const book = await Book.findById(bookId);
    if (!book) {
      return res.status(404).json({ success: false, message: "Book not found" });
    }

    // Check if user already reviewed this book
    const existingReview = await Review.findOne({
      book: bookId,
      user: req.user.id
    });

    if (existingReview) {
      return res.status(400).json({ 
        success: false, 
        message: "You've already reviewed this book" 
      });
    }

    const review = await Review.create({
      book: bookId,
      user: req.user.id,
      rating,
      comment
    });

    res.status(201).json({
      success: true,
      data: review,
      message: "Review added successfully"
    });

  } catch (err) {
    res.status(500).json({ 
      success: false,
      message: err.message,
      errors: err.errors 
    });
  }
};

export const getBookReviews = async (req, res) => {
  try {
    const { isbn } = req.params;

    // Find book by ISBN (with or without hyphens)
    const book = await Book.findOne({
      $expr: {
        $eq: [
          { $replaceAll: { input: "$isbn", find: "-", replacement: "" } },
          isbn.replace(/[-\s]/g, '')
        ]
      }
    });

    if (!book) {
      return res.status(404).json({ 
        success: false, 
        message: "Book not found" 
      });
    }

    const reviews = await Review.find({ book: book._id, status: 'active' })
      .populate('user', 'username avatar')
      .sort({ createdAt: -1 })
      .lean();

    // Calculate average rating
    const averageRating = reviews.reduce((acc, curr) => acc + curr.rating, 0) / reviews.length;

    res.json({
      success: true,
      data: {
        bookTitle: book.title,
        averageRating: averageRating || 0,
        totalReviews: reviews.length,
        reviews
      }
    });

  } catch (err) {
    res.status(500).json({ 
      success: false,
      message: err.message 
    });
  }
};

export const addRemark = async (req, res) => {
  try {
    const { reviewId } = req.params;
    const { text } = req.body;

    const review = await Review.findByIdAndUpdate(
      reviewId,
      {
        $push: {
          remarks: {
            text,
            createdAt: new Date()
          }
        },
        $set: { updatedAt: new Date() }
      },
      { new: true, runValidators: true }
    );

    if (!review) {
      return res.status(404).json({ 
        success: false, 
        message: "Review not found" 
      });
    }

    res.json({
      success: true,
      data: review.remarks[review.remarks.length - 1],
      message: "Remark added successfully"
    });

  } catch (err) {
    res.status(500).json({ 
      success: false,
      message: err.message 
    });
  }
};

export const updateReview = async (req, res) => {
  try {
    const { rating, comment } = req.body;
    const review = await Review.findByIdAndUpdate(
      req.params.reviewId,
      { rating, comment, updatedAt: Date.now() },
      { new: true, runValidators: true }
    );

    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }

    res.json({
      success: true,
      data: review
    });
  } catch (err) {
    res.status(500).json({ 
      message: "Update failed",
      error: err.message 
    });
  }
};


// Add this delete function
export const deleteReview = async (req, res) => {
  try {
    const deletedReview = await Review.findOneAndDelete({
      _id: req.params.reviewId,
      user: req.user.id // Ensures only owner can delete
    });

    if (!deletedReview) {
      return res.status(404).json({
        success: false,
        message: "Review not found or unauthorized"
      });
    }

    res.json({
      success: true,
      message: "Review deleted successfully",
      data: {
        id: deletedReview._id,
        book: deletedReview.book
      }
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Delete failed",
      error: err.message
    });
  }
};

// Ensure all exports are listed
export default {
  addReview,
  getBookReviews,
  updateReview,
  deleteReview, // Must include this
  addRemark
};