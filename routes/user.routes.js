const express = require('express');
const userRoutes = express.Router();

// Define user-related routes here
userRoutes.get('/', (req, res) => {
    res.send('User Home Page');
});

module.exports = userRoutes;