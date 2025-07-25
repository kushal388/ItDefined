// setTimeout(() => {
//   console.log("Runs after 2 seconds");
// }, 2000);

// const { json } = require("body-parser");
// const { log } = require("util")


// setImmediate(()=>{
//     console.log("runs immedialtey!!");
    
// })


// const timer = setTimeout(() => {
//   console.log("This won't run");
// }, 3000);

// clearTimeout(timer); // Cancels it


// console.log("Start");

// setTimeout(() => console.log("setTimeout"), 0);

// async function test() {
//   console.log("Inside async (sync part)");
//   await null;
//   console.log("Inside async (after await)");
// }

// test();

// Promise.resolve().then(() => console.log("Promise"));

// console.log("End");




// object-seal :  not add properties , delete existing proprties , but we can modify existing property
//object-freezw : we cannot add properties , delete existing propeties , cannot modify existing property
     
// const person = {
//     name :"kushal",
//     age: 25,
// }

// // Object.seal(person)
// Object.freeze(person)


// person.age =30
// person.name = "raki"
// delete person.name

// console.log(person);

// shallo copy and deep copy

// const original = {
//   name: "kushal",
//   age: 25,
//   address: {
//     district: "tumkur",
//     state: "karnataka",
//   },
// };



// const duplicate = {...Orginal}

// duplicate.adress.district ="shivamogga"

// console.log(duplicate);

// const copy2 = Object.assign({}, original);
// copy2.name = "rkai"
// console.log(copy2);
// console.log(original);


// const deepCopy = JSON.parse(JSON.stringify(original));

// // Modify nested property
// deepCopy.address.district = "Mysore";

// console.log("Original:", original.address.district);   // ✅ Tumkur (unchanged)
// console.log("Deep:", deepCopy.address.district);       // ✅ Mysore



// const shallowCopy = { ...original };

// // Modify nested property
// shallowCopy.address.district = "Bangalore";

// console.log("Original:", original.address.district);   // ❗ Bangalore (changed)
// console.log("Shallow:", shallowCopy.address.district); // ✅ Bangalore

// const original = {
//   name: "kushal",
//   age: 25,
//   address: {
//     district: "tumkur",
//     state: "karnataka",
//   },
// };

// const shallowCopy = { ...original };

// // Modify nested property
// shallowCopy.address.district = "Bangalore";

// console.log("Original:", original.address.district);   //  Bangalore (changed)
// console.log("Shallow:", shallowCopy.address.district); //  Bangalore


// const deepCopy = JSON.parse(JSON.stringify(original));

// // Modify nested property
// deepCopy.address.district = "Mysore";

// console.log("Original:", original.address.district);   //Tumkur (unchanged)
// console.log("Deep:", deepCopy.address.district);       // Mysore


// A shallow copy in JavaScript creates a new object, but it only copies the top-level properties. If the object contains nested objects or arrays, those are copied by reference, not duplicated.

// A deep copy creates a completely independent clone of an object, including all nested objects or arrays. Changes to the deep copy do not affect the original.


// let numner = 123455677

// for(let i=0 ; i< numner.length ;i++){
//     console.log(numner[i]);
    
// }


// class Animal {
//   constructor(name) {
//     this.name = name;
//     console.log("this is consturcotr");
    
//   }


//   speak() {
//     console.log(`${this.name} makes a noise`);
//   }
// }

// class Dog extends Animal {
//   speak() {
//     console.log(`${this.name} barks`);
//   }
// }

// const dog = new Dog("Rex");
// dog.speak(); // Rex barks

const animal = {
  eats: true
};

const dog = Object.create(animal); // dog inherits from animal
dog.barks = true;

console.log(dog.eats); // true (inherited)
console.log(dog.barks); // true (own property)


/*
| Loop Type  | Iterates Over             | Works With                              | Example Use Case                    |
| ---------- | ------------------------- | --------------------------------------- | ----------------------------------- |
| `for`      | **Indexes (numbers)**     | Arrays, strings                         | When you need index access          |
| `forEach`  | **Values**                | Arrays only                             | Simple iteration over array items   |
| `for...in` | **Keys / Property names** | Objects (and arrays)                    | Iterate over object keys            |
| `for...of` | **Values**                | Iterables (Arrays, Strings, Maps, Sets) | Clean value iteration over iterable |
*/


const arr = ['apple', 'banana', 'cherry'];


for (let i in arr) {
  console.log(i);        //index =>  "0", "1", "2"
  console.log(arr[i]);   //arr[index]=> apple, banana, cherry
}


for (let fruit of arr) {
  console.log(fruit);        // apple, banana, cherry  
}


const obj = { a: 1, b: 2, c: 3 };


// for(let key  in obj){
//   // console.log(key);
//   console.log(obj[key]);
  
  
// }
 // gives error object s not iterable
// for (let value of obj) {
//   console.log(value);
// }


for(let keys of Object.keys(obj)){
  console.log(keys);
  
}


for(let values of Object.values(obj)){
  console.log(values);
  
}
for (let [key, value] of Object.entries(obj)) {
  console.log(key, value);  // a 1, b 2, c 3
}



function createCounter() {
  let count = 0; // private variable

  return function () {
    count++;             // accessing outer scope
    console.log(count);
  };
}

const counter = createCounter();

counter(); // 1
counter(); // 2
counter(); // 3
