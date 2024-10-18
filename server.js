import express from "express";
import booksRouter from "./routes/booksRoutes.js";
import dot from "dotenv";
import errorHandler from "./middleware/errorHandling.js";
import connectDB from "./config/dbConnection.js";
import usersRouter from "./routes/usersRoutes.js";

// configure the server
const app = express();

dot.config(); // enable env support
app.use(express.json()); // using express.json middleware

// Routes
app.use("/api/books", booksRouter); // Books route
app.use("/api/users", usersRouter); // User route

app.use(errorHandler); // using custom error handler middleware

// listening on port
app.listen(process.env.PORT || 4000, () => {
  connectDB();
  console.log("Listening on port ", process.env.PORT);
});
