const http = require("http");
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("welcome to our page");
    } else if (req.url === "/about") {
        res.end("welcome to About Page");
    } else {
        res.end(`
        <h1>Oops!!!</h1>
        <p>Something went wrong...</p>
        <a href="/">back to home</a>`);
    }
});
server.listen(75);