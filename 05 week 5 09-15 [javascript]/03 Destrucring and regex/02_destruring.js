// Refrencing

/*
| Type                                             | Stored as                  | Assignment Behavior     |
| ------------------------------------------------ | -------------------------- | ----------------------- |
| **Primitive** (e.g. number, string, boolean)     | Value (copied directly)    | Creates a **copy**      |
| **Non-Primitive** (e.g. object, array, function) | Reference (memory address) | Creates a **reference** |
*/


// Primitive Example:
let a = 5;
let b = a;
b = 10;
console.log(a); // 5 (unchanged)


// non -primitive value
let arr1 = [1, 2];
let arr2 = arr1;
arr2.push(3);
console.log(arr1); // [1, 2, 3] (changed)


// ____________________________________



let x = [1,2,3,4,5]

let y = x

x.push(45)

console.log("orginal x :", x);   // orginal x : [ 1, 2, 3, 4, 5, 45 ]
console.log("copied y:", y)      // copied y: [ 1, 2, 3, 4, 5, 45 ]

// by using  =  if we make changes in orginal replicates in copied variables too..

/*
let x = [1, 2, 3, 4, 5];
let y = x;         // y references the same array

x = ["abc"];       // x now points to a **new array**
y.push(45);        // y still points to the **original array**

console.log("original x:", x);  // ["abc"]
console.log("copied y:", y);    // [1, 2, 3, 4, 5, 45]


*/

let x1 = [1,2,3,4,5]

let y1 = [...x1]  // spread operator

y1.push(88)

console.log("orginal x1 :", x1);    // orginal x1 : [ 1, 2, 3, 4, 5 ]
console.log("copied  y1:", y1)     //copied  y1: [ 1, 2, 3, 4, 5, 88 ]

// by using  spread operator we can refrence
// we can change withou affecting another

