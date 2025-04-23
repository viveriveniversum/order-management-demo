import express from "express";
import cors from "cors";
import morgan from "morgan";
import orderRoutes from "./routes/orders";

// Init app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(morgan("dev")); // logging middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/orders", orderRoutes);

// Default route
app.get("/", (req, res) => {
  res.json({ message: "Order Management API is running" });
});

// Error handler
app.use(
  (
    err: any,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    console.error(err.stack);
    res.status(500).json({ message: "Something went wrong!" });
  }
);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
