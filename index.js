import express from 'express';
import cors from 'cors';
import userPanharithRouter from './src/panharith/routes/user.route.js';

const app = express();
app.use(cors({ origin: "*" }));
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/panharith', userPanharithRouter);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
const PORT = 3000;