// Copies source.txt to destination.txt with a Readable and a Writable stream,
// handling backpressure by hand: when writer.write() returns false the reader
// is paused until the writer emits 'drain'.
// Usage: node index.js   (any working directory)

const fs = require("node:fs");
const path = require("node:path");

const source = path.join(__dirname, "source.txt");
const destination = path.join(__dirname, "destination.txt");

const reader = fs.createReadStream(source);
const writer = fs.createWriteStream(destination);

reader.on("data", (chunk) => {
  const canContinue = writer.write(chunk);
  console.log("data is transmitting ...");
  if (!canContinue) {
    reader.pause();
    writer.once("drain", () => {
      console.log("Buffer drained, resuming...");
      reader.resume();
    });
  }
});

reader.on("end", () => {
  console.log("This is the end of Readable.");
  writer.end();
});

writer.on("finish", () => {
  console.log("This is the end of Writable.");
});

reader.on("error", (err) => console.error("Read error:", err));
writer.on("error", (err) => console.error("Write error:", err));
