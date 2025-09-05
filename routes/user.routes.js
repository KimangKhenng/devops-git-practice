import express from 'express';
const userRoutes = express.Router();

// Define user-related routes here
userRoutes.get('/', (req, res) => {
    res.send('User Home Page');
});

export default userRoutes;