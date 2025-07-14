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


// Rotate left by 1
    // let arr = [1,2,3,5,6]
    // let rotate = []
    // for(let i=1;i<arr.length;i++){
    //     rotate.push(arr[i])
        
    // }
    // rotate.push(arr[0])
    // console.log(rotate);  // [ 2, 3, 5, 6, 1 ]


// rotate Right by 1
    // let arr = [1,2,3,5,6]
    //  let rotate = []
    //  rotate.push(arr[arr.length-1])
    //  for(let i=0;i<arr.length-1;i++){
    //     rotate.push(arr[i])
        
    //  }
    
    // console.log(rotate);


// sum of alternate elements
    // let arr = [1,2,3,5,6,7,8]
    // let altSum = 0;
    // for (let i = 0; i < arr.length; i += 2) {
    //     altSum += arr[i];
    // }
    // console.log(altSum);

// Count number of even and odd numbers
    // let arr = [1,2,3,5,6,7,8]
    // let even = 0, odd = 0;
    // for (let i = 0; i < arr.length; i++) {
    // if (arr[i] % 2 === 0) {
    //     even++;
    // }
    // else {
    //     odd++;
    // }
    // }
    // console.log(odd);
    // console.log(even);


//  Find peak element (greater than neighbors)
    // let arr = [1, 3, 2, 5, 4, 6, 1];
    // for (let i = 1; i < arr.length - 1; i++) {
    // if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
    //     console.log("Peak:", arr[i]);
    // }
    // }


//  Check if array contains duplicate
    // let arr = [1,2,3,5,2,4,6,7,8]
    // let Dup = false;
    // for (let i = 0; i < arr.length; i++) {
    //   for (let j = i + 1; j < arr.length; j++) {
    //     if (arr[i] === arr[j]) {
    //         Dup = true;
    //     }
    //   }
    // }

    // console.log(Dup); // true





// unique array
    // let arr = [1,2,3,4,5,4,6]
    // let out = []

    // for(let i = 0; i<arr.length ; i++){
    //     let count = 0;

    //     for (let j=0 ; j<arr.length ; j++){
    //         if(arr[i]== arr[j]){
    //             count++
    //         }
    //     }

    //     if(count === 1){
    //         out.push(arr[i])

    //     }
    // }

    // console.log(out);


// Duplicate array

        // let arr = [1, 2, 3, 4, 5, 4, 5, 3,1 ,6];
        // let result = [];

        // for (let i = 0; i < arr.length; i++) {
        //     let count = 0;

        //     for (let j = 0; j < arr.length; j++) {
        //         if (arr[i] === arr[j]) {
        //             count++;
        //         }
        //     }

            
        //     if (count > 1) {
                
        //         let alreadyAdded = false;
        //         for (let k = 0; k < result.length; k++) {
        //             if (result[k] === arr[i]) {
        //                 alreadyAdded = true;
        //                 break;
        //             }
        //         }

        //         if (!alreadyAdded) {
        //             result.push(arr[i]);
        //         }
        //     }
        // }

        // console.log(result); 



// check array is sorted
// let arr = [1, 2, 3, 4, 5, 4, 5, 3,1 ,6];
        // let arr = [1,2,3,4,5]
        // let sorted = true;
        // for (let i = 1; i < arr.length; i++) {
        //     if (arr[i] < arr[i - 1]) {
        //         sorted = false
        //     }
        // } 
        // console.log(sorted);

// missing number
        // let arr = [8, 2, 4, 5, 3, 7, 1];

        // for (let i = 1; i < arr.length + 1; i++) {
        // let found = false;

        // for (let j = 0; j < arr.length; j++) {
        //     if (arr[j] === i) {
        //     found = true;
        //     break;
        //     }
        // }

        // if (!found) {
        //     console.log(i); // This is the missing number
        // }
        // }


// Replace each element with next greatest

// let arr = [4,5,2,10,8]

// for(let i=0 ; i< arr.length ;i++){
//     let nxt_greatest =-1;
//     for(let j= i+1 ; j< arr.length ; j++){
//         if(arr[j]> arr[i]){
//             nxt_greatest = arr[j]
//             break;
//         }
//     }
//     arr[i] = nxt_greatest
// }

// console.log(arr); //  [ 5, 10, 10, -1, -1 ]

//Replace each element with next samllest
    // let arr = [4, 5, 2, 10, 8];

    // for (let i = 0; i < arr.length; i++) {
    // let nextGreatest = -1;
    // for (let j = i + 1; j < arr.length; j++) {
    //     if (arr[i] > arr[j]) {
    //     nextGreatest = arr[j];
    //     break;
    //     }
    // }
    // arr[i] = nextGreatest;
    // }

    // console.log(arr); // [ 2, 2, -1, 8, -1 ]



// Armstrong number // 0,153,370,371, 407 

// let num = 153
// let sum =0
// let temp = num

// while(temp >0){
//     y = temp % 10
//     // console.log("to get last digit ", temp , y);
    
//     sum += y**3
//     // console.log("sum is ", temp , sum);
    
//     temp = parseInt(temp/10)

//     // console.log("remove last digit " ,temp);
    
// }

// console.log(num ,sum);
// if(num == sum){
//     console.log("Armstrong number")
// }
// else{
//     console.log("not an Armstrong number");
    
// }

let arr = [1,2,4,[3,4,5],[30,40,50],30 ,40]
let res =[]
// let arr = [[1,2,3],[3,4,6],[5,6,7]]

for(let i= 0 ; i <arr.length; i++){
     
    res.push(arr[i])

    console.log("i value",arr[i]);
    console.log(Array.isArray(arr[i]))  
}

let num = "1234"

for(let i=num.length-1; i>=0 ;i--){
    console.log(num[i]);
    
}







