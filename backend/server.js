import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

import authRoutes from "./routes/auth.routes.js";
import foodRoutes from "./routes/food.routes.js";
import orderRoutes from "./routes/orders.routes.js";

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/food", foodRoutes);
app.use("/api/orders", orderRoutes);

app.listen(process.env.PORT, () => {
  console.log(`🔥 Server running on port ${process.env.PORT}`);
});
