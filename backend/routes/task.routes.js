import { Router } from "express";
import {
    getTasks,
    createTask,
    updateTask,
    deleteTask,
} from "../controllers/task.controller.js";
import { protect } from "../middleware/auth.middleware.js";

const router = Router();

// Apply authentication middleware to all routes in this file
router.use(protect);

// Define routes
router.route("/").get(getTasks).post(createTask);
router.route("/:id").put(updateTask).delete(deleteTask);

export default router;