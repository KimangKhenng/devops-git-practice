import express from 'express';
import userRoutes from './routes/user.routes.js';

const app = express();
const port = 3000;

app.use('/users', userRoutes);
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
const PORT = 3000;