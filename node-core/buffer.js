// Buffer: create from a string, measure bytes, allocate and copy.
// Usage: node buffer.js

const { Buffer } = require("node:buffer");

const input = "buffer";
const buf = Buffer.from(input, "utf8");
const bytesRequired = Buffer.byteLength(input);

console.log("Bytes that we need:", bytesRequired);

const allocated = Buffer.alloc(bytesRequired);
buf.copy(allocated);

console.log("Bytes that we allocated:", allocated.length);
console.log("Read from memory:", allocated.toString());

// Characters and bytes are not the same thing for non-ASCII text
const word = "سلام";
console.log(`"${word}" has ${word.length} characters but ${Buffer.byteLength(word)} bytes`);
