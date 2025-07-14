

//  4. How can you create a private variable using a closure?

/*
function secretBox(){
    let secret = "I'm hidden"

    return{
        getsecret : () => secret,
        setsecret : (val) => { secret = val}
    }
}


const box = secretBox()
console.log(box.getsecret());   // I'm hidden

box.setsecret("it my new secret")
console.log(box.getsecret());   // it my new secret


console.log(box.secret);   // undefined ==> canot acess direclty


*/


// (function (name) {
//   console.log("Hello, " + name);
// })("Kushal");



// Create a user object with multiple properties
/*
let user = {
  name: "Kushal",
  age: 25,
  role: "Developer"
};

// Create a WeakMap to store private info for that user
const privateData = new WeakMap();

// Attach secret/private data to the user (NOT directly on the object)
privateData.set(user, {
  salary: "₹1,00,000",
  loginToken: "abc123secret"
});

// Access the private data
console.log("User name:", user.name); // ✅ Access public data
console.log("Private salary:", privateData.get(user).salary); // ✅ Access private data
console.log("Token:", privateData.get(user).loginToken);      // ✅ Access private data

// Now remove the only reference to user
user = null;
*/
// After this point:
// - the original user object is unreachable
// - JS automatically garbage collects the object
// - and also removes its private data from WeakMap



// let result = "abc" / 2;
// console.log(result); // 👉 NaN


// console.log(typeof result);



// function compose(f, g) {
//   return function(x) {
//     return f(g(x));
//   };
// }

// // Example:
// const double = x => x * 2;
// const square = x => x * x;

// const doubleThenSquare = compose(square, double);
// console.log(doubleThenSquare(3)); // (3*2)^2 = 36




// "use strict";
// function show() {
//   console.log(this);
// }
// show(); // undefined



// "use strict";
// console.log(this); // undefined



function show() {
  console.log(this);
}
show(); // window (in browser)
