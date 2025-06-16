// let arr =[1,2,3,4,5,4,6]
// let unique = []

// for(let i =0 ; i < arr.length;i++){
//     let count=0;

//     for(let j = 0 ;j<arr.length ;j++){
//         if(arr[i] == arr[j]){
//             count++
//         }
//     }


// if(count === 1){
//     let is_exist = false;
//     for(let k=0 ; k<unique.length;k++){
//         if(unique[k]== arr[i]){
//             is_exist = true;
//             break;
//         }
//     }

//     if(!is_exist){
//     unique.push(arr[i])
//      }
//    }
// }

// console.log(unique); / [ 1, 2, 3, 5, 6 ]

// ***********************************************************

// let arr = [3, 1, 3, 2];
// let duplicates = [];

// for (let i = 0; i < arr.length; i++) {
//     let count = 0;

//     // Count how many times arr[i] appears
//     for (let j = 0; j < arr.length; j++) {
//         if (arr[i] === arr[j]) {
//             count++;
//         }
//     }

//     // If it appears more than once, it's a duplicate
//     if (count > 1) {
//         //check in  duplicates[]
//         let alreadyAdded = false;
//         for (let k = 0; k < duplicates.length; k++) {
//             if (duplicates[k] === arr[i]) {
//                 alreadyAdded = true;
//                 break;
//             }
//         }

//         if (!alreadyAdded) {
//             duplicates.push(arr[i]);
//         }
//     }
// }

// console.log("Duplicates:", duplicates);


//************************************** */

let n = 10; 
let a = 0, b = 1;

console.log("Fibonacci Series:");
for (let i = 0; i < n; i++) {
    console.log(a);       
    let c = a + b;       
    a = b;               
    b = c;                
}


// **********************************
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


// ****************

// let arr = [1, 2, 3, 4, 5, 4, 6];
// let result = [];

// for (let i = 0; i < arr.length; i++) {
//     let is_exist = false;

//     for (let j = 0; j < result.length; j++) {
//         if (arr[i] === result[j]) {
//             is_exist = true;
//             break;
//         }
//     }

//     if (!is_exist) {
//         result.push(arr[i]);
//     }
// }

// console.log(result); // [1, 2, 3, 4, 5, 6]


let arr = [1, 2, 3, 4, 5, 4, 5, 3,1 ,6];
let result = [];

for (let i = 0; i < arr.length; i++) {
    let count = 0;

    for (let j = 0; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
            count++;
        }
    }

    // If count > 1, it's a repeating element
     if (count > 1) {
        //check in  duplicates[]
        let alreadyAdded = false;
        for (let k = 0; k < result.length; k++) {
            if (result[k] === arr[i]) {
                alreadyAdded = true;
                break;
            }
        }

        if (!alreadyAdded) {
            result.push(arr[i]);
        }
    }
}

console.log(result); // [4, 4]
