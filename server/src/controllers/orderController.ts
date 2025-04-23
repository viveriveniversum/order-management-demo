import { Request, Response, NextFunction } from "express";
import { orders } from "../data/orders";
import { v4 as uuidv4 } from "uuid";
import { Order, OrderItem } from "../models/order";

export const getAllOrders = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(orders);
  } catch (error) {
    next(error);
  }
};

export const getOrderById = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const order = orders.find((o) => o.id === req.params.id);

    if (!order) {
      res.status(404).json({ message: "Order not found" });
      return;
    }

    res.json(order);
  } catch (error) {
    next(error);
  }
};

export const createOrder = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const orderData = req.body;

    // Validate required fields - only customer is required
    if (!orderData.customer) {
      res.status(400).json({
        message: "Invalid order data. Customer is required.",
      });
    }

    let totalAmount = 0;
    let processedItems: OrderItem[] = [];

    // Process items if they exist
    if (
      orderData.items &&
      Array.isArray(orderData.items) &&
      orderData.items.length > 0
    ) {
      processedItems = orderData.items.map((item: any) => {
        const subtotal = item.price * item.quantity;
        totalAmount += subtotal;

        return {
          id: uuidv4(),
          productName: item.productName,
          quantity: item.quantity,
          price: item.price,
          subtotal: subtotal,
        };
      });
    }

    const finalTotalAmount = orderData.totalAmount || totalAmount;

    // unique identifier for the order
    const orderPrefix = "ORD-";
    const highestOrderNum = orders
      .map((order) => {
        const match = order.id.match(/^ORD-(\d+)$/);
        return match ? parseInt(match[1], 10) : 0;
      })
      .reduce((max, num) => Math.max(max, num), 0);

    const newOrderNum = highestOrderNum + 1;
    const paddedOrderNum = String(newOrderNum).padStart(4, "0");

    const newOrder: Order = {
      id: `${orderPrefix}${paddedOrderNum}`,
      customer: orderData.customer,
      orderDate: orderData.orderDate || new Date().toISOString(),
      status: orderData.status || "pending",
      items: processedItems.length > 0 ? processedItems : null,
      totalAmount: parseFloat(finalTotalAmount.toFixed(2)),
    };

    // Add to our data store
    orders.push(newOrder);
  } catch (error) {
    next(error);
  }
};
