// setTimeout, setInterval 



// function greet(){
//     console.log("hello!! " );
    
// }


// setTimeout(greet , 1000)


// with paramter
function greet(name){
    console.log("hello  " +  name + "!!!");
    
}

// passing arguments as normaml wont work here 
// setTimeout(greet("kushal"), 1000  ) // this wont work give error [ calls immediately, passes undefined to setTimeout]


// this works 👇

setTimeout(greet , 1000 , "kushal")   
setTimeout(() => greet("kushal"), 1000)         //  Using an anonymous function wrapper:
setTimeout(greet.bind(null, "kushal"), 1000);   // Using bind to pre-fill the argument:



// setInterval(greet , 1000 , "kushal")   // setInterval 
// setInterval(greet.bind(null, "kushal"), 1000);
// setInterval(greet.bind(null, "kushal"), 1000); 