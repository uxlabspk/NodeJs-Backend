import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_STRING);
    console.log("Connected Successfully");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

export default connectDB;
