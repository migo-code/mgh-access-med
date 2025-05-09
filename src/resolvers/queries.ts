import BookModel from "../models/book.model.js";

const queries = {
  book: async (_, { id }) => BookModel.findById(id),
  books: async () => BookModel.find(),
};

export default queries;
