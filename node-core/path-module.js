// path module: basename, dirname, extname and parse.
// The path functions only work on strings (no disk access), so they never throw
// for a valid string; only the file write needs error handling.
// Usage: node path-module.js

const fs = require("node:fs/promises");
const os = require("node:os");
const path = require("node:path");

async function test() {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), "path-demo-"));
  const pdfFullPath = path.join(dir, "test.pdf");

  try {
    // Plain text with a .pdf name: the extension is only part of the file name,
    // it does not make the content a real PDF.
    await fs.writeFile(pdfFullPath, "hello, this is a test");
    console.log("pdf was created.");
  } catch (error) {
    console.log(error.message);
  }

  console.log("file name:", path.basename(pdfFullPath));
  console.log("file folder path:", path.dirname(pdfFullPath));
  console.log("file extension:", path.extname(pdfFullPath));
  console.log("parsed:", path.parse(pdfFullPath));

  await fs.rm(dir, { recursive: true, force: true });
}

test();
