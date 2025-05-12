import { Queue } from "bullmq";

const redisConnection = {
  host: "localhost",
  port: 6379,
};
const queue = new Queue("Review", { connection: redisConnection });

export const bookCreatedEvent = ({
  id,
  bookLocation,
}: {
  id: unknown;
  bookLocation: unknown;
}) => queue.add("book", { id, bookLocation });
