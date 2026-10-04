// Simple async login simulation.
// Asks for a username and a password (each after a 1 second delay) using
// async/await, then grants or denies access.
//
// The credentials below are hardcoded on purpose: this is only an exercise
// in async flow, not real authentication. The password is echoed as typed.
// Usage: node async-login.js

const readline = require("node:readline/promises");
const { stdin: input, stdout: output } = require("node:process");

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function ask(rl, question) {
  await delay(1000);
  return rl.question(question);
}

async function checkInfo() {
  const rl = readline.createInterface({ input, output });
  try {
    const name = await ask(rl, "Enter your username: ");
    const pass = await ask(rl, "Enter your password: ");

    if (name === "Hamed" && pass === "1234") {
      console.log("Access is given.");
    } else {
      console.log("Access is denied.");
    }
  } finally {
    rl.close();
  }
}

checkInfo();
