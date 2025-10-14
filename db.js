import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017";

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Mongo DB Connected Succesfully");
  } catch (error) {
    console.error("Mongo DB Connection Failed");
  }
};
