import mongoose from "mongoose";
const DB_NAME = "medical";

export const connectToDatabase = async () => {
  try {
    await mongoose.connect("mongodb://0.0.0.0:27017", {
      dbName: DB_NAME,
      user: "admin",
      pass: "password",
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};
