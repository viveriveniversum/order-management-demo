import { createClient } from "@supabase/supabase-js";
import "dotenv/config";
import { Order, OrderItem } from "../models/order";

const supabaseUrl = process.env.SUPABASE_URL || "";
const supabaseKey = process.env.SUPABASE_KEY || "";
if (!supabaseUrl || !supabaseKey) {
  console.error("Missing Supabase credentials. Please check your .env file.");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

export const dbService = {
  // Get all orders
  async getAllOrders(): Promise<Order[]> {
    const { data: orders, error } = await supabase.from("orders").select("*");

    if (error) {
      throw new Error(`Error fetching orders: ${error.message}`);
    }

    return orders.map((order) => {
      const orderDate = new Date(order.order_date);
      const formattedDate = orderDate.toLocaleDateString();
      return {
        id: order.id,
        customer: order.customer,
        orderDate: formattedDate,
        status: order.status,
        totalAmount: order.total_amount,
      };
    });
  },

  // Get order by ID with its items
  async getOrderById(id: string): Promise<Order | null> {
    const { data: order, error: orderError } = await supabase
      .from("orders")
      .select("*")
      .eq("id", id)
      .single();

    if (orderError) {
      throw new Error(`Error fetching order: ${orderError.message}`);
    }

    if (!order) {
      return null;
    }

    const { data: items, error: itemsError } = await supabase
      .from("order_items")
      .select("*")
      .eq("order_id", id);

    if (itemsError) {
      throw new Error(`Error fetching order items: ${itemsError.message}`);
    }

    // Mapping items to our model
    const orderItems: OrderItem[] = items.map((item) => ({
      id: item.id,
      productName: item.product_name,
      quantity: item.quantity,
      price: item.price,
      subtotal: item.subtotal,
    }));
    const orderDate = new Date(order.order_date);
    const formattedDate = orderDate.toLocaleDateString();
    return {
      id: order.id,
      customer: order.customer,
      orderDate: formattedDate,
      status: order.status,
      totalAmount: order.total_amount,
      items: orderItems,
    };
  },

  // Create a new order
  async createOrder(orderData: Omit<Order, "id">): Promise<Order> {
    const { data: newOrder, error: orderError } = await supabase
      .from("orders")
      .insert({
        customer: orderData.customer,
        order_date: orderData.orderDate,
        status: orderData.status,
        total_amount: orderData.totalAmount,
      })
      .select()
      .single();

    if (orderError) {
      throw new Error(`Error creating order: ${orderError.message}`);
    }

    if (orderData.items && orderData.items.length > 0) {
      const items = orderData.items.map((item) => ({
        order_id: newOrder.id,
        product_name: item.productName,
        quantity: item.quantity,
        price: item.price,
        subtotal: item.subtotal,
      }));

      const { error: itemsError } = await supabase
        .from("order_items")
        .insert(items);

      if (itemsError) {
        throw new Error(`Error creating order items: ${itemsError.message}`);
      }
    }

    return {
      id: newOrder.id,
      customer: newOrder.customer,
      orderDate: newOrder.order_date,
      status: newOrder.status,
      totalAmount: newOrder.total_amount,
      items: orderData.items,
    };
  },
};
