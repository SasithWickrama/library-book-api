import Book from "../models/Book.js";

export async function getAllBooks(req, res) {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

export async function getBookByISBN(req, res) {
  try {
    // Remove special characters from ISBN for matching
    const cleanISBN = req.params.isbn.replace(/[-\s]/g, '');
    const book = await Book.findOne({ 
      $expr: {
        $eq: [
          { $replaceAll: { input: "$isbn", find: "-", replacement: "" } },
          cleanISBN
        ]
      }
    });
    
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.json(book);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

export async function getBooksByAuthor(req, res) {
  try {
    const books = await Book.find({ author: req.params.author });
    if (!books || books.length === 0) {
      return res.status(404).json({ message: "No books found by this author" });
    }
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

export async function getBooksByTitle(req, res) {
  try {
    const books = await Book.find({
      title: { $regex: req.params.title, $options: "i" },
    });
    if (!books || books.length === 0) {
      return res
        .status(404)
        .json({ message: "No books found with this title" });
    }
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
