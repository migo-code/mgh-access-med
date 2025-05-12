import { Schema, model } from "mongoose";

const BookSchema = new Schema({
  title: String,
  author: String,
  bookLocation: {
    type: String,
    required: true,
  },
});

export const BookModel = model("Book", BookSchema);