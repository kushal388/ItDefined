// function is a block of code which can be number of statemets ,logic that can be resued by calling the function()

// fucntion name should be camelCase 
// thid called block or scope {        }

// to need to invoke a function  == > name()

function getName(full_name , last_name){
    let name = full_name.toUpperCase() +  " " + last_name.toUpperCase().trim()
    console.log("your full name : ", name);
    console.log(` welcome ${name}`);
    
}

getName("kushal", "chaturvedi")
getName("suresh", "raina")



console.log("-------------------------------------------------------------");

    
// 3 types 
/*
Normal function
Arrow Functions 

        ==> Declaration functions
        ==> Expression functions
        ==> Anonymous FUnctions

*/

function greet(name){
    // console.log("good morning!!!");
    // console.log("hi " + name + " good morning");
    // console.log(`hi ${name } Good evning`);
    
    
}

// greet('kushal') // ==> invoke the function
//greet()  // if paramter is declared if we dont pass then return undefined



console.log("-------------------------------------------------------------");


function displayDetails(name , age = 25  , city){
    console.log(`hi , my name is ${name} and my age is ${age} and   live in ${city}`);
    
}

// displayDetails("Gora", 25, "Mysuru")

//  displayDetails("Gora", "Mysuru")  
 
 /* here default value is overiden by given value  if we want htis work we can give  ==>  displayDetails("Gora", undefined, "Mysuru")
 hi , my name is Gora and my age is Mysuru i  live in undefined 
 inputs need  to be ordered or if we dont pass it will undefined  */

// displayDetails("Gora", undefined, "Mysuru")  // it  will works for above default 


// ****************************************************************************************************************

console.log("--------------------- ARGUMETS -------------------------");

// Arguments it is by default in js, it stores all invoked parametrs

function printsAll(){
    
    // console.log(arguments);
    // console.log(arguments[4]);  // 435

    // for(let elemets of arguments){
    //     console.log(elemets);   // prints all   
    // }

    // for(let index in arguments){
    //     console.log(`Argumetns index is ${index}  and value is : ${arguments[index]}`);
    // }

    // chnaging the index from 1
    // for(let index in arguments){
    //     let custon_index = parseInt(index) + 1  // ParseInt convert value into 
    //     console.log(`Argumetns index is ${custon_index}  and value is : ${arguments[index]}`);
    // }
    
}

printsAll(33,445,342,354,435,34,22,454,643,543,654)



// console.log(typeof parseInt("42")); 


// ***************************** Ananymous Function  Expression**********************************
// here we dont have function name 

const sayHello = function () {
  return "Hello!";
};


// console.log(sayHello); // it wont work we need to invoke in expression function too
// console.log(sayHello());



// ************* Named Fucntion Expression *******************************

const greeting = function sayHello() {
  console.log("Hello!");
};

// greeting();      //  Works
// sayHello();   // Error: sayHello is not defined (it's not in global scope)



console.log( " ==============================================================");

// IIFE (imediatley invoked function expression)

// self invoking function
// it will when the code runs 
// Note dont miss [ ;] semicolon if you have multiple IIFe

(function(){
    console.log("hello world");
    
})();



(function(name){
    console.log("hello world ", name);
    
})('kushal');

console.log(" ------------------------------------------ ");



