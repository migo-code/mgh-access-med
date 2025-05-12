import { BookModel } from "@repo/models/book.model";
import { ReviewModel } from "@repo/models/review.model";
const queries = {
    // review: async (
    //   parent: { review: unknown },
    //   __dirname: unknown,
    //   { models }: { models: unknown }
    // ) => ReviewModel.findById(parent.review),
  book: async (_: unknown, { id }: { id: unknown }) =>
    await BookModel.findById(id),
  books: async () => BookModel.find(),
};

export default queries;
