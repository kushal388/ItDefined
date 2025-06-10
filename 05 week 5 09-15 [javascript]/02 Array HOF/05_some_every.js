// *********  SOME  AND EVERY *************************
// retruns boolean true or false
// every -> retrun true every element Passed the condition otherwise false
// some  -> return true even one element passes the condition otherwise false


let age = [ 1,3,5,6,8,9 , 18]

let voter =age.every(el => el > 18)
console.log(voter);       // false  

let age_More_10 = age.some(el => el > 10)
console.log("age more than 10:", age_More_10);  // true
