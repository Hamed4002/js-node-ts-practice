# Simple Node.js HTTP Server

A basic HTTP server built with the Node.js core `http` module and no frameworks. It shows how to route requests by URL and send JSON responses by hand.

## Routes

| Method | Path     | Response                                |
| ------ | -------- | --------------------------------------- |
| GET    | `/`      | `{ "message": "This is the home." }`    |
| GET    | `/about` | `{ "now": "<current server time>" }`    |
| GET    | `/api`   | `{ "message": "This is the api section." }` |
| GET    | other    | `404` with `{ "error": "Invalid path." }` |
| other  | any      | `405` with `{ "error": "Method not allowed" }` |

## Run

From the repository root:

```bash
npm run http-server
# or
node node-core/http-server/index.js
```

Then open `http://localhost:3000/` (set the `PORT` environment variable to use another port).

Requires Node.js 18 or newer.
