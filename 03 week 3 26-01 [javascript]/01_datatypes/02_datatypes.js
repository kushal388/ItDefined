/* DataTypes
            1) Primitve Data DataTypes
            2) Non Primitive datatypes



 in Primitive data types 

    1) Number 
    2) String
    3) Boolean
    4) undefined
    5) null            ==> object
    6) Symbol


in non Primitve data types
    1)object          ==> object
    2)Array           ==> object
    3)functions       ==> Function

    */

    // ------------------------------------------------------------------------

console.log(" Primitve Datatypes _______________________________");

// 1)Numbers

let age = 5;
let height =5.4;

console.log(typeof(age));   // number
console.log(typeof(height));  // nuumber

// Note 1: in js there is no float and all will be number 

// ----------------------------------------------------------------------------

// 2) String

let name ="Hello!!!"

console.log(typeof(name)); // string

// ------------------------------------------------------------------------------------

// 3) Boolean

let isMale = true;

console.log(typeof(isMale)); // boolean

//--------------------------------------------------------------------------------------

// 4) undefined == just feined no value assigned

let address ;

console.log(typeof(address));  // undefined

//----------------------------------------------------------------------------------------------

//5) null ==> it gives a s object💡

let weight=null;

console.log(typeof(weight)); // object


// ------------------------------------------------------------------------------

console.log("NON primitve Datatypes _______________________________");

let someArray = [];
let someObj = {};
let someFunc = function(){

}


console.log(typeof(someArray));   // object
console.log(typeof(someObj));    // object
console.log(typeof(someFunc));   // function 


//--------------------------------------------

/*
coersion in js  :
                it is implicit tyupe conversion that happens when js try to perform some operation with diff types...






*/
