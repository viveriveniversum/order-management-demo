import { Order } from "../models/order";

// Mock data
export const orders: Order[] = [
  {
    id: "ORD-1001",
    customer: "John Doe",
    orderDate: "2023-04-15T10:30:00Z",
    status: "delivered",
    totalAmount: 156.99,
  },
  {
    id: "ORD-1002",
    customer: "Jane Smith",
    orderDate: "2023-04-16T14:20:00Z",
    status: "processing",
    totalAmount: 89.5,
  },
  {
    id: "ORD-1003",
    customer: "Robert Johnson",
    orderDate: "2023-04-17T09:15:00Z",
    status: "pending",
    totalAmount: 245.75,
  },
];
