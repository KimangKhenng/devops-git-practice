import express from 'express';

const app = express();
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})
export default server;
server.listen(port);
console.log(`Listening on port ${port}`);

app.get("/api",limiter, (req, res) => {
    res.send("Hello World!");
    console.log("OK");
});

