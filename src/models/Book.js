import { Schema, model } from 'mongoose';

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  isbn: { type: String, required: true, unique: true },
  publishedYear: Number,
  genres: [String],
  createdAt: { type: Date, default: Date.now }
});

export default model('Book', bookSchema);