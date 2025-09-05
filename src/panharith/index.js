import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors({ origin: "*" }));

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello, World 22!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});