import { Router } from "express";
import {
  createTask,
  deleteTask,
  renderTasks,
  taskToggleDone,
  renderTaskEdit,
  editTask,
  page2,
  page3,
  index,
} from "../controllers/tasks.controllers";

const router = Router();

// Render all tasks
router.get("/", index);

router.get("/page2", renderTasks);

router.get("/page2", page2);

router.get("/page3", page3);

router.post("/tasks/add", createTask);

router.get("/tasks/:id/toggleDone", taskToggleDone);

router.get("/tasks/:id/edit", renderTaskEdit);

router.post("/tasks/:id/edit", editTask);

router.get("/tasks/:id/delete", deleteTask);

export default router;
