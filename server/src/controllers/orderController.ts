import { Request, Response, NextFunction } from "express";
import { dbService } from "../services/db.service";

export const getAllOrders = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const orders = await dbService.getAllOrders();
    res.json(orders);
  } catch (error) {
    next(error);
  }
};

export const getOrderById = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const orderId = req.params.id;

    const order = await dbService.getOrderById(orderId);

    if (!order) {
      res.status(404).json({ message: "Order not found" });
    }

    res.json(order);
  } catch (error) {
    console.error("Error in getOrderById:", error);
    next(error);
  }
};

export const createOrder = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const orderData = req.body;

    // Validate required fields
    if (!orderData.customer) {
      res.status(400).json({ message: "Customer is required" });
    }

    // status if not provided
    if (!orderData.status) {
      orderData.status = "pending";
    }

    if (!orderData.orderDate) {
      orderData.orderDate = new Date().toISOString();
    }

    const newOrder = await dbService.createOrder(orderData);

    res.status(201).json(newOrder);
  } catch (error) {
    next(error);
  }
};
