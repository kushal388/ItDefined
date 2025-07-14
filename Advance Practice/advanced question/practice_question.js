// let arr = [1,2,3,4,6]
// let res = []

// for(let i=0; i< arr.length ; i++){
//     res.push(arr[i])
// }

// console.log(res);

// let arr = [1,2,3,4,6]
// let sum = 0;

// for(let i =0 ; i< arr.length ; i++){
//     sum+= arr[i]
// }

// console.log(sum);


// let arr = [1,2,3,4,6]
// let max = arr[0]

// for(let i =1 ; i<=arr.length-1; i++){
//     if(max < arr[i]){
//         max= arr[i]
//     }
// }

// console.log(max);


// let arr = [1,2,4,5,7]
// let rev = []

// for(let i = arr.length-1 ; i>=0 ; i--){
//     rev.push(arr[i])
// }

// console.log(rev);



// let arr = [1,2,4,5,7]
// // let rev = []

// for(let i = arr.length-1 ; i>=0 ; i--){
// console.log(arr[i]);
// }

// let name = "kushal"

// for(let i = 0 ; i< name.length ; i++){
//     console.log(name[i]);
    
// }
// console.log("***************************");


// for(let i =name.length-1 ; i>=0; i--){
//     console.log(name[i]);
    
// }


// let num = 1234
// let rev =0;

// while(num > 0){
//     let last_digit = num % 10
//      rev = rev * 10 +last_digit
//     num = Math.floor(num / 10)
// }

// console.log(rev);


// let num =4321
// let rev =0

// while(num > 0){
//     let digit = num % 10 
//     rev = rev * 10 + digit
//     num = Math.floor(num / 10)
// }

// console.log(rev);


let arr = [10,20,30,40]

let fisrt = -1
let second = -1

for(let i=0 ; i<arr.length ; i++){
    if(arr[i]> fisrt){
        second = fisrt
        fisrt = arr[i]
    }
    else if (arr[i] > second && arr[i]!== fisrt){
        second = arr[i]
    }
}

console.log(second);


let a=0
let b=0
let c ;

