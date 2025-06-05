//   ***************** nested functions ********************

/*

function outerFunctions(){
    
    console.log("I am outer function");

    function innerFunction(){
        console.log("i am inner function");
        
    }
    
}


outerFunctions()   // I am outer function 
// oinlu outer function prints inner function not invoked yet

*/

// ********************************************************************

/*
function outerFunctions(){
    
    console.log("I am outer function");

    function innerFunction(){
        console.log("i am inner function");
        
    }

    innerFunction() // I am outer function  
    // have to invoke the function in that scope only
    
}


outerFunctions() // I am outer function 
// innerFunction()  // Ref error inner Function is not defined [ we have to invoke in  that scope only where it defined]

*/

// *********************************************************************************************

/*
function outerFunctions(){
    
    console.log("I am outer function");       // I am outer function

    function innerFunction(){
        console.log("i am inner function");
        
    }

    return innerFunction //  [Function: innerFunction] ==>  this is outer function returns
    // innerFunction() 
    
    
}

let out = outerFunctions()

// console.log(out));
out()  // it will  give the inner function

*/


// *********************************************************************************

/*
function outerFunctions(){
    
    console.log("I am outer function");       // I am outer function

    function innerFunction(name){
        console.log(`i am inner function my name is  ${name}`);
        
    }

    return innerFunction 
    
    
    
}

let out = outerFunctions()  //I am outer function

out("kushal")  // i am inner function my name is  kushal
*/

// *************************************************

function outerFunctions(greet){
       console.log(greet);
       

    function innerFunction(name){
        console.log(` my name is  ${name}`);
        
    }

    return innerFunction 
    
    
    
}

let out = outerFunctions('good morning')    // good morning
out("kushal")  //   my name is  kushal

let out2 = outerFunctions('good morning') ("Meghu")  // we can use this aslo