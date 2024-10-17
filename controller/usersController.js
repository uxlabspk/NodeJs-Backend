import asyncHandler from "express-async-handler";

// @desc create user
// @route POST /api/users/register
// @access public
const registerUser = asyncHandler((req, res) => {
  res.json({ message: "register users" });
});

// @desc login users
// @route POST /api/users/login
// @access public
const loginUser = asyncHandler((req, res) => {
  res.json({ message: "login users" });
});

// @desc Get login user information
// @route /api/users/current
// @access private
const currentUser = asyncHandler((req, res) => {
  res.json({ message: "get information about users" });
});

export { registerUser, loginUser, currentUser };
