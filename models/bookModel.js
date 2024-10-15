import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Enter book title"],
    },
    author: {
      type: String,
      required: [true, "Enter author name"],
    },
    bookDescription: {
      type: String,
      required: [true, "Enter book description"],
    },
    genre: {
      type: String,
      required: [true, "Enter book genre"],
    },
    bookCover: {
      type: String,
      required: [true, "Upload the book Cover"],
    },
    price: {
      type: Number,
      required: [true, "Enter the price"],
      min: 0,
    },
    format: {
      type: String,
      required: [true, "Enter the format"],
    },
  },
  {
    timestamps: true,
  }
);

const book = mongoose.model("Book", bookSchema);

export default book;

/*
{
  "title": "TITLE",
  "author": "AUTHOR",
  "bookDescription": "Book Description",
  "genre": "Genre",
  "bookCover": "Book Cover",
  "price": "Price",
  "format": "Format"
}
 */
