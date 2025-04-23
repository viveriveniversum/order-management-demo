export interface Order {
  id: string;
  customer: string;
  orderDate: string;
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
  items?: OrderItem[] | null;
  totalAmount: number;
}

export interface OrderItem {
  id: string;
  productName: string;
  quantity: number;
  price: number;
  subtotal: number;
  orderId?: string;
}
