const express = require("express");
const cors = require("cors");
const connectDB = require("./db");

// route imprts
const authRoutes = require("./routes/authRoutes");
const facebookRoutes = require("./routes/facebookRoutes");
const scheduledPostRoutes = require("./routes/scheduledPostRoutes");
const postRoutes = require('./routes/postRoutes');
const authMiddleware = require('./middlewares/auth');



require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());

//  routes
app.use('/api/auth', authRoutes);
app.use('/api/posts', authMiddleware, postRoutes);
app.use('/api/scheduled-posts', authMiddleware, scheduledPostRoutes);
app.use('/api/facebook', authMiddleware, facebookRoutes);


// Call the connectDB function to connect MongoDB
connectDB();

module.exports = app;
