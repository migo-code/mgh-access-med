import { BookModel } from "@repo/models/book.model";
import { ReviewModel } from "@repo/models/review.model";
type ID = {
  id?: string;
};

const queries = {
  book: async (_: unknown, { id }: ID) => BookModel.findById(id),
  books: async () => BookModel.find(),

  review: async (_: unknown, { id }: ID) => ReviewModel.findById(id),
  reviews: async () => ReviewModel.find(),
};

export default queries;
