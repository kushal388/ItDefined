// let arr = [1,2,4,5,6,7,8]

// for(let i=1 ; i < arr.length +1 ; i++){
//     let isFound = false

//     for(let j =0 ; j < arr.length ; j++){
//         if(arr[j] === i){
//             isFound = true;
//             break
//         }
//     }
//     if(!isFound){
//         console.log(i);
        
//     }
// }





/*
 function missingnum(arr){

//      let n = arr.length + 1  // for missing number
//     let total = n *(n+1)/2
//     let  sum = 0

//     for(let i =0 ; i< arr.length ;i++){
//         sum += arr[i]
//     }
//     return total - sum
// }


// console.log(missingnum([1,2,3,5,6,7]))


*/



// 2 sum 

/*
function twosum(arr , target){
for(let i=0; i< arr.length ; i++){

    for(let j = i+1; j < arr.length ; j++){
        if(arr[i] +arr[j] == target){
           return [ i, j] 
        }
    } 
  }
  return -1
}


let arr = [5,10,14,15]
let target = 29


console.log(twosum(arr , target))


*/


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

/*

console.log(" Welcome to ATM");

let bal = 5000;

function withdraw(amnt) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           

            if (bal >= amnt) {
                bal -= amnt;
                resolve(`Your withdrawal of ₹${amnt} is successful`);
            } else {
                reject("Insufficient balance");
            }
        }, 2000);
         console.log("Processing your request..."); 
    });
}


withdraw(4000)
    .then(msg => console.log(msg))
    .catch(error => console.log(error))
    .finally(() => console.log(" Thank you for using the ATM"));

   */ 


    // check num

// function checknum(num){
//     return new Promise((resolve, reject) => {
//         if(num > 100){
//             resolve(" number is greter than 100")
//         }
//         else{
//             reject("num is less than 100")
//         }
//     } )
// }

// checknum(90)
//     .then(data => console.log(data))
//     .catch(data =>console.log(data))


// let number = 6

// let p1 = new Promise((resove, reject) => {
//     if(number >5){
//         resove(`number ${number} is greater than 5`)
//     }
//     else{
//         reject("number ${number} is less than 5")
//     }
// })
// p1.then(data => console.log(data))
// .catch(error => console.log(error))

// console.log(typeof p1);



// let arr = [1,2,3,[4,5,6],7,[5,6,7,8,9],8,9]  
// let flattened = []


// for(let i=0;i<arr.length ; i++){

//     if(Array.isArray(arr[i])){
//         for(let j=0 ; j<arr[i].length ; j++){
//             flattened.push(arr[i][j])
//         }
//     }
//     else{
//         flattened.push(arr[i])
//     }
// }

//    console.log(flattened);



// let arr =[6,5,7,2,4,1,3]

// let sum =0;
// for(let i =0 ; i< arr.length ; i++){
//     sum += arr[i]
// }
// console.log(sum);


// for(let i=0 ; i< arr.length ;i++){
//     for(let j=i+1; j< arr.length ;j++){
//         if(arr[i] > arr[j]){
//             let temp = arr[i]
//             arr[i] = arr[j]
//             arr[j] = temp
//         }
//     }
// }

// console.log(arr);


// for(let i =0 ; i<=10 ; i++){
//     console.log(`2 * ${i} = ${2*i}`);
    
// }
    

let name = "kushal"        
for(let i = name.length-1 ; i>=0 ; i--){
    console.log(name[i]);
    
}


let num =4321
let rev =0

while(num > 0){
    let digit = num % 10 
    rev = rev * 10 + digit
    num = Math.floor(num / 10)
}

console.log(rev);


let arr = [1,2,4,[1,4,5,6],6,7,8,[2,5,7],2,4]

let flattend = []

for(let i=0 ; i< arr.length ; i++){

    if(Array.isArray(arr[i])){
        for(let j=0 ; j< arr[i].length ; j++){
            flattend.push(arr[i][j])
        }
    }
    else{
        flattend.push(arr[i])
    }
}

console.log(flattend);
