import { Schema, model } from "mongoose";

const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    author: {
      type: String,
      required: true,
      trim: true,
    },
    isbn: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    publishedYear: {
      type: Number,
      min: 1000,
      max: new Date().getFullYear(),
    },
    genres: {
      type: [String],
      default: [],
      validate: {
        validator: function (genres) {
          return genres.length <= 5; // Maximum 5 genres per book
        },
        message: "A book can have maximum 5 genres",
      },
    },
    reviews: [
      {
        userId: {
          type: Schema.Types.ObjectId,
          ref: "User",
          required: true,
        },
        rating: {
          type: Number,
          required: true,
          min: 1,
          max: 5,
        },
        comment: {
          type: String,
          required: true,
          trim: true,
          maxlength: 500,
        },
        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Add text index for search functionality
bookSchema.index({
  title: "text",
  author: "text",
  genres: "text",
});

// Virtual for average rating
bookSchema.virtual("averageRating").get(function () {
  if (this.reviews && this.reviews.length > 0) {
    const sum = this.reviews.reduce((acc, review) => acc + review.rating, 0);
    return (sum / this.reviews.length).toFixed(1);
  }
  return null;
});

// Update timestamp on save
bookSchema.pre("save", function (next) {
  this.updatedAt = new Date();
  next();
});

export default model("Book", bookSchema);
