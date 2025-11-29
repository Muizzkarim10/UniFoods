import { Router } from "express";
import { placeOrder, getOrdersByUser } from "../controllers/orders.controller.js";

const router = Router();

router.post("/", placeOrder);
router.get("/:userId", getOrdersByUser);

export default router;
