import { BookModel } from "@repo/models/book.model";
import { bookCreatedEvent } from "../db/bullmq.js";
const mutations = {
  addBook: async (
    _:unknown,
    {
      title,
      author,
      bookLocation,
    }: { title: unknown; author: unknown; bookLocation: unknown }
  ) => {
    const newBook = new BookModel({ title, author, bookLocation });
    await newBook.save();
    const something = await bookCreatedEvent({
      id: newBook.id,
      bookLocation: newBook.bookLocation,
    });
    console.log({ something });
    return newBook;
  },
};

export default mutations;
