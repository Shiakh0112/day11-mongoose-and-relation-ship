require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");

const authorRoutes = require("./routes/authorRoutes");
const bookRoutes = require("./routes/bookRoutes");
const transactionRoutes = require("./routes/transactionRoutes");
const userRoutes = require("./routes/userRoutes");

const errorHandler = require("./middleware/errorHandler");

const app = express();

// Middleware
app.use(express.json());

// Connect Database
connectDB();

// Routes
app.use("/authors", authorRoutes);
app.use("/books", bookRoutes);
app.use("/transactions", transactionRoutes);
app.use("/users", userRoutes);

// Error Handling Middleware
app.use(errorHandler);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
