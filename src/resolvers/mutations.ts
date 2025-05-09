import BookModel from "../models/book.model.js";

const mutations = {
  addBook: async (_, { title, author, bookLocation }) => {
    const newBook = new BookModel({title, author, bookLocation});
    return await newBook.save()
  },
};

export default mutations;
