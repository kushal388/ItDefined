// 1) Find the Max and Min num  in an Array

/*
    let arr =[10,20,25,35,56,76,97,32]

    let max = arr[0]
    let min = arr[0]

    for(let i=0 ; i < arr.length ; i++){
        if(arr[i] > max){
            max = arr[i]
        }
        else if(arr[i]<min) {
            min = arr[i]
        }
    }


    console.log(max);
    console.log(min);

*/
//  2) 	Find a 2nd maximum and Minimum number in an array 

/*
let array = [10, 20, 25, 35, 56, 76, 76, 85, 97, 32];

let firstMAx = -Infinity;
let secondMax = -Infinity;

let firstMin = Infinity;
let secondMin = Infinity;

for(let i = 0 ; i < array.length ; i++){
    let num = array[i]

    // for second max
    if(num > firstMAx){
        secondMax = firstMAx;
        firstMAx = num;
    }
    else if (num > secondMax && num < firstMAx){
        secondMax = num;

    }

    // for second min
    if(num < firstMin){
        secondMin= firstMin;
        firstMin = num
    }
    else if(num < secondMin && num > firstMin){
        secondMin = num
    }
}

console.log("second max" , secondMax);
console.log("second min" , secondMin);

*/

/* // separate for max
 let array =[10,20,25,35,56,76,76,85,97,32]

    let first = -Infinity;
    let second = -Infinity;


    for(let i=0 ;i < array.length ; i++){
        let num = array[i]

        if(num > first){
            second = first
            first = num;
        }else if(num > second && num < first){
            second=num;
        }
    }

    console.log("second max: " ,second);
*/

/*


// separate for min
 let array =[10,20,25,35,56,76,76,85,97,32]

    let first = Infinity;
    let second = Infinity;


    for(let i=0 ;i < array.length ; i++){
        let num = array[i]

        if(num < first){
            second = first
            first = num;
        }else if(num < second && num > first){
            second=num;
        }
    }

    console.log("second min: " ,second);
*/


// 3)	Sort an array without using built in methods

/*
    let array =[10,35,56,76,20,25,97,32]

    console.log("array sort by inbuilt ", array.sort());
    
    for(let i = 0; i< array.length-1 ; i++){

        for(let j=0 ; j< array.length - i- 1; i++){

            if(array[j]> array[j+1]){
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
    let arr = [10, 20, 10, 35, 20, 50];
    let uniqueArr =[...new Set(arr)]
    console.log(uniqueArr);
*/

/*
function removeDuplicates(arr){
    let result = []

    for(let i =0 ; i < arr.length ; i++){
        let exist = false;

        for(let j=0 ; i< result.length ; j++){
            if( arr[i] == arr[j]){
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

/*
let str = "banana"
let uniqueStr = [...new Set(str)].join("")  // join to conver to string
console.log(uniqueStr);
*/

/*
function UniqueStr(str){
    let result =""

    for(let i = 0; i < str.length ; i++){
        let exist = false;

        for(let j = 0; j < result.length ; j++){
            if(str[i] == str[j]){
                exist = true;
                break;
            }
        }
        if(!exist){
            result+=str[i]        
        }
    }
    return result;
}

console.log(UniqueStr("helloworld!"));
*/


// 6) Write function to convert camelCase to snake_case

/*
function camelToSnake(str){
    return str.replace(/([A-Z])/g , '_$1').toLowerCase()
}

console.log(camelToSnake("camelCaseExample"));

//(A-Z) ==> matche uppercase
// _$1 ==> adds the underscore beofre the letter


*/

/*
function camelToSnake(str){
    let result = " "

    for(let i =0 ; i< str.length ; i++){
        let char = str[i]

        if(char >="A" && char <="Z"){
            result+= "_" + char.toLowerCase()
        }else{
            result += char;
        }
    }
    return result;
}


console.log(camelToSnake("camelCaseExample"));
console.log(camelToSnake("isLoggedInActive"));

*/

//7)	write a function to convert snake_case to camelCase

/*
function snakeToCamel(str){

    return str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase())
    
}

console.log(snakeToCamel("is_logged_in"));
*/

function snakeToCamel(str){
    let result = " ";
    let toUpper = false

    for(let i=0 ; i < str.length ; i++){
        let char = str[i]

        if(char === '_'){
            // result += char.toUpperCase();
            toUpper = true
        }else{
           if(!toUpper){
            result+= char.toUpperCase()
            toUpper = false;
           }
           else{
            result +=char
           }
        }


    }
    return result
}

console.log(snakeToCamel("is_logged_in"));