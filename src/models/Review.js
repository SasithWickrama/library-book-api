import { Schema, model } from 'mongoose';

const reviewSchema = new Schema({
  book: {
    type: Schema.Types.ObjectId,
    ref: 'Book',
    required: true,
    index: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
    validate: {
      validator: Number.isInteger,
      message: 'Rating must be an integer between 1-5'
    }
  },
  comment: {
    type: String,
    required: true,
    trim: true,
    maxlength: 500
  },
  remarks: [{
    text: {
      type: String,
      required: true,
      trim: true,
      maxlength: 200
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  }],
  status: {
    type: String,
    enum: ['active', 'flagged', 'archived'],
    default: 'active'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: Date
}, {
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Index for frequently queried fields
reviewSchema.index({ book: 1, user: 1, createdAt: -1 });

// Update timestamp on save
reviewSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

export default model('Review', reviewSchema);