// ********************** BIND ******************************
// The bind() method creates a new function with a permanently bound this value 
// It does not call the function immediately—it returns a new function that you can call later

/*

let obj = {
    name : "kushal"
}

function sayHello(){
    return "hello " + this.name
}


// no arguments
let greet = sayHello.bind(obj)

console.log(greet());  // hello kushal

*/


// with arguments

let obj = {
    name : "kushal"
}

function sayHello(age , profession){
    return "hello " + this.name +  " & age is " + age + " and works as a " + profession
}


let greet = sayHello.bind(obj, 25 , "cricketer")

console.log(greet());  // hello kushal & age is 25 and works as a cricketer



// Common Use Case — Inside setTimeout

let user = {
  name: "Kushal",
  greet: function () {
    console.log("Hi " + this.name);
  }
};

setTimeout(user.greet, 1000); 
// 👉 Output: Hi undefined (because `this` lost context)

setTimeout(user.greet.bind(user), 1000); 
// 👉 Output: Hi Kushal (corrected with bind)



let myname = {
    name_1 : "Rishi"
};

function greeting(age){
    return `${this.name_1} and age is ${age}`
}

console.log(greeting.call(myname , 25));  // Rishi and age is 25
console.log(greeting.bind(myname,26));   // [Function: bound greeting]

