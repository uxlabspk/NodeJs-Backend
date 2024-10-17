import express from "express";
import booksRouter from "./routes/booksRoutes.js";
import dot from "dotenv";
import errorHandler from "./middleware/errorHandling.js";
import connectDB from "./config/dbConnection.js";
import usersRouter from "./routes/usersRoutes.js";

// configure the server
const app = express();
dot.config();
app.use(express.json());

// Books routes
app.use("/api/books", booksRouter);
app.use("/api/users", usersRouter);

app.use(errorHandler);

// listening on port
app.listen(process.env.PORT || 4000, () => {
  connectDB();
  console.log("Listening on port ", process.env.PORT);
});
