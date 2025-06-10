// foreach, map, filter , reduce, reduceright , some , every , flatMap , find , sort 



// 1) **************** For each *********************
// syntax: forEach((el , index, arr)
// for each return nothing it perform operation on given elewmts


let fruits = ["apple", "banana", "cherry"];

//a) by functions
// fruits.forEach(function(fruit){
//     console.log(fruit);
    
// })

// b) by arrow functions
// fruits.forEach( fruits2 => {
//     console.log(fruits2);
    
// })

// c) with index
// fruits.forEach( (fruits2 , index ) => {
//     console.log(index + " -> "+ fruits2);
    
// })

// whole array
// fruits.forEach((fruit, index, arr) => {
//   console.log(`${fruit} is at index ${index} in [${arr}]`);
// });



// Another exmaple 


// const users = [
//   { name: "Kushal", age: 25 },
//   { name: "Ritika", age: 30 },
//   { name: "Amit", age: 22 }
// ];

//     users.forEach((user) => {
//   console.log(`${user.name} is ${user.age} years old.`);
// });

// Kushal is 25 years old.
// Ritika is 30 years old.
// Amit is 22 years old.



//  ******* ANother example 

let country = [ "IND" , "AUS" ,"PAK", "NEW", "BAN" ,"USA"]

let rev_Arr = []
country.forEach((el, index , country)=> {
    rev_Arr.push(el.toLowerCase());
    
}) 
// console.log(rev_Arr);  // [ 'ind', 'aus', 'pak', 'new', 'ban', 'usa' ]


let out = country.forEach(el => console.log(el.toLowerCase()))
console.log(out);  //undefined

// it return nothing , we cant store ForEach , it perform  action on given elemets


let num = [2,3,4,5,6,7,8]

num.forEach(el => console.log(el * el))