import asyncHandler from "express-async-handler";
import Book from "../models/bookModel.js";
import book from "../models/bookModel.js";

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
  console.log(req.body);
  res.status(200).json({ message: "Update a book" });
});

// @desc delete a books
// @route /api/books/:id
// public
const deleteBook = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Delete a book" });
});

export { getBooks, createBook, getBook, updateBook, deleteBook };
