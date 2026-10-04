// Simulates a file download with a Promise.
// After 2 seconds it resolves (70% chance) or rejects (30% chance).
// .then() handles success, .catch() handles failure, .finally() always runs.
// Usage: node promise-states.js   (run it a few times to see both outcomes)

const SUCCESS_RATE = 0.7;

const download = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() < SUCCESS_RATE) {
      resolve("Download successful");
    } else {
      reject(new Error("Download failed"));
    }
  }, 2000);
});

download
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(`Unsuccessful: ${error.message}`);
  })
  .finally(() => {
    console.log("Download process is finished.");
  });
