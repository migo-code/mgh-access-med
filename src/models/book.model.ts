import mongoose from "mongoose";
const BookSchema = new mongoose.Schema({
    title: String,
    author: String,
    bookLocation: {
        type: String,
        required: true
    }
});
const BookModel = mongoose.model('Book', BookSchema);

export default BookModel;
