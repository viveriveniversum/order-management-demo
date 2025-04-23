import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
import { orders } from "../data/orders";

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL || "";
const supabaseKey = process.env.SUPABASE_KEY || "";

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing Supabase credentials. Please check your .env file.");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

// Seeding data
const seedDatabase = async () => {
  console.log("Starting database seeding...");

  try {
    for (const order of orders) {
      const { data: orderData, error: orderError } = await supabase
        .from("orders")
        .insert({
          customer: order.customer,
          order_date: order.orderDate,
          status: order.status,
          total_amount: order.totalAmount,
        })
        .select()
        .single();

      if (orderError) {
        console.error("Error inserting order:", orderError);
        continue;
      }

      console.log(
        `Created order for ${order.customer} with ID: ${orderData.id}`
      );

      const orderItems = (order.items ?? []).map((item) => ({
        order_id: orderData.id,
        product_name: item.productName,
        quantity: item.quantity,
        price: item.price,
        subtotal: item.subtotal,
      }));

      const { error: itemsError } = await supabase
        .from("order_items")
        .insert(orderItems);

      if (itemsError) {
        console.error("Error inserting order items:", itemsError);
      } else {
        console.log(
          `  Added ${orderItems.length} items to order ${orderData.id}`
        );
      }
    }

    console.log("Database seeding completed successfully!");
  } catch (error) {
    console.error("Unexpected error during database seeding:", error);
  }
};

seedDatabase()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error("Fatal error:", err);
    process.exit(1);
  });
