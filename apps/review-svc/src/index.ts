import { Worker } from "bullmq";
import { connectToDatabase } from "./db/mongo.js";
import { ReviewModel } from "@repo/models/review.model";

const redisConnection = {
  host: 'localhost',
  port: 6379,
};
await connectToDatabase();
const createReview = async (data: {id: string}) => {
  // TODO: fancy create review
  const review = new ReviewModel({
    questions: [
      {
        description: "test",
      },
    ],
    bookId: data.id,
  });

  return review.save();
};

const worker = new Worker(
  "Review",
  async (job) => {
    if (job.name === "book") {
      return createReview(job.data);
    }
  },
  {
    connection: redisConnection
  }
);

worker.on('active', (job) => {
  console.log(`Processing job ${job.id} of type ${job.name}`);
});