import { Request, Response } from "express";
import { orders } from "../data/orders";

export const getAllOrders = (req: Request, res: Response) => {
  try {
    res.json(orders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ message: "Failed to fetch orders" });
  }
};

export const getOrderById = (req: Request, res: Response) => {
  try {
    const order = orders.find((o) => o.id === req.params.id);

    if (!order) {
      res.status(404).json({ message: "Order not found" });
      return;
    }

    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
