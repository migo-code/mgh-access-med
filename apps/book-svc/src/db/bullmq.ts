import { Queue } from "bullmq";

const redisConnection = {
  host: "localhost",
  port: 6379,
};
const queue = new Queue("Review", { connection: redisConnection });

type BookCreated = {
  id: string;
  bookLocation: string;
};

export const bookCreatedEvent = ({ id, bookLocation }: BookCreated) =>
  queue.add("book", { id, bookLocation });
