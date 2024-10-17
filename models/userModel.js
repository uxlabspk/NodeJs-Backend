import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Enter username"],
    },
    email: {
      type: String,
      required: [true, "Enter email"],
      unique: [true, "Email already exist"],
    },
    password: {
      type: String,
      required: [true, "Enter password"],
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", userSchema);
