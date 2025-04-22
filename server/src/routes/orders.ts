import { Router } from "express";
import * as orderController from "../controllers/orderController";

const router = Router();

// GET all orders
router.get("/", orderController.getAllOrders);

// GET order by ID
router.get("/:id", orderController.getOrderById);

// POST create a new order
router.post("/", orderController.createOrder);

export default router;
