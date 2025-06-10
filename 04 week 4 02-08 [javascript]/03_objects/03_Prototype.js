// Prototype vs __ proto__
/*
Prototype :
    the Prototype Propery is specefic to function in js , its the object that will be assigned as the prototype of instances created by the the constructor function

__proto__ :
        __proto__ property is a refrence to the protoype of object
        it's part  of the internal mecahnisms htat js uses to implement the prototype chain


*/

const { useCallback } = require("react")

let x= 5

let y ="something"

let z =[ 1,2,4,5]

let student1 ={
    f_name: "kushal",
    l_name:"chaturvedi"
}

// it wont appear in node console attach to HTML file == >in chrome inspect -> consle
        // console.log(x.__proto__);             // Number{................}
        // console.log(y.__proto__);             // Sting{.....................}
        // console.log(z.__proto__);             // Array(0)[.........................]
        // console.log(student1.__proto__);       // Object{................................}
        // console.log(student1);

// we can use this to
     //console.log(Object.getPrototypeOf(student1)); // same as console.log(student1.__proto__);   



let college ={
    college_name: "JSSATE"
}

Object.setPrototypeOf(student1, college)     // setting college is prototype of studnet

console.log(Object.getPrototypeOf(student1));
console.log(student1);


// methods in js objects

// 1)call
// 2)apply
// 3)bind