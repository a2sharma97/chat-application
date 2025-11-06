import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";

const app = express();
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

import messageRouter from "./routes/message.route.js";
import userRouter from "./routes/user.routes.js";
import { ApiError } from "./utils/ApiError.js";

//routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/messages", messageRouter);

app.use((req, res, next) => {
  next(new ApiError(404, `Route not found: ${req.originalUrl}`));
});

app.use((err, req, res, next) => {
  console.error(err); // log the full error for debugging

  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  res.status(statusCode).json({
    success: false,
    message,
    errors: err.errors || [],
  });
});

export default app;
