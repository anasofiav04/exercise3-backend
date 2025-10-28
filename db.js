import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017";
// const MONGO_URI_local = "mongodb://localhost:27017";

export const connectDB = async () => {
  try {
    console.log(MONGO_URI);
    await mongoose.connect(MONGO_URI);
    console.log("Mongo DB Connected Succesfully");
  } catch (error) {
    console.error("Mongo DB Connection Failed");
  }
};
