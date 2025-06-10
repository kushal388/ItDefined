// *********** Find ****************************
// find is similar to filter it gives only frist value where filter gives you array 

let data = [10,20,31,40,51,60,71]


const  even_find = data.find(num => num % 2 === 0)
const even_filter = data.filter(num => num % 2 === 0);

console.log("even by find : ", even_find);           // even by find :  10
console.log("even by filter : ", even_filter);       // even by filter :  [ 10, 20, 40, 60 ]


console.log(typeof(even_find));    // number
console.log(typeof(even_filter));   // object


//  ************* SORT ******************************
// modifies the orginal array 

let numbers = [89,42,67,243,84,24,4,26,85,63, 1];

// console.log(numbers.sort())  // it wont work as expeected for numbers  it checks the value lexogrpaghically
// i works for string

// ascending
console.log(numbers.sort((a,b) => a-b)); // [1,  4, 24, 26, 42,63, 67, 84, 85, 89,243]  it works

// descending
console.log(numbers.sort((a,b) => b-a))  // [243, 89, 85, 84, 67,63, 42, 26, 24,  4,1]