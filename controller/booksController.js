// @desc Get all books
// @route /api/books
// public
const getBooks = (req, res) => {
  res.send({ message: "Get All Books" });
};

// @desc create a book
// @route /api/books
// public
const createBook = (req, res) => {
  res.send({ message: "Create a Book" });
};

// @desc get a book
// @route /api/books/:id
// public
const getBook = (req, res) => {
  res.send({ message: "Get a Book" });
};

// @desc update a book
// @route /api/books/:id
// public
const updateBook = (req, res) => {
  console.log(req.body);
  res.json({ message: "Update a book" });
};

// @desc delete a books
// @route /api/books/:id
// public
const deleteBook = (req, res) => {
  res.send({ message: "Delete a book" });
};

export { getBooks, createBook, getBook, updateBook, deleteBook };
