import { Order } from "../models/order";

export const orders: Order[] = [
  {
    customer: "Sarah Johnson",
    orderDate: new Date("2023-05-01").toISOString(),
    status: "delivered",
    totalAmount: 1899.97,
    items: [
      {
        productName: "MacBook Pro",
        quantity: 1,
        price: 1799.99,
        subtotal: 1799.99,
      },
      {
        productName: "Laptop Sleeve",
        quantity: 1,
        price: 49.99,
        subtotal: 49.99,
      },
      {
        productName: "USB-C Adapter",
        quantity: 1,
        price: 49.99,
        subtotal: 49.99,
      },
    ],
  },
  {
    customer: "Thomas Williams",
    orderDate: new Date("2023-05-03").toISOString(),
    status: "processing",
    totalAmount: 699.98,
    items: [
      { productName: "iPad", quantity: 1, price: 599.99, subtotal: 599.99 },
      {
        productName: "Apple Pencil",
        quantity: 1,
        price: 99.99,
        subtotal: 99.99,
      },
    ],
  },
  {
    customer: "Jessica Brown",
    orderDate: new Date("2023-05-05").toISOString(),
    status: "pending",
    totalAmount: 449.97,
    items: [
      {
        productName: "Wireless Earbuds",
        quantity: 1,
        price: 249.99,
        subtotal: 249.99,
      },
      {
        productName: "Charging Case",
        quantity: 1,
        price: 49.99,
        subtotal: 49.99,
      },
      {
        productName: "Extended Warranty",
        quantity: 1,
        price: 149.99,
        subtotal: 149.99,
      },
    ],
  },
  {
    customer: "William Davis",
    orderDate: new Date("2023-05-08").toISOString(),
    status: "shipped",
    totalAmount: 329.98,
    items: [
      {
        productName: "Coffee Maker",
        quantity: 1,
        price: 299.99,
        subtotal: 299.99,
      },
      {
        productName: "Coffee Beans",
        quantity: 2,
        price: 14.99,
        subtotal: 29.98,
      },
    ],
  },
  {
    customer: "Emma Wilson",
    orderDate: new Date("2023-05-10").toISOString(),
    status: "delivered",
    totalAmount: 799.99,
    items: [
      {
        productName: "Vacuum Cleaner",
        quantity: 1,
        price: 799.99,
        subtotal: 799.99,
      },
    ],
  },
  {
    customer: "Oliver Taylor",
    orderDate: new Date("2023-05-12").toISOString(),
    status: "processing",
    totalAmount: 1249.97,
    items: [
      { productName: "Sofa", quantity: 1, price: 999.99, subtotal: 999.99 },
      {
        productName: "Coffee Table",
        quantity: 1,
        price: 249.98,
        subtotal: 249.98,
      },
    ],
  },
  {
    customer: "Sophia Moore",
    orderDate: new Date("2023-05-15").toISOString(),
    status: "cancelled",
    totalAmount: 1599.97,
    items: [
      {
        productName: "Dining Table",
        quantity: 1,
        price: 899.99,
        subtotal: 899.99,
      },
      {
        productName: "Dining Chair",
        quantity: 4,
        price: 174.99,
        subtotal: 699.98,
      },
    ],
  },
  {
    customer: "Noah Anderson",
    orderDate: new Date("2023-05-18").toISOString(),
    status: "delivered",
    totalAmount: 1359.98,
    items: [
      { productName: "4K TV", quantity: 1, price: 1299.99, subtotal: 1299.99 },
      { productName: "HDMI Cable", quantity: 2, price: 29.99, subtotal: 59.98 },
    ],
  },
  {
    customer: "Ava Thompson",
    orderDate: new Date("2023-05-20").toISOString(),
    status: "shipped",
    totalAmount: 549.99,
    items: [
      {
        productName: "Gaming Console",
        quantity: 1,
        price: 499.99,
        subtotal: 499.99,
      },
      { productName: "Controller", quantity: 1, price: 59.99, subtotal: 59.99 },
    ],
  },
  {
    customer: "Liam Martin",
    orderDate: new Date("2023-05-22").toISOString(),
    status: "pending",
    totalAmount: 4599.95,
    items: [
      {
        productName: "Refrigerator",
        quantity: 1,
        price: 2499.99,
        subtotal: 2499.99,
      },
      {
        productName: "Dishwasher",
        quantity: 1,
        price: 899.99,
        subtotal: 899.99,
      },
      {
        productName: "Microwave",
        quantity: 1,
        price: 399.99,
        subtotal: 399.99,
      },
      { productName: "Toaster", quantity: 1, price: 79.99, subtotal: 79.99 },
      { productName: "Blender", quantity: 1, price: 129.99, subtotal: 129.99 },
      {
        productName: "Installation Service",
        quantity: 1,
        price: 589.99,
        subtotal: 589.99,
      },
    ],
  },
  {
    customer: "Charlotte Garcia",
    orderDate: new Date("2023-05-25").toISOString(),
    status: "processing",
    totalAmount: 387.93,
    items: [
      { productName: "T-Shirt", quantity: 5, price: 19.99, subtotal: 99.95 },
      { productName: "Jeans", quantity: 3, price: 59.99, subtotal: 179.97 },
      { productName: "Socks", quantity: 6, price: 7.99, subtotal: 47.94 },
      { productName: "Hat", quantity: 2, price: 29.99, subtotal: 59.98 },
    ],
  },
  {
    customer: "Benjamin Rodriguez",
    orderDate: new Date("2023-05-28").toISOString(),
    status: "delivered",
    totalAmount: 429.94,
    items: [
      {
        productName: "Office Chair",
        quantity: 1,
        price: 299.99,
        subtotal: 299.99,
      },
      { productName: "Desk Lamp", quantity: 1, price: 49.99, subtotal: 49.99 },
      {
        productName: "Notebook Set",
        quantity: 2,
        price: 24.99,
        subtotal: 49.98,
      },
      { productName: "Pen Set", quantity: 1, price: 29.98, subtotal: 29.98 },
    ],
  },
  {
    customer: "Mia Lopez",
    orderDate: new Date("2023-06-01").toISOString(),
    status: "shipped",
    totalAmount: 769.95,
    items: [
      {
        productName: "Treadmill",
        quantity: 1,
        price: 699.99,
        subtotal: 699.99,
      },
      {
        productName: "Water Bottle",
        quantity: 2,
        price: 14.99,
        subtotal: 29.98,
      },
      { productName: "Towel Set", quantity: 1, price: 39.98, subtotal: 39.98 },
    ],
  },
  {
    customer: "Elijah Perez",
    orderDate: new Date("2023-06-03").toISOString(),
    status: "delivered",
    totalAmount: 25.99,
    items: [
      {
        productName: "Phone Charger",
        quantity: 1,
        price: 25.99,
        subtotal: 25.99,
      },
    ],
  },
  {
    customer: "Amelia Gonzalez",
    orderDate: new Date("2023-06-05").toISOString(),
    status: "pending",
    totalAmount: 159.98,
    items: [
      {
        productName: "Bluetooth Speaker",
        quantity: 1,
        price: 129.99,
        subtotal: 129.99,
      },
      { productName: "Batteries", quantity: 1, price: 29.99, subtotal: 29.99 },
    ],
  },
  {
    customer: "Lucas Wilson",
    orderDate: new Date("2023-06-07").toISOString(),
    status: "processing",
    totalAmount: 89.97,
    items: [
      {
        productName: "Fitness Tracker",
        quantity: 1,
        price: 89.97,
        subtotal: 89.97,
      },
    ],
  },
  {
    customer: "Harper Lewis",
    orderDate: new Date("2023-06-09").toISOString(),
    status: "cancelled",
    totalAmount: 1899.99,
    items: [
      {
        productName: "Gaming Laptop",
        quantity: 1,
        price: 1899.99,
        subtotal: 1899.99,
      },
    ],
  },
  {
    customer: "Evelyn Lee",
    orderDate: new Date("2023-06-11").toISOString(),
    status: "shipped",
    totalAmount: 179.97,
    items: [
      {
        productName: "External Hard Drive",
        quantity: 1,
        price: 129.99,
        subtotal: 129.99,
      },
      { productName: "USB Drive", quantity: 1, price: 49.98, subtotal: 49.98 },
    ],
  },
  {
    customer: "Mason Walker",
    orderDate: new Date("2023-06-13").toISOString(),
    status: "delivered",
    totalAmount: 543.91,
    items: [
      {
        productName: "Protein Powder",
        quantity: 1,
        price: 59.99,
        subtotal: 59.99,
      },
      {
        productName: "Shaker Bottle",
        quantity: 1,
        price: 9.99,
        subtotal: 9.99,
      },
      { productName: "Vitamins", quantity: 2, price: 29.99, subtotal: 59.98 },
      { productName: "Gym Gloves", quantity: 1, price: 19.99, subtotal: 19.99 },
      {
        productName: "Resistance Bands",
        quantity: 1,
        price: 29.99,
        subtotal: 29.99,
      },
      { productName: "Gym Bag", quantity: 1, price: 49.99, subtotal: 49.99 },
      {
        productName: "Foam Roller",
        quantity: 1,
        price: 34.99,
        subtotal: 34.99,
      },
      { productName: "Jump Rope", quantity: 1, price: 14.99, subtotal: 14.99 },
      {
        productName: "Workout Plan",
        quantity: 1,
        price: 99.99,
        subtotal: 99.99,
      },
      {
        productName: "Protein Bars",
        quantity: 8,
        price: 2.99,
        subtotal: 23.92,
      },
      { productName: "Gym Towel", quantity: 2, price: 19.99, subtotal: 39.98 },
      {
        productName: "Water Bottle",
        quantity: 1,
        price: 24.99,
        subtotal: 24.99,
      },
      { productName: "Headband", quantity: 2, price: 9.99, subtotal: 19.98 },
      { productName: "Gym Socks", quantity: 3, price: 11.99, subtotal: 35.97 },
      {
        productName: "Wrist Wraps",
        quantity: 1,
        price: 19.19,
        subtotal: 19.19,
      },
    ],
  },
  {
    customer: "Abigail Hall",
    orderDate: new Date("2023-06-15").toISOString(),
    status: "pending",
    totalAmount: 499.99,
    items: [
      {
        productName: "Smart Watch",
        quantity: 1,
        price: 399.99,
        subtotal: 399.99,
      },
      { productName: "Watch Band", quantity: 2, price: 49.99, subtotal: 99.98 },
    ],
  },
  {
    customer: "James Allen",
    orderDate: new Date("2023-06-17").toISOString(),
    status: "shipped",
    totalAmount: 499.99,
    items: [
      {
        productName: "Mountain Bike",
        quantity: 1,
        price: 499.99,
        subtotal: 499.99,
      },
    ],
  },
  {
    customer: "Scarlett Young",
    orderDate: new Date("2023-06-19").toISOString(),
    status: "processing",
    totalAmount: 2399.96,
    items: [
      {
        productName: "Desktop Computer",
        quantity: 1,
        price: 1499.99,
        subtotal: 1499.99,
      },
      { productName: "Monitor", quantity: 2, price: 349.99, subtotal: 699.98 },
      {
        productName: "Keyboard and Mouse Set",
        quantity: 1,
        price: 99.99,
        subtotal: 99.99,
      },
      { productName: "Webcam", quantity: 1, price: 99.99, subtotal: 99.99 },
    ],
  },

  // Kitchen appliances
  {
    customer: "Victoria Hernandez",
    orderDate: new Date("2023-06-21").toISOString(),
    status: "delivered",
    totalAmount: 349.97,
    items: [
      {
        productName: "Stand Mixer",
        quantity: 1,
        price: 249.99,
        subtotal: 249.99,
      },
      {
        productName: "Mixing Bowls",
        quantity: 1,
        price: 49.99,
        subtotal: 49.99,
      },
      {
        productName: "Measuring Cups",
        quantity: 1,
        price: 24.99,
        subtotal: 24.99,
      },
      {
        productName: "Spatula Set",
        quantity: 1,
        price: 24.99,
        subtotal: 24.99,
      },
    ],
  },

  {
    customer: "Grace King",
    orderDate: new Date("2023-06-23").toISOString(),
    status: "pending",
    totalAmount: 459.94,
    items: [
      {
        productName: "Lawn Mower",
        quantity: 1,
        price: 299.99,
        subtotal: 299.99,
      },
      {
        productName: "Garden Hose",
        quantity: 1,
        price: 49.99,
        subtotal: 49.99,
      },
      {
        productName: "Garden Tools Set",
        quantity: 1,
        price: 59.99,
        subtotal: 59.99,
      },
      {
        productName: "Plant Fertilizer",
        quantity: 2,
        price: 24.99,
        subtotal: 49.98,
      },
    ],
  },
  {
    customer: "Chloe Wright",
    orderDate: new Date("2023-06-25").toISOString(),
    status: "processing",
    totalAmount: 529.95,
    items: [
      { productName: "Curtains", quantity: 2, price: 89.99, subtotal: 179.98 },
      {
        productName: "Throw Pillows",
        quantity: 4,
        price: 29.99,
        subtotal: 119.96,
      },
      { productName: "Area Rug", quantity: 1, price: 199.99, subtotal: 199.99 },
      { productName: "Wall Art", quantity: 1, price: 29.99, subtotal: 29.99 },
    ],
  },
  {
    customer: "Daniel Scott",
    orderDate: new Date("2023-06-27").toISOString(),
    status: "delivered",
    totalAmount: 3999.99,
    items: [
      {
        productName: "OLED TV",
        quantity: 1,
        price: 3999.99,
        subtotal: 3999.99,
      },
    ],
  },
  {
    customer: "Lily Green",
    orderDate: new Date("2023-06-29").toISOString(),
    status: "shipped",
    totalAmount: 9.99,
    items: [{ productName: "Book", quantity: 1, price: 9.99, subtotal: 9.99 }],
  },
  {
    customer: "Zoey Baker",
    orderDate: new Date("2023-07-01").toISOString(),
    status: "processing",
    totalAmount: 129.99,
    items: [
      {
        productName: "Air Purifier",
        quantity: 1,
        price: 129.99,
        subtotal: 129.99,
      },
    ],
  },
  {
    customer: "Gabriel Adams",
    orderDate: new Date("2023-07-03").toISOString(),
    status: "pending",
    totalAmount: 76.97,
    items: [
      {
        productName: "Dress Shirt",
        quantity: 1,
        price: 59.99,
        subtotal: 59.99,
      },
      { productName: "Tie", quantity: 1, price: 16.98, subtotal: 16.98 },
    ],
  },
];
