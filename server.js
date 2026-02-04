require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const userRoutes = require("./routes/user");

const app = express();

// Connect MongoDB
connectDB();

// Middleware
app.use(cors()); // Allow all origins (replace with frontend URL in production)
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
