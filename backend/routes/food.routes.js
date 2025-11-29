import { Router } from "express";
import { getAllFood } from "../controllers/food.controller.js";

const router = Router();

router.get("/", getAllFood);

export default router;
