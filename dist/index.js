"use strict";

var express = require('express');
var connectDB = require('./db');
var cors = require("cors");
var authRoutes = require('../routes/auth');
var userRoutes = require('../routes/user');
var app = express();
var PORT = process.env.PORT || 3000;
app.use(cors());
// Connect to MongoDB
connectDB();

// Parse JSON request body
app.use(express.json());

// Define authentication routes
app.use('/auth', authRoutes);

// Define user routes
app.use('/user', userRoutes);

// Start the server and export the http.Server object
var server = app.listen(PORT, function () {
  console.log("Server started on port ".concat(PORT));
});

// Export the server object
module.exports = server;