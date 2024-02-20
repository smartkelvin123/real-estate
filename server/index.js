import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Color from "colors";
dotenv.config();

const app = express();
const PORT = 5000;
app.use(express.json());

const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI).then((conn) => {
  console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`.cyan.underline.bold);
  });
});
