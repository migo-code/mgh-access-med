import { Worker } from "bullmq";
import { connectToDatabase } from "./db/mongo.js";
import { ReviewModel } from "@repo/models/review.model";

const redisConnection = {
  host: 'localhost',
  port: 6379,
};
await connectToDatabase();
const createReview = async (data: {bookId: unknown}) => {
  // TODO: fancy create review
  const review = new ReviewModel({
    questions: [
      {
        description: "test",
      },
    ],
    book: data.bookId,
  });
  await review.save();
};

const worker = new Worker(
  "Review",
  async (job) => {
    console.log("got a job", { name: job.name });
    if (job.name === "book") {
      await createReview(job.data);
    }
  },
  {
    connection: redisConnection
  }
);

worker.on('active', (job) => {
  console.log(`Processing job ${job.id} of type ${job.name}`);
});