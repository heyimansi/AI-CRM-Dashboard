import { Router } from "express";
import {
    getNotes,
    createNote,
    updateNote,
    deleteNote,
} from "../controllers/note.controller.js";
import { protect } from "../middleware/auth.middleware.js";

const router = Router();

// Apply authentication middleware to all routes in this file
router.use(protect);

// Define routes
router.route("/").get(getNotes).post(createNote);
router.route("/:id").put(updateNote).delete(deleteNote);

export default router;