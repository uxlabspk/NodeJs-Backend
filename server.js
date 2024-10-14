import express from "express";
import booksRouter from "./routes/booksRoutes.js";
import dot from "dotenv";

// configure the server
const app = express();
dot.config();
app.use(express.json());

// listening on port
app.listen(process.env.PORT || 4000, () => {
  console.log("Listening on port ", process.env.PORT);
});

// Books routes
app.use("/api/books", booksRouter);
