const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// Must parse JSON
app.use(express.json());

// Routes
app.use("/api", require("./routes/auth"));

// Connect MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.listen(process.env.PORT || 5000, () => {
  console.log("Server running on port", process.env.PORT || 5000);
});
