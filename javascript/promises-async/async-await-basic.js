// Fetches user info and job info asynchronously, merges them into one object
// and prints it as formatted JSON (2-space indentation).
//
// Two versions are shown:
//   1. sequential: the second request waits for the first (~2.5 s)
//   2. parallel:   both requests start together via Promise.all (~1.5 s)
// The requests do not depend on each other, so the parallel version is faster.
// Usage: node async-await-basic.js

function getUserInfo() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ name: "Ali", age: 25, country: "Iran" }), 1000);
  });
}

function getJobInfo() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ job: "Frontend Developer", salary: 8000 }), 1500);
  });
}

async function getFullUserInfoSequential() {
  console.time("sequential");
  const user = await getUserInfo();
  const job = await getJobInfo();
  console.log(JSON.stringify({ ...user, ...job }, null, 2));
  console.timeEnd("sequential");
}

async function getFullUserInfoParallel() {
  console.time("parallel");
  const [user, job] = await Promise.all([getUserInfo(), getJobInfo()]);
  console.log(JSON.stringify({ ...user, ...job }, null, 2));
  console.timeEnd("parallel");
}

(async () => {
  await getFullUserInfoSequential();
  await getFullUserInfoParallel();
})();
