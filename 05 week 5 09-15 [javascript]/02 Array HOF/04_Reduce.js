// ************* Reduce ****************************
// syntax  : array.reduce(callback, initialValue)
// reduce() is used to reduce an array to a single value by executing a callback function on each element of the array.

/* 
(accumulator, currentValue, index, array) => { ... }

accumulator: holds the result of previous executions
currentValue: current array element
initialValue: (optional) value to use as the first accumulator

*/

// exapmle 1 sum of an array

const nums  = [ 1,2,3,4,5,6,7]

// const sum = nums.reduce((acc , cur) => acc + cur , 0 )   // acc starts as 0
const sum = nums.reduce((acc , cur) => acc + cur , 110 )    // acc starts from 110

console.log(sum);

// ✅ Example 2: Find Max
const numbers = [10, 25, 5, 90, 30];

const max = numbers.reduce((acc, cur) => (cur > acc ? cur : acc))
console.log(max);


// ✅ Example 4: Flatten an array

const nested = [[1, 2], [3, 4], [5, 6]];

const flat = nested.reduce((acc, curr) => acc.concat(curr), []);

console.log(flat); // 👉 [1, 2, 3, 4, 5, 6]


// ******************* ReduceRIght  == > from right to left
// reduceRight() works just like reduce(), but it starts from the last element of the array and moves to the first.

const nums2 = [10, 20, 30];

const result1 = nums2.reduce((acc, curr) => acc - curr);
const result2 = nums2.reduceRight((acc, curr) => acc - curr);


console.log("reduce : -" , result1);  // reduce : - -40

console.log("reduceRight : -", result2);  // reduceRight : - 0
