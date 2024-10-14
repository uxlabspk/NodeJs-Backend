import express, { Router } from "express";
import {
  getBooks,
  createBook,
  getBook,
  updateBook,
  deleteBook,
} from "../controller/booksController.js";

const booksRouter = Router();

booksRouter.route("/").get(getBooks).post(createBook);

booksRouter.route("/:id").get(getBook).put(updateBook).delete(deleteBook);

export default booksRouter;
