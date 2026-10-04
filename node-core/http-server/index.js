const http = require("node:http");

const PORT = process.env.PORT || 3000;

function sendJson(res, status, body) {
  res.writeHead(status, { "Content-Type": "application/json" });
  res.end(JSON.stringify(body));
}

const server = http.createServer((req, res) => {
  if (req.method !== "GET") {
    return sendJson(res, 405, { error: "Method not allowed" });
  }

  // Ignore the query string so "/api?x=1" still matches "/api"
  const { pathname } = new URL(req.url, `http://${req.headers.host}`);

  switch (pathname) {
    case "/":
      sendJson(res, 200, { message: "This is the home." });
      break;
    case "/about":
      sendJson(res, 200, { now: new Date().toISOString() });
      break;
    case "/api":
      sendJson(res, 200, { message: "This is the api section." });
      break;
    default:
      sendJson(res, 404, { error: "Invalid path." });
  }
});

server.listen(PORT, "localhost", () => {
  console.log(`Server started: http://localhost:${PORT}`);
});
