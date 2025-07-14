// How does Promise chaining work, and why is it useful?


// Each .then() receives the return value from the previous .then().

/*
Promise.resolve(10)
  .then((num) => {
    console.log("Step 1:", num); // 10
    return num + 5;
  })
  .then((newNum) => {
    console.log("Step 2:", newNum); // 15
    return newNum * 2;
  })
  .then((final) => {
    console.log("Step 3:", final); // 30
  });
*/

//   If an error occurs in any .then(), the chain jumps to the nearest .catch().

/*
Promise.resolve(5)
  .then((num) => {
    throw new Error("Oops in Step 1");
  })
  .then((num) => {
    console.log("This won't run");
  })
  .catch((err) => {
    console.error("Caught:", err.message); // Caught: Oops in Step 1
  });
*/

// 💡 Multiple .catch() – Does it work?

/*
Promise.reject("❌ Failed")
  .catch((err) => {
    console.log("First catch:", err);
    // return; // if you return here, chain continues
    throw err; // if you throw again, next catch will handle it
  })
  .catch((err) => {
    console.log("Second catch:", err);
  });

*/

//   ✅ Real-World Example: Clean and Safe Chain

/*

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((res) => res.json())
  .then((data) => {
    console.log("Post Title:", data.title);
    return data;
  })
  .then((data) => {
    console.log("Post ID:", data.id);
  })
  .catch((err) => {
    console.error("Something went wrong:", err);
  })
  .finally(() => {
    console.log("✅ Finished");
  });

*/

//   ✅ .then().catch().then() chaining


new Promise((resolve, reject) => {
  let success = false;

  if (success) {
    resolve("✅ Success!");
  } else {
    reject("❌ Something went wrong!");
  }
})
  .then((result) => {
    console.log("1st THEN:", result);
  })
  .catch((error) => {
    console.log("CATCH:", error);
    return "✅ Recovered from error"; // handled error & continue
  })
  .then((finalResult) => { 
    console.log("2nd THEN:", finalResult);
  });




//   output : CATCH: ❌ Something went wrong!
//             2nd THEN: ✅ Recovered from error



//.catch().catch()

// 1st case
/*


Promise.reject("❌ Something failed")
  .catch((err) => {
    console.log("First catch:", err);
    throw "⚠️ Error again in catch"; // Re-throws a new error
  })
  .catch((err) => {
    console.log("Second catch:", err); // This will run
  });
*/

//   output : First catch: ❌ Something failed
//        Second catch: ⚠️ Error again in catch


// 2nd case

/*
Promise.reject("❌ Initial failure")
  .catch((err) => {
    console.log("First catch:", err);
    return "✅ Handled it"; // No error thrown again
  })
  .catch((err) => {
    console.log("Second catch:", err); // ❌ This won’t run
  });
*/

//   output : First catch: ❌ Initial failure



// new Promise((_,reject) => reject("Oops"));

/*
new Promise((resolve, reject) => {
  setTimeout(() => {
    // reject(new Error("This promise is intentionally unhandled!"));
    // reject("error")
  }, 1000);
});

console.log("This message will appear before the unhandled rejection error.");
*/

// In a browser, you might see something like:
// Uncaught (in promise) Error: This promise is intentionally unhandled!
// In Node.js, it might terminate the process with an error message.

async function test() {
  const value = await 42;  // auto-wrapped
  console.log(value);      // 42
}
test();



// ❌ forEach doesn't work well with await (it doesn't wait).
// ✅ Use for...of for sequential async processing.


// [1, 2, 3].forEach(async (num) => {
//   await delay(num);
//   console.log(num); // Doesn't wait!
// });

// for (const num of [1, 2, 3]) {
//   await delay(num);
//   console.log(num); // Waits for each
// }

function delay(n) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`⏳ Waited ${n} second(s)`);
      resolve();
    }, n * 1000);
  });
}

// ❌ Using forEach — Does NOT wait
console.log("Using forEach:");
[1, 2, 3].forEach(async (num) => {
  await delay(num);
  console.log(`forEach: ${num}`);
});

// ✅ Using for...of — Waits one by one
(async function () {
  console.log("\nUsing for...of:");
  for (const num of [1, 2, 3]) {
    await delay(num);
    console.log(`for...of: ${num}`);
  }
})();


// async function getUser() {
//   return "User";
// }

// async function run() {
//   const data = getUser(); // ❌ forgot await
//   console.log(data);      // Promise {<fulfilled>: "User"}
// }


// run()   // Promise { 'User' }