import { Router } from "express";
import {
  createAddress,
  getAddresss,
  updateAddress,
  deleteAddress,
} from "../controllers/address.controller.js";

const router = Router();

// Routes
router.post("/", createAddress);
router.put("/:id", updateAddress);
router.delete("/:id", deleteAddress);
router.get("/", getAddresss);

export default router;
