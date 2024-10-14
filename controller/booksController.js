// @desc Get all books
// @route /api/books
// public
const getBooks = (req, res) => {
  res.status(200).json({ message: "Get All Books" });
};

// @desc create a book
// @route /api/books
// public
const createBook = (req, res) => {
  res.status(201).json({ message: "Create a Book" });
};

// @desc get a book
// @route /api/books/:id
// public
const getBook = (req, res) => {
  res.status(200).json({ message: "Get a Book" });
};

// @desc update a book
// @route /api/books/:id
// public
const updateBook = (req, res) => {
  console.log(req.body);
  res.status(200).json({ message: "Update a book" });
};

// @desc delete a books
// @route /api/books/:id
// public
const deleteBook = (req, res) => {
  res.status(200).json({ message: "Delete a book" });
};

export { getBooks, createBook, getBook, updateBook, deleteBook };
