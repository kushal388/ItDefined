
// ------------------------- stringify ---------------------------------------

// const user = {
//   name: "Kushal",
//   age: 25
// };
// console.log(typeof user); // 👉 "object"

// const jsonString = JSON.stringify(user);
// console.log(typeof jsonString); // 👉 "string"



// -------------------- parse -------------------------

// const jsonStr = '{"name": "Kushal", "age": 25}';

// const user = JSON.parse(jsonStr);
 
// console.log(typeof jsonStr);  // 👉 string 

// console.log(user.name); // 👉 Kushal


// console.log(typeof user); // 👉 "object"


// console.log(user); // { name: 'Kushal', age: 25 }


//  ******************** Parse with reuce and space **********************


const jsonStr = `[
  { "name": "Kushal", "age": 25, "city": "Delhi", "profession": "Developer", "active": true },
  { "name": "Ritika", "age": 30, "city": "Mumbai", "profession": "Designer", "active": false },
  { "name": "Amit", "age": 22, "city": "Bangalore", "profession": "Tester", "active": true },
  { "name": "Suresh", "age": 18, "city": "Chennai", "profession": "Intern", "active": false }
]`;



let  prettyJSON = JSON.parse(jsonStr);
console.log(typeof prettyJSON);  // object



let  modified_json = JSON.stringify(prettyJSON, ['name', 'age' ], 4);
console.log(typeof modified_json);  // string

console.log(  modified_json);
/*
[
    {
        "name": "Kushal",
        "age": 25
    },
    {
        "name": "Ritika",
        "age": 30
    },
    {
        "name": "Amit",
        "age": 22
    },
    {
        "name": "Suresh",
        "age": 18
    }
]
    */