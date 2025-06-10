//1) Alternate elements of an array

/*
let arr = [10,20,30,40,50]
let res = []

for(let i=0 ; i<=arr.length-1 ; i+=2){
    res.push(arr[i])
}

console.log(res);

*/

// *******************************************************************************

//2) sum of an array

/*

let arr = [10,20,30,40,50]
let sum =0 

for(let i=0 ; i<=arr.length-1 ; i++){
   sum += arr[i]
}

console.log(sum);

*/

// *****************************************************************************************

// 3) MAx of any Array

// let arr = [10,20,30,40,50]
// let max = arr[0]

// for(let i=1 ; i<=arr.length-1 ; i++){
//    if(max < arr[i]){
//       max = arr[i]
//    }
// }

// console.log(max);


//4)  second largest

/*
let arr = [10,40,35,20]

let first =-1;  // least 
let second =-1;


for(let i =0 ; i<arr.length ; i++){
    if(arr[i] > first){
        second = first
        first = arr[i]
    }
    else if(arr[i]> second && arr[i]!== first){      // The else block will run for all other cases, even if the number , is smaller than both first and second or equal to first
        second = arr[i]
    }
}
console.log(second);
*/


// 5) 2 sum

// let nums = [2, 7, 11, 15];
// let target = 13;
// let result = []

// for(let i= 0; i<nums.length; i++){
//     for(let j = i+1 ; j <nums.length ; j++){
//         if(nums[i]+ nums[j] === target){
//             result.push(i,j)
//             break;
//         }
//     }
// }
// console.log(result);




// let arr = [1,2,3,4,5]

// let result1 = arr.map(el => el+2)
// console.log(result1);

// function counter(){
//     let count=0;

//      return function (){
//         count++
//         return count
//     }
   
// }

// let res = counter()
// console.log(res());
// console.log(res());
// console.log(res());
// res()

// function greet(name, callback) {
//   console.log("Hello " + name);
//   // callback(); ← removed
// }

// function sayBye() {
//   console.log("Goodbye!");
// }

// greet("Kushal", sayBye());



// function createCounter(){
//     let count = 0;
//     let name = "kushal"




const numbers = [1, 2, 3, 4, 5, 6];









