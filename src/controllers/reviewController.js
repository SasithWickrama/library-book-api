const Review = require('../models/Review').default;

exports.addReview = async (req, res) => {
  try {
    const { bookId, rating, comment } = req.body;
    const review = new Review({
      book: bookId,
      user: req.user.id,
      rating,
      comment
    });

    await review.save();
    res.status(201).json(review);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ book: req.params.bookId })
                              .populate('user', 'username');
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};