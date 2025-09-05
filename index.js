const express = require('express');
const userRoutes = require('./routes/user.routes.js')

const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

app.get('/about', (req, res) => {
  res.json({ message: 'About Page' });
});

app.get('/contact', (req, res) => {
  res.json({ message: 'Contact Page' });
});

app.use('/users', userRoutes);


module.exports = app;