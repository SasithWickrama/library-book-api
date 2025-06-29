import { Router } from "express";
import {
    getAllBooks,
    getBookByISBN,
    getBooksByAuthor,
    getBooksByTitle,
} from "../controllers/bookController.js";
const router = Router();

// Public routes
router.get("/", getAllBooks);
router.get("/isbn/:isbn", getBookByISBN);
router.get("/author/:author", getBooksByAuthor);
router.get("/title/:title", getBooksByTitle);

export default router;
