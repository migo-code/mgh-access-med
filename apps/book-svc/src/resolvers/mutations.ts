import { BookModel } from "@repo/models/book.model";
import { bookCreatedEvent } from "../db/bullmq.js";
type AddBook = {
  title?: string;
  author?: string;
  bookLocation: string;
}
const mutations = {
  addBook: async (
    _:unknown,
    {
      title,
      author,
      bookLocation,
    }: AddBook
  ) => {
    const newBook = new BookModel({ title, author, bookLocation });
    await newBook.save();
    await bookCreatedEvent({
      id: newBook.id,
      bookLocation: newBook.bookLocation,
    });

    return newBook;
  },
};

export default mutations;
