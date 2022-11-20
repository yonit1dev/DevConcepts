const http = require("http");

const hostname = "127.0.0.1";
const port1 = "5000";
const port2 = "3000";

// Basic dummy server
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   res.end("Hello, from the server.\n");
// });

// server.listen(port1, hostname, () => {
//   console.log(`Server running at http://${hostname} on port ${port1}`);
// });

// Basic server that handles requests and responds.
const secondServer = http.createServer((req, res) => {
  let body = [];

  req.on("data", (chunk) => {
    body.push(chunk);
  });

  req.on("end", () => {
    body = Buffer.concat(body).toString();
    console.log(body);

    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write(
      `<h1>Hello from second server!</h1>
      <form method="POST" action="/">
        <input name="fullname" type="text">
        <button type="submit">Submit</button>
      </form>
      `
    );
    res.end();
  });
});

secondServer.listen(port2, hostname, () => {
  console.log("Second Server running!");
});
