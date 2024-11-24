const Book = require("../models/book");

exports.createBook = async (req, res) => {
  try {
    const book = new Book(req.body);
    await book.save();
    res.status(201).json(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getBooksByAuthor = async (req, res) => {
  try {
    const books = await Book.find({ author: req.params.authorId });
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
