// Rest Operator
// The rest operator (...) is a JavaScript syntax used to collect all remaining elements or properties into a single array or object during function calls or destructuring

/*
 let [x,y,z, ...remaining] = [3,5,7, 10,12,3,54,64,75]

console.log(x);  // 3
console.log(y);  //5
console.log(z);  //7
console.log(remaining); // [ 10, 12, 3, 54, 64, 75 ] 

*/

// by using ... will assing the value to remaning ==> rest operator


// Destructuring in JavaScript:
// def : Destructuring is a JavaScript feature that allows you to unpack values from arrays or properties from objects into individual variables in a concise and readable way.

// 1) a)Array destruring 
const numbers = [10, 20, 30];
const [a, b, c] = numbers;  // a = 10, b = 20, c = 30


//  b) Rest in Array Destructuring
const numbers1 = [1, 2, 3, 4, 5, 6];

const [head, ...tail] = numbers1;
console.log(head); // 1
console.log(tail); // [2, 3, 4, 5, 6]


//2) a)  Object destrucring
const user1 = { name1: "Kushal", age1: 25 };
const { name1, age1 } = user1   // name = "Kushal", age = 25

//    b)Rest in Object Destructuring
const user = {
  id: 123,
  name: 'Alice',
  age: 30,
  email: 'alice@example.com'
};

const { id, name, ...otherInfo } = user;
console.log(id, name);        // 123 'Alice'
console.log(otherInfo);       // { age: 30, email: 'alice@example.com' }


// 

/*
  Key Differences: Rest vs. Spread
| Feature     | Rest (`...`)                                             | Spread (`...`)                  |
| ----------- | -------------------------------------------------------- | ------------------------------- |
| Collects    | Remaining elements/properties                            | Expands an array/object         |
| Syntax site | In **de**structuring or params                           | In **constructing** arrays/objs |
| Result      | An **array** (for arrays) or an **object** (for objects) | Individual elements/properties  |

const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];      // [1, 2, 3, 4]

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };   // { a:1, b:2, c:3 }


*/

// spread operator
// The spread operator (...) is a JavaScript syntax used to expand elements of an array or properties of an object into individual elements or key-value pairs.

// Array Spread:
const nums = [1, 2, 3];
const newNums = [...nums, 4, 5];// newNums = [1, 2, 3, 4, 5]

// Object Spread:
const user3 = { name: "Kushal" };
const extendedUser = { ...user3, age: 25 };// extendedUser = { name: "Kushal", age: 25 }


// another example

let x  = [12,23,24]
let y = ["a","b","c"]

let z = [...x , ...y]
console.log(z);             // [ 12, 23, 24, 'a', 'b', 'c' ]
