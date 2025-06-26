//1) ESM Modules


import {add , PI} from "./calc.js"


console.log(add(3,4));
console.log(PI);




// 2) Common jS modules

/*
const {add , PI} = require('./calc.js')

console.log(add(3,4));
console.log(PI);

// another type of extract
let abc = require('./calc.js')

let output = abc.add(30,40)
console.log(output);

*/



// 3) AMD modules  // it wont work without HTML  file [  Error: The "id" argument must be of type string. Received an instance of Array]
// You’ll get that exact error because Node.js does not understand AMD syntax
/*
require(['./calc.js'], function(calc) {
    console.log(calc.add(3, 4));
    console.log(calc.PI);
});
*/