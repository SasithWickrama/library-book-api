import { body } from 'express-validator';

export const validateReview = [
  body('bookId').isMongoId().withMessage('Invalid book ID'),
  body('rating')
    .isInt({ min: 1, max: 5 })
    .withMessage('Rating must be between 1-5'),
  body('comment')
    .trim()
    .isLength({ min: 10, max: 500 })
    .withMessage('Comment must be between 10-500 characters')
];

export const validateRemark = [
  body('text')
    .trim()
    .isLength({ min: 5, max: 200 })
    .withMessage('Remark must be between 5-200 characters')
];