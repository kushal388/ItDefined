
//  ************************ CALL ***************************************
// .call(thisArg, arg1, arg2, ...)   ==> comma separated  // ||  args means obj you are passing



/*

let obj = {
    name : "kushal"
}

function sayHello(){
    return "hello " + this.name
}


// console.log(sayHello()) // hello undefined  ==> it just a function 

// we need to call the Sayhello function inside the obj by usng ==> call
console.log(sayHello.call(obj) );

*/


// with function   parmater 

let obj = {
    name : "kushal"
}

function sayHello(age , profession){
    return "hello " + this.name +  " & age is " + age + " and works as a " + profession
}



//console.log(sayHello.call(obj , 25) ); // hello kushal & age is 25
console.log(sayHello.call(obj, 25 , "Software engineer" )); // hello kushal & age is 25 and works as a Software engineer

