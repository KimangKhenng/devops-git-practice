import express from 'express';
import userRoutes from './routes/user.routes.js';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

app.get('/contact', (req, res) => {
  res.send('Contact Page');
});

app.use('/users', userRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
//Pheara comments here