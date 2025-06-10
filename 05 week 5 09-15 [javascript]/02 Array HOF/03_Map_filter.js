// ************** MAP ********************
// Syntax : map((element, index, array)
// it return a new array 
// map() is an array method used to transform every element in an array and return a new array with the transformed values.


// let country = ["IND", "AUS", "PAK", "NEW", "BAN", "USA"];


let nums = [1,2,3,5,7,8,9]


let sqr =nums.map(el => el * el)
console.log(sqr); // [1,  4,  9, 25,49, 64, 81]

const letters = ['a', 'b', 'c'];
const indexed = letters.map((val, i , arr) => `${i}-${val}->[${arr}]`);
console.log(indexed); // ["0-a", "1-b", "2-c"]



// *********** Filter *********************
// function(currentValue, index, array)
// and it returns a new array with only those elements that pass the conditio
// The filter() method is used to filter elements from an array based on a condition, and it returns a new array with only those elements that pass the condition (i.e., return true).


const numbers = [1, 2, 3, 4, 5, 6];
const even = numbers.filter(num => num % 2 === 0);

console.log(even);  // [2, 4, 6]


const users = [
  { name: "Kushal", active: true },
  { name: "Ritika", active: false },
  { name: "Amit", active: true }
];

const activeUsers = users.filter(user => user.active);

console.log(activeUsers);
// [
//   { name: "Kushal", active: true },
//   { name: "Amit", active: true }
// ]
