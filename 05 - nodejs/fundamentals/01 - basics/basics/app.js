const http = require("http");

const server = http.createServer((req, res) => {
    res.end("Server working");
});

server.listen(3000, () => {
    console.log("Running on http://localhost:3000");
});