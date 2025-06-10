// Higher -order - functions  ==> take other function as a argument (callback functions) or return a function as a results

//  1. Function returning another function


function welcome(name){
    return function(message){
        return message + " , " + name;

    }

}

const greet = welcome("ksuhal")
console.log(greet("hello"));





 function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplier(2);        // here multiplier  Returns a function → ✅ YES!
console.log(double(5)); // Output: 10


console.log( ")________________________{");

function mul(num){
    return function(x){
        return x * num
    };
}


let res = mul(5)
console.log(res(3));


// **************************************************************************



/*

function outerFunctions(){
    
    console.log("I am outer function");      
    function innerFunction(name){
        console.log(`i am inner function my name is  ${name}`);    
    }

    return innerFunction // retrunung function object  // instead of innerfunction() 

    // if a function returning a  function object the outer function will become Higher order function 
    
}

let out = outerFunctions()  
out("kushal")  

*/

/*
const greet = function(name) {
  console.log( "Hello " ,name)
};
greet("Kushal"); // Output: Hello Kushal

const greet2 = function(name) {
  return "Hello " + name;
};
console.log(greet2("Kushal")); // Output: Hello Kushal

*/

// ******************* callback ********************************

//  1. Function taking another function (callback)

function Print_Something(){
    return "kushal"
    
}


function higherOrderFunction(callback){
    console.log("First output");
    console.log(callback());
    
    
    
}

higherOrderFunction(Print_Something)    // taking another function as a parameter  ==> Higher order Function


function child(x){
    console.log("child function of HOC "+ x + " it is parent ");
    
}
function parent(callback){
    console.log("inside child ");
    let x = "abc"
    callback(x)
}

// parent(child)



// ********** clousure *****************

function createCounter(){
    let count = 0;
    return function(){
        return count++;
    }
}

const counter = createCounter()
console.log(counter());  // 0
console.log(counter());  // 1
console.log(counter());  // 2



function createCounter2(){
    let count = 0;

    function inner(){
        console.log(++count); 
    }

    return inner
}

let res1 = createCounter2()

res1()
res1()
res1()



