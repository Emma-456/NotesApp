import express from "express"; // means the same as const express = require("express");
import dotenv from "dotenv"; // allows us to read .env files
import cors from "cors"; // allows us to make cross-origin requests. Allows requests from different domains.

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// connectDB();

// Middlewares
// A middleware is a function that has access to the request and response objects and can modify them. It is executed before the route handler. Useful for authentication, logging, and other tasks. You use app.use() to add middleware to your Express application. It is a powerful tool for handling requests and responses in your application.

// Added to allow cross-origin requests from a specific origin (http://localhost:5173).
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json()); // Built-in middleware for JSON parsing. Allows us to access req.body in our routes. Add before routes.

// Custom middleware that logs the request method and URL to the console.
app.use((req, res, next) => {
  console.log("Request received: " + "Req method:" + req.method + " Req URL: " + req.url); // Logs the request method and URL to the console.
  next(); // Call the next middleware function in the chain.
});

// Custom middleware for rate limiting. Limit the number of requests per IP address.
app.use(rateLimiter)


app.use("/api/notes", notesRoutes);

// Start the database connection then start the server.
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is running on PORT: " + PORT);
  });
})


