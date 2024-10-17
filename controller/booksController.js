import asyncHandler from "express-async-handler";
import Book from "../models/bookModel.js";

// @desc Get all books
// @route /api/books
// public
const getBooks = asyncHandler(async (req, res) => {
  const books = await Book.find();
  res.status(200).json(books);
});

// @desc create a book
// @route /api/books
// public
const createBook = asyncHandler(async (req, res) => {
  const { title, author, bookDescription, genre, bookCover, price, format } =
    req.body;
  if (
    !title ||
    !author ||
    !bookDescription ||
    !genre ||
    !bookCover ||
    !price ||
    !format
  ) {
    res.status(400);
    throw new Error("All fields are required!");
  }

  const book = await Book.create({
    title,
    author,
    bookDescription,
    genre,
    bookCover,
    price,
    format,
  });

  res.status(201).json(book);
});

// @desc get a book
// @route /api/books/:id
// public
const getBook = asyncHandler(async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (!book) {
    res.status(404);
    throw new Error("Book Not Found");
  }
  res.status(200).json(book);
});

// @desc update a book
// @route /api/books/:id
// public
const updateBook = asyncHandler(async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (!book) {
    res.status(404);
    throw new Error("Book Not Found");
  }

  const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedBook);
});

// @desc delete a books
// @route DELETE /api/books/:id
// @access public
const deleteBook = asyncHandler(async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (!book) {
    res.status(404);
    throw new Error("Book Not Found");
  }

  await Book.findByIdAndDelete(req.params.id);
  res.status(200).json(book);
});

export { getBooks, createBook, getBook, updateBook, deleteBook };
