import asyncHandler from "express-async-handler";
import { User } from "../models/userModel.js";
import bcrypt from "bcryptjs";

// @desc create user
// @route POST /api/users/register
// @access public
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are required");
  }

  if (await User.findOne({ email })) {
    res.status(400);
    throw new Error("User already exists!");
  }

  const salt = bcrypt.genSalt(10);
  const hashPassword = bcrypt.hash(password, salt);

  const user = await User.create({
    username,
    email,
    password: hashPassword,
  });

  if (user) {
    res.status(201).json({ _id: user.id, email: user.email });
  }
});

// @desc login users
// @route POST /api/users/login
// @access public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("All fields are required");
  }

  const user = await User.findOne({ email });

  if (user) {
    // compare password with hash password and then generate JWT
    res.status(200).json(user);
  }

  res.status(400);
  throw new Error("User does't exist");
});

// @desc Get login user information
// @route /api/users/current
// @access private
const currentUser = asyncHandler(async (req, res) => {
  res.json({ message: "get information about users" });
});

export { registerUser, loginUser, currentUser };
