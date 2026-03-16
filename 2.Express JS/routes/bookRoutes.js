const express = require("express");
const router = express.Router();

const books = require("../data/books");

const validateBook = require("../middleware/validate");

// too show all the books we will use this route
router.get("/", (req, res) => {
  res.json(books);
});

// this is to find the specifci book
router.get("/:id", (req, res, next) => {
  const book = books.find((b) => b.id == req.params.id);

  if (!book) {
    const err = new Error("Book not found !");
    err.status = 404;
    return next(err);
  }

  res.json(book);
});

// we use this to add the new books
router.post("/", validateBook, (req, res) => {
  const newBook = {
    id: books.length + 1,
    title: req.body.title,
    author: req.body.author,
  };

  books.push(newBook);

  res.status(201).json(newBook);
});

// we use this to update the existing books
router.put("/:id", validateBook, (req, res, next) => {
  const book = books.find((b) => b.id == req.params.id);

  if (!book) {
    const err = new Error("This book does't exist.");
    err.status = 404;
    return next(err);
  }

  book.title = req.body.title;
  book.author = req.body.author;

  res.json(book);
});

// this to delte the existing books
router.delete("/:id", (req, res) => {
  books = books.filter((b) => b.id != req.params.id);

  res.json({ message: "Book deleted" });
});

module.exports = router;
