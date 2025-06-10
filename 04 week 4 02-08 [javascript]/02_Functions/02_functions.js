/*
| Function uses... inside     | Call like this        | Why?                       |
| --------------------     | --------------------- | -------------------------- |
| `return`                 | `console.log(func())` | To show the returned value |
| `console.log` inside     | `func()`              | Already prints itself      |



Note :

return ==> output from the function 

and after return coems out of the function [ same as break]
anything after return in function or multiple return wont works 

only  return  => undefined



Parameters ==> varaibles listed as a apar tof function declaration

Arguments  == > varaiables are the actual values  passed to the function  when its invoked

*/


// one return statement

function add(num1 , num2){
    return num1 + num2
}

// add(2,3) // no output


let result = add (2,3)

console.log(result);
console.log(add(2,3));


function something(){
    return "hello world"
}


something() // won't work
// console.log(something()); // works

let res = something ()
console.log(res);


function add2(num1 , num2){
    let output = num1 + num2
    console.log(output);

    return 100 , 200

   // return 300 // this retrun wont work

    
    
}

let sum  = add2(32,43)
console.log(sum);  //75  --> 100

// console.log(console.log("hello"));  // herllo --> undefined


console.log( " ******* Retrun multiple values ******************************************");


function squareAndCube(num){
    
    let sqr = num**2;
    let qrt = num**3;

    // return sqr , qrt   // return only 27 if we are using more than use Array

    return [sqr , qrt]   // [9,27]

}

console.log(squareAndCube(3));

// ----------------------------------------------------------------------------------------

// let x= 10

// function increment(){
//     x++;
// }

// increment()    // nothing
// console.log(x);  // 11 after invoke the function

// console.log(increment());  // undefined
// console.log(x);             // 11

// console.log(increment);  // [Function: increment] ==> without invoke
// console.log(x);           // 10  bcz function is not invoked yet



//  ************************* Scope ****************************

/*
let x = 10
{
    let y =10;
}
console.log(x);  // 10
console.log(y);  // y is of diffrent scope

*/

/*

let x = 10
{
    let y =12;
    console.log(y);   // 12 y is printing bcz it  is in same scope
    
}
console.log(x);  // 10

*/

/*
var x = 10
{
    var y =10;
}
console.log(x);  // 10
console.log(y);  // 10  here we can acess y bcz we used datatype var

*/


/*
let x = 10
{
    let y =12;
    console.log(y);   // 12 y is printing bcz it  is in same scope
    console.log(x);  // 10  ==> x can accessible here to bcz it is global variable
    
}
    */

/*

        Global Scope
        ├── globalVar = "I'm global"
        │
        ├── Function Scope
        │   └── has access to globalVar
        │
        └── Block Scope
            └── has access to globalVar


*/

/*

let x =10;

{
    let x = 20 ;
    let y = 30 ;

    console.log(x ," insied block scope");   // 20  insied block scope
     console.log(y ," insied block scope");  // 30  insied block scope
    
}

console.log(x , "declarred global");   // 10 declarred global

*/

global.x = 10 

{
    console.log(x);         // 10
    console.log(global.x);  // 10   // this global wont understand by chrome console we need to use WINDOW  in node global is fine
    
    
}

console.log(x); // 10
