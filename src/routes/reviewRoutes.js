import express from 'express';
import {
    addRemark,
    addReview,
    getBookReviews
} from '../controllers/reviewController.js';
import auth from '../middleware/auth.js';
import { validateRemark, validateReview } from '../middleware/validators.js';

const router = express.Router();

// POST /api/reviews - Add a new review
router.post('/', auth, validateReview, addReview);

// GET /api/reviews/:isbn - Get reviews for a book
router.get('/:isbn', getBookReviews);

// POST /api/reviews/:reviewId/remarks - Add remark to review
router.post('/:reviewId/remarks', auth, validateRemark, addRemark);

export default router;