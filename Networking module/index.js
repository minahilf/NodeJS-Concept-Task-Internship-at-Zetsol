const http = require("http");

const server = http.createServer((req, res) => {
  res.write("Hello Minahil");
  res.end();
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
