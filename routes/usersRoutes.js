import { Router } from "express";
import {
  currentUser,
  loginUser,
  registerUser,
} from "../controller/usersController.js";

const usersRouter = Router();

usersRouter.route("/register").post(registerUser);
usersRouter.route("/login").post(loginUser);
usersRouter.route("/current").get(currentUser);

export default usersRouter;
