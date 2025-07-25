// let arr =[10,20,25,35,56,76,97,32]

// let max = arr[0]
// let min = arr[0]


// for(let i = 0 ; i < arr.length ; i++){
//     if(arr[i] > max){
//         max = arr[i]
//     }
//     else if(arr[i] < min){
//         min = arr[i]
//     }
// }


// console.log(max);
// console.log(min);



// let array =[10,20,25,35,56,76,76,97,32]

// let first = -Infinity;
// let second = -Infinity;


// for(let i =0 ; i<array.length ;i++){
//     let num = array[i]

//     if(num > first){
//         second = first
//         first = num
//     }
//     else if(num > second && num < first){
//         second = num
//     }
// }

// console.log("second large is ", second);


// let array =[10,20,25,35,56,76,76,97,32]
// for (let i = 0; i < array.length; i++) {
//     let num = array[i];

//     if (num > first) {
//         third = second;
//         second = first;
//         first = num;
//     } else if (num > second && num < first) {
//         third = second;
//         second = num;
//     } else if (num > third && num < second) {
//         third = num;
//     }
// }

// console.log("third large is ", third);


// let array =[10,20,25,35,56,76,76,97,32]
// min for 2nd 3rd





console.log("_________________________________________");

// let array =[10,20,25,35,56,76,76,97,32]

// // console.log(array.sort());

// for(let i =0 ; i < array.length -1 ; i++){
//     for(let j=0 ; j < array.length - 1 -i ; j++){

//         if(array[j] < array[j+1]){
//             let temp = array[j]
//             array[j] = array[j+1]
//             array[j+1] = temp
//         }

//     }
    

// }
// console.log(array);


// let arr = [5, 1, 4, 2, 3];

// for (let i = 0; i < arr.length - 1; i++) {
//     console.log(`Pass ${i + 1}:`);
//     for (let j = 0; j < arr.length - 1 - i; j++) {
//         console.log(`  Comparing ${arr[j]} and ${arr[j + 1]}`);
//         if (arr[j] > arr[j + 1]) {
//             // swap
//             let temp = arr[j];
//             arr[j] = arr[j + 1];
//             arr[j + 1] = temp;
//             console.log(`  Swapped → ${arr}`);
//         }
//     }
//     console.log(`After pass ${i + 1}:`, arr);
//     console.log('---------------------------');
// }

// console.log("Sorted array:", arr);


// let arr = [1,2,4,3,5,4,6]
//     let res =[]

//     for(let i=0 ; i < arr.length; i++){
//         let count =0 ;

//         for(let j=0 ; j< arr.length ;j++){
//             if(arr[i] == arr[j]){
//                 count++;
//             }
//         }

//         if(count === 1){
//             res.push(arr[i])
//         }
//     }

//     console.log(res);



// 4)write a function to remove the duplicate element from an array

function removeDuplicates(arr){
    let result = []

    for(let i = 0 ; i < arr.length ; i++){
        let exist = false ;

        for(let j=0 ; j < result.length ; j++){

            if(arr[i]=== arr[j]){
                exist = true ;
                break;
            }
            
        }

        if(!exist){
            result.push(arr[i])
        }
    }
    return result
}

console.log(removeDuplicates([1, 2, 3, 2, 4, 1, 5]));




// 5) write a function to remove duplicate elements in a string "HelloWorld"

function unique(name){
    let str = ''
    for(let i=0 ; i < name.length; i++){
        let exist = false
        for(let j=0 ; j < str.length ; j++){
            if(name[i]== name[j]){
                exist = true;
                break;
            }
           
        }
        if(!exist)
                str += name[i]
            }
            
    return str
}


console.log(unique("helloworld!"));


