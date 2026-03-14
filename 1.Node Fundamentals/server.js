const http = require("http");

const config = require("./config");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Home Page");
  } else if (req.url === "/about") {
    res.write("About Page");
  } else {
    res.write("404 Not Found");
  }

  res.end();
});

server.listen(config.port, () => {
  console.log("Server running on port 3000");
});
