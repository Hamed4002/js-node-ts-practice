// The same copy as index.js, using stream.pipeline().
// pipeline() handles backpressure and error cleanup for you.
// Usage: node pipeline.js

const fs = require("node:fs");
const path = require("node:path");
const { pipeline } = require("node:stream/promises");

async function copy() {
  try {
    await pipeline(
      fs.createReadStream(path.join(__dirname, "source.txt")),
      fs.createWriteStream(path.join(__dirname, "destination-pipeline.txt"))
    );
    console.log("Copy finished.");
  } catch (err) {
    console.error("Copy failed:", err.message);
  }
}

copy();
