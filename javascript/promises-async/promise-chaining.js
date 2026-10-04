// Promise chaining: each .then() receives the value returned by the previous one.
// Usage: node promise-chaining.js [number]   (default: 5)

const input = Number(process.argv[2] ?? 5);

if (Number.isNaN(input)) {
  console.error("Usage: node promise-chaining.js [number]");
  process.exit(1);
}

const myPromise = new Promise((resolve) => {
  setTimeout(() => resolve(input), 2000);
});

myPromise
  .then((result) => {
    console.log(result);
    return result * 2;
  })
  .then((result) => {
    console.log(result);
    return result * 2;
  })
  .then((result) => {
    console.log(result);
    return result * 2;
  });
