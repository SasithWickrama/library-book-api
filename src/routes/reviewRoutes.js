import express from "express";
import {
    addRemark,
    addReview, // Make sure this is included
    deleteReview,
    getBookReviews,
    updateReview,
} from "../controllers/reviewController.js"; // Double-check path
import auth from "../middleware/auth.js";
import { validateRemark, validateReview } from "../middleware/validators.js";

const router = express.Router();

// POST /api/reviews - Add a new review
router.post("/", auth, validateReview, addReview);

// GET /api/reviews/:isbn - Get reviews for a book
router.get("/:isbn", getBookReviews);

// POST /api/reviews/:reviewId/remarks - Add remark to review
router.post("/:reviewId/remarks", auth, validateRemark, addRemark);

// PUT /api/reviews/:reviewId - Update review curl -X PUT http://localhost:3000/api/reviews/REVIEW_ID_HERE
router.put("/:reviewId", auth, validateReview, updateReview);

// curl -X DELETE http://localhost:3000/api/reviews/REVIEW_ID_HERE
router.delete("/:reviewId", auth, validateReview, deleteReview);

export default router;
