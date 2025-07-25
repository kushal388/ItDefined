//6) camelcase to sanke case

/*


function camelToSnake(str){
    return  str.replace(/([A-Z])/g, '_$1').toLowerCase();
}


console.log(camelToSnake("camelCaseExample"))

//(A-Z) ==> matche uppercase
// _$1 ==> adds the underscore beofre the letter

*/

// ***********************************************************

/*

function camelToSnake(str){
    let result = " "

    for(let i=0 ; i< str.length ; i++){
        let char = str[i]

        if(char >="A" && char <="Z"){
            result += "_" + char.toLowerCase()
        }else{
            result += char
        }

        
    }
    return result
}


console.log(camelToSnake("camelCaseExample"))


*/

// ***************************************************************************


//  7) *************         sanke to camel case *************************


/* 

function snakeToCamel(Str){
    return Str.replace(/_([a-z])/g, (_, letter)=> letter.toUpperCase())
}

console.log(snakeToCamel("is_logged_in"));

*/

/*
function snakeToCamel(str){

    let result = ""
    let toUpper = false;

    for(let i=0 ; i<str.length ;i++){
        let char = str[i]

        if(char === '_'){
            toUpper = true   // set falg is true to convert nmextchar to uppercse
        }else {

            if(toUpper){
                result += char.toUpperCase();
                toUpper = false;
            }
            else{
                result += char
            }
        }


    }
    return result
}

console.log(snakeToCamel("background_color")) // backgroundColor

console.log(snakeToCamel("is_logged_in"));  // isLoggedIn

*/

// 8)write a function to flatten the nested array


// let arr = [1, 2, 3, [4, 5, 6], 7, [5, 6, [1, 2, 3, 5], 7, 8, 9], 8, 9];
// let flattened = [];

// function flatten(arr) {
//   if (Array.isArray(arr)) {
//     for (let i = 0; i < arr.length; i++) {
//       flatten(arr[i]); //  recursively flatten each element
//     }
//   } else {
//     flattened.push(arr); //  base case: push non-array value
//   }
// }

// flatten(arr);
// console.log(flattened);


// let arr = [1, 2, 3, [4, 5, 6], 7, [5, 6, [1, 2, 3, 5], 7, 8, 9], 8, 9];
// let flatten = []

// function flattenarr(arr) {
//     for(let i= 0 ; i< arr.length ; i++){
//         if(Array.isArray(arr[i])){
//             flattenarr(arr[i])
//         }
//         else{
//             flatten.push(arr[i])
//         }
//     }
// }


// flattenarr(arr)
// console.log(flatten);


// 09 )Write a function to find the 2nd largest number in a nested array
/*
let arr1 = [1, 2, 3, [4, 5, 6], 7, [5, 6, [1, 2, 3, 5], 7, 8, 9], 8, 9];
let flat_array = []

function flatenedArray(arr){
    for(let i=0 ; i< arr.length ;i++){
        if(Array.isArray(arr[i])){
            flatenedArray(arr[i])
        }
        else{
            flat_array.push(arr[i])
        }
    }
}

flatenedArray(arr1)

// console.log(flat_array);

function secon_largest(arr){
    let first = -Infinity;
    let second = -Infinity;

    for(let i =0 ;i< arr.length ; i++){
       let num = arr[i]

       if(num > first){
            second = first
            first = num;
       }
       else if(num > second && num < first){
            second = num
       }
    }
    return second
}

console.log(secon_largest(flat_array));



*/


// 11) program for adding zeros after 3 values in array 

/*
let arr = [1,2,3,4,5,6,6,7,8]
let result =[]

for(let i=0 ; i<arr.length ; i++){
    result.push(arr[i])


    if((i+1) % 3 === 0){
        result.push(0)
    }

  
}

console.log(result);

*/

// 12 ) Reverse a string a without using built in method 
/*
let str ="kushal"
let res_str ="";


for(let i =str.length-1 ; i>=0 ; i--){
    res_str += str[i]
    
}

console.log(res_str);


*/



// 13) Write a function to return a fibonacci series

// function fibonacci(n){
//     let a=0 ,b=1 ;

//     for(let i=0 ; i<n ; i++){
//         console.log(a);
//         let temp = a+b;
//         a =b ;
//         b= temp;
        
//     }
// }

// fibonacci(10)


// 17) capitalize 

/*
function capitalize(arr){
    let result = []
    
    for(let i=0 ; i< arr.length ; i++){
            let word = arr[i]
            let capitalized = word[0].toUpperCase() + word.slice(1)  // A + ef
            result.push(capitalized)
            
        }
        return result;
}

let arr = ["abc" , "dfe" ,"xyz"]

console.log(capitalize(arr));

*/

// let arr = ["abc" , "dfe" ,"xyz"]
// for(let i=0 ; i< arr.length ; i++){
//     let word = arr[i]
//     console.log(word[0].toUpperCase() + word.slice(1));
    
// }



// 18)	write a function to calculate the sum of total marks in an array of objects 
// a.	ex : [{sub:'Maths', marks:60},{sub:'Science', marks:70},{sub:'English', marks:90}]

/*

let arr = [{sub:'Maths', marks:60},{sub:'Science', marks:70},{sub:'English', marks:90}]

 let sum = 0
for(let el of arr){
    sum += el.marks
    
   
}
console.log(sum);

*/

// 22) Write a function to remove the duplicate from 2 arrays, let a = [1,2,3,4,5] let b = [5,3,7,8,9]











/*
// using char 

function camelToSnake(str){
    let result = '';

    for(let i=0 ; i<str.length ; i++){
        let charcode = str.charCodeAt(i)   // convert char to ascii

        // console.log(charcode);

        // to check A- Z
        if(charcode >=65 && charcode <=90){
            result += '_' // to add underscore 

        
            //to lowercase
            let lowercase = String.fromCharCode(charcode +32)    // to convert ascii to charcode
            result += lowercase

        }else{
            result +=str[i]
        }

        
    }
    return result
}


console.log(camelToSnake("camelCaseExample"))

console.log(camelToSnake("isLoggedIn"))

*/