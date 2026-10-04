// fs.promises: create a directory, write / read / stat / delete a file.
// Works in a temporary directory, so it runs on any machine and cleans up after itself.
// Usage: node fs-promises.js

const fs = require("node:fs/promises");
const os = require("node:os");
const path = require("node:path");

async function task() {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), "fs-demo-"));
  const file = path.join(dir, "test.txt");
  console.log("The test directory was created:", dir);

  try {
    await fs.writeFile(file, "this is a test");
    console.log("The test file was created.");
  } catch (e) {
    console.log(e.message);
  }

  try {
    const content = await fs.readFile(file, "utf8");
    console.log("File content:", content);
  } catch (e) {
    console.log(e.message);
  }

  try {
    const details = await fs.stat(file);
    console.log(`File size: ${details.size}\nDate modified: ${details.mtime}`);
  } catch {
    console.log("The file was not found.");
  }

  try {
    await fs.rm(file);
    console.log("The test file was deleted.");
  } catch (e) {
    console.log(e.message);
  }

  await fs.rm(dir, { recursive: true, force: true });
}

task();
