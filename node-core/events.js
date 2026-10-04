// EventEmitter: on, once, off and the built-in 'removeListener' event.
// Usage: node events.js

const EventEmitter = require("node:events");
const emitter = new EventEmitter();

function loginAdmin(name) {
  console.log("Welcome", name, "- I will delete this listener.");
}

emitter.on("login", (name) => {
  console.log("Welcome", name);
});

// once(): the listener runs only for the first emit
emitter.once("loginOnce", (name) => {
  console.log("Welcome", name, "- this listener runs only once.");
});

emitter.on("loginAdmin", loginAdmin);

// Node emits 'removeListener' whenever a listener is removed
emitter.on("removeListener", (eventName) => {
  console.log(`A listener of "${eventName}" was removed.`);
});

emitter.emit("login", "hamed");

emitter.emit("loginOnce", "ali");
emitter.emit("loginOnce", "ali"); // no output: the listener is already gone

emitter.emit("loginAdmin", "javad");
emitter.off("loginAdmin", loginAdmin);
emitter.emit("loginAdmin", "javad"); // no output: removed
