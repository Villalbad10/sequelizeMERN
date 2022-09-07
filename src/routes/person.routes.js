import { Router } from "express";
import {
  getPersons,
  createPerson,
  updatePerson,
  deletePerson,
} from "../controllers/person.controller.js";

const router = Router();

// Routes
router.post("/", createPerson);
router.get("/", getPersons);
router.put("/:id", updatePerson);
router.delete("/:id", deletePerson);

//router.get("/:id/tasks", getPersonTasks);

export default router;
