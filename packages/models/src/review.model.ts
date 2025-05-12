import { Schema, model } from "mongoose";

const AnswerSchema = new Schema({
  description: String,
  correctChoice: Boolean,
});

const QuestionSchema = new Schema({
  description: String,
  topic: String,
  chapter: String,
  answers: [AnswerSchema],
});

const ReviewSchema = new Schema({
  // book: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'Book',
  //   required: true
  // },
  bookId: String,
  questions: [QuestionSchema],
});

export const ReviewModel = model("Review", ReviewSchema);