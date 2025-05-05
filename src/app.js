const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());

// Middleware to parse JSON data
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

mongoose
  .connect(
    "mongodb+srv://admin:admin@socialbraindb.yisnycm.mongodb.net/?retryWrites=true&w=majority&appName=SocialBrainDb"
  )
  .then(async () => {
    console.log("✅ Connected to MongoDB");
    try {
    } catch (err) {
      console.log("Could not save test user:", err.message);
    }
  })
  .catch((err) => {
    console.error(" Connection error:", err);
  });

module.exports = app;
