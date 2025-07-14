// console.log("A");
// setTimeout(() => {
//   console.log("B");
// }, 1000);
// console.log("E")



// console.log("A");

// setTimeout(() => {
//   console.log("B");
// }, 1000);

// hello().then(() => {
//   console.log("C");
// });

// console.log("E");

// async function hello() {
//   console.log("D");
// }

// async function hello() {
//   console.log("D");
// }

// hello().then(() => {
//   console.log("C");
// });


// function abc(){
// var a=20
// function xyz(){
//     a= 35
// console.log(a)


// }
// console.log(a)
// xyz()
// }
// abc()


function waitOneSecond() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("🕐 Resolved after 1 second");
    }, 1000);
  });
}

async function example() {
  console.log("1️⃣ Start");

  const result = await waitOneSecond(); // Waits here for the promise to resolve
  console.log("2️⃣ After await:", result);

  console.log("3️⃣ End");
}

example();
console.log("4️⃣ Outside async function");
