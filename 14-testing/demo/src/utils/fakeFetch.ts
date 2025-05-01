export default async function fakeFetch(url: string) {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, 400);
  });
  if (url === "http://error.com") throw Error("network error");
  return Buffer.from("some data");
}

// callbacks
// pre-2015
// CALLBACK HELL!!
// the user object
// the area object
// the opening hours object

// 2015
// Promise

// pending - unknown period of time
// settled
//   - rejected
//   - resolved
// new Promise((resolve, reject) => {
//   // do some work here!
//   let err;
//   if (err) {
//     reject(err);
//   }
//   resolve("positive");
// });

// // 2017

// async function run() {
//   let err;
//   if (err) {
//     throw new Error("");
//   }
//   return "positive";
// }

// run();
