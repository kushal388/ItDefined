function Greet(name){
    console.log(`hello ${name}`);
    
}
 Greet("kushal")

//2
 function sum(a,b){
    return a+b;
 }

 let result = sum(3,5)
 console.log(result);
 
// 3
 function calculateArea(len, wid){
    area = len * wid
    return area
    
 }

 console.log(calculateArea(3,4))

//4
 const multiply = function multiplication(a , b){
    return a *b
 }

 let res_mul =multiply(3,4)
 console.log(res_mul);
 
// 5 Create an anonymous function that takes an array of numbers and returns the sum of all the numbers

 function sumofArr(arr){
   let sum =0 ;
    for(let i =0 ; i < arr.length ; i++){
        sum += arr[i]
    }
    console.log(sum);
     
        
     
}


sumofArr([10,20,30,40]);

// 6Write a function multiplyNumbers(a, b = 1) that multiplies two numbers. If the second argument is not provided, use 1 as the default value.

function multiplyNumbers(a,b=5){
    return a*b
}

console.log(multiplyNumbers(2));


// 7)Write a function sum(...numbers) that takes any number of arguments and returns the sum of those arguments.

function sumOfArgumts(){
    let sum=0
        for(let i=0;i<arguments.length;i++){
            sum += arguments[i]
            // console.log(arguments[i]);
            
        }
        return sum

}

console.log(sumOfArgumts(10,20,30,40,50));


// 8)write a function reverseArray(arr) that returns a new array with the elements of arr in reverse order.

let arr = [1,2,4,5,6]
let res_Arr=[];
function reverseArray(arr){
    for(let i= arr.length-1; i>= 0;i--){
        res_Arr.push(arr[i])
    }
    return res_Arr
}

console.log(reverseArray(arr));

// 9)Explain and demonstrate the behavior of hoisting with function declarations vs. function expressions. 
// What happens when you call a function before it’s declared?
 
// function declarations is hosited when we invoke the function before declaration also it gives Output ==> Hositing
console.log(hositingAdd(5,9))  // 14 

function hositingAdd(a,b){
    return a +b
}


// function expressions : are not hoisted when we invoke the function before declaration also it gives Refrence error  ==> not hoisted
console.log(hositingAdd(5,9))  // 14 

console.log(function_exprssion(3,4));

let function_exprssion = function(a,b){
    return a+b
}

// console.log(function_exprssion(3,4));  // when we call this after the function it will give ouptut



// function squ(num){
//     return num**num
// }

// console.log(sqr(3));
