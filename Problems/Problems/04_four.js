// 23)	Write aJavaScript program that takes an array like [1, 1, 2, 3, 3, 3] and returns an object where the keys are the 
// elements and the values are the count of how many times each element appears

/*
    let arr = [1,1,2,3,3,3,4,5,5,7,6,5,3,6,6]

    let count = {}

    for(let i=0 ; i<arr.length; i++){
        let item =arr[i]

        if(count[item]){
            count[item] += 1
        }else{
            count[item]=1
        }


    }
    console.log(count);
*/

/*

    let str = "kuskushalll"

    let count = {}


     for(let i=0 ; i<str.length; i++){
        let item =str[i]

        if(count[item]){
            count[item] += 1
        }else{
            count[item]=1
        }


    }
    console.log(count);

*/


// 1) Find the Max and Min num bin an Array

/*
let arr =[10,20,25,35,56,76,97,32]

let max = arr[0]
let min = arr[0]


for(let i=0 ; i < arr.length; i++){
    if(arr[i] > max){
        max = arr[i]
    }
    else if(arr[i] < min){
        min = arr[i]

    }
}


console.log("maximim is " , max);
console.log("minimum is" , min);
*/


// 2) 	Find a 2nd maximum and Minimum number in an array 

/*
    let array =[10,20,25,35,56,76,76,85,97,32]

    let first = -Infinity;
    let second = -Infinity;

    for(let i=0 ; i < array.length ; i++){
        let num = array[i]

        if(num > first){
            second = first
            first = num
        }else if(num > second && num < first){
            second = num
        }
    }

    console.log("second large is ", second);
*/

/*
  let array =[10,20,25,35,56,76,76,85,97,32]


  let first = Infinity;
  let second = Infinity;

  for(let i=0 ; i < array.length ; i++){
    let num = array[i]

    if(num < first){
        second = first;
        first = num
    }else if (num < second && num > first){
        second = num;
    }
  }

   console.log("second min is ", second);
*/

/*
  
  let array =[10,20,25,35,56,76,76,85,97,32]

  let first = -Infinity;
  let second = -Infinity;
  let third = -Infinity;

    for(let i=0 ; i < array.length ; i++){
        let num = array[i]

        if(num > first){
            third = second
            second = first
            first = num
        }else if(num > second && num < first){
            third = second
            second = num
        }else  if(num > third && num < second){
            third = num 

        }
    }


  console.log("3rd largest is " , third);

*/

/*
  let array =[10,20,25,35,56,76,76,85,97,32]

  let first = Infinity;
  let second = Infinity;
  let third = Infinity;

    for(let i=0 ; i < array.length ; i++){
        let num = array[i]

        if(num < first){
            third = second
            second = first
            first = num
        }else if(num < second && num > first){
            third = second
            second = num
        }else  if(num < third && num > second){
            third = num 

        }
    }


  console.log("3rd min is " , third);

*/

// 3)	Sort an array without using built in methods

/*
    let array =[10,20,25,35,56,76,76,97,32]


    console.log(array.sort());

    for(let i = 0; i < array.length - 1 ; i++){

        for(let j =0 ; j < array.length -1 -i; i++){

            if(array[j] > array[j+1]){
                let temp = array[j]
                array[j] = array[j+1]
                array[j+1] = temp

            }
        }
        
    }

    console.log(array);

*/


// 4)	write a function to remove the duplicate element from an array

/*
function removeDuplicates(arr){
    let result = []

    for(let i = 0 ; i < arr.length ; i++){
        let exist = false ;

        for(let j=0 ; j < result.length ;j++){

            if(arr[i] === arr[j]){
                exist = true;
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
*/

// 5) write a function to remove duplicate elements in a string "HelloWorld"


function uniqueName(str){
    let result = ""

    for(let i = 0 ; i < str.length ; i++){
        let exist = false;

        for(let j = 0 ; j < result.length; j++){

            if(str[i] === str[j]){
                exist = true;
                break;
            }
        }
          if(!exist){
                result+=str[i]
            }

    }
     return result
}

console.log(uniqueName("helloworld!"));


// function unique(name){
//     let str = ''
//     for(let i=0 ; i < name.length; i++){
//         let exist = false
//         for(let j=0 ; j < str.length ; j++){
//             if(name[i]== name[j]){
//                 exist = true;
//                 break;
//             }
           
//         }
//         if(!exist)
//                 str += name[i]
//             }
            
//     return str
// }


// console.log(unique("helloworld!"));