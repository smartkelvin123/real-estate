import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import color from "colors";
import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";

dotenv.config();

const app = express();
const PORT = 5000;
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

app.use((err, res, req, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "internal server error ";
  res.status(statusCode).json({
    message,
    statusCode,
    success: false,
  });
});

const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI).then((conn) => {
  console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`.cyan.underline.bold);
  });
});
