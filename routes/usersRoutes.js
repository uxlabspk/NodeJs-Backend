import { Router } from "express";

const usersRouter = Router();

usersRouter.route("/").get((req, res) => {
  res.json({ message: "Get all users" });
});
