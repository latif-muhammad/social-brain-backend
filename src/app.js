const express = require('express');
const app = express();


// Middleware to parse JSON data
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

module.exports = app;
