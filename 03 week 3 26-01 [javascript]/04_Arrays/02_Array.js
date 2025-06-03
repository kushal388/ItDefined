let some_array = ["kushal", 25,  5.9, true, undefined , null, {}]

console.log(some_array);


let country = "india"

// console.log(country.split()); // [ 'india' ]
// console.log(country.split(''));  // [ 'i', 'n', 'd', 'i', 'a' ]  // converted string into Arrray
console.log(country.split(' '));   // [ 'india' ] // space is given


// access unisng index

let array = ["a","b","c","d"]

console.log(array);
console.log(array[2]);  // c
console.log(array[6]);  // undefiend


array[2] = "bYe!!"

console.log(array[2]);
console.log(array);

const myArray5 = new Array(5)  
console.log(myArray5); // [ <5 empty items> ]

// const myArray6 = new Array(4).fill("abc")  
// console.log(myArray6);  //[ 'abc', 'abc', 'abc', 'abc' ]


let myarray7 = [ 1,2,4,5,6,7]
myarray7[10]= 20;
console.log(myarray7);   // [ 1, 2, 4, 5, 6, 7, <4 empty items>, 20 ]

// **************************Adding 2 array ********************************************************


// 1) Concat ==> remember concat give you new array it wont modify existing array

let num1= [1,2,4];
let num2= [6,7,8]
 
console.log(num1+ num2);  // 1,2,46,7,8 it wont work in Array as it was working with string  so use [concat]

console.log(num1.concat(num2)); //[ 1, 2, 4, 6, 7, 8 ]  ==> concat alwaya returns a new array
console.log(num1); //[ 1, 2, 4 ]
console.log(num2); // [6, 7, 8]




/*

ADD    : Push and Unshift()
Remove :pop and shift()

push and pop : end
shift and unshift : begining

*/


// ****************** Remove the element [pop] ***************************************
        
    // Remove the elements from the last return ==> removed value [💡]
      // (modify the orginal array) - bcz mutale (non primtive)

let num3= [11,22,44];
let num4= [66,67,68]

/*
console.log(num3);           // [ 11, 22, 44 ]
console.log(num3.pop());     //  44   ==> remove from last element
console.log(num3);           //  [11 ,22 ]
console.log(num3.pop());     // 22 last element is removed
console.log(num3);           // [11]

*/

// ************* SHIFT *************************************************

        // remove from begining of the array and return the removed first element
        // (modify the orginal array) bcz mutale (non primtive)

let num5 = [12,13,15,16,17];
let num6 =[20,21,22,23,25,37]

/*
console.log(num5);             // [ 12, 13, 15, 16, 17 ]
console.log(num5.shift());     // 12     ==> remove the first element 
console.log(num5);             // [ 13, 15, 16, 17 ]
console.log(num5.shift());     // 13
console.log(num5);             //  [ 15, 16, 17 ]
console.log(num5.shift());     //  15

*/

// ******************* PUSH **********************************

        // return the new length of an array
        // Adds one or more elements to the end of an array.(modify the orginal array)
        //  (modify the orginal array) bcz mutale (non primtive)


let num7 = [12,13,15,16,17];

// console.log(num7.push()); // 5 ==> empty push returns the length of an array


// console.log(num7);             // [ 12, 13, 15, 16, 17 ]
// console.log(num7.push(8));     // 6 ==> return the new length of an array
// console.log(num7);             // [ 12, 13, 15, 16, 17, 8]
// console.log(num7.push(32,33)); // 8 ==> return new lentgh of an array 
// console.log(num7);             // [12, 13, 15, 16,17,  8, 32, 33]



// ********************* Unshift ******************************************

// used to add elemets from the begining
// return the new length of an array
//  (modify the orginal array) bcz mutale (non primtive)

let num8 = [21,23,24,25,16];   

// console.log(num8.unshift());  //  5 ==> empty push returns the length of an array

/*
console.log(num8);                // [ 21, 23, 24, 25, 16 ]
console.log(num8.unshift(8));     // 6 ==> return the new length of an array
console.log(num8);                // [ 8, 21, 23, 24, 25, 16 ]
console.log(num8.unshift(32,33));  // 8 ==> return new lentgh of an array 
console.log(num8);                 // [ 32, 33, 21, 23, 24, 25, 16 ]
*/

// ..................... fill ........................


// fill method

const myArray6 = new Array(4).fill("abc")  
console.log(myArray6); 




// ************ Slice ***********************************************************

// Extracts a portion of the array or string and returns a new one
// remember which ever we use with string return a new one bcz string is immutable like(concat)
// dont modify the original array

const arr = [1, 2, 3, 4, 5];
const sliced = arr.slice(1, 4); // from index 1 up to (not including) 4


const num9 =[30,31,32,33,34,35,36]

// console.log(num9);                     // [30,31,32,33,34,35,36]
// console.log(num9.slice(2,5));          // [ 32, 33, 34 ]
// console.log(num9);                     // [30,31,32,33,34,35,36]
// console.log(num9.slice(3));            // [33,34,35,36]

// console.log(num9.slice(5,3));  // when the end index is less than the start index  ==> return an empty array




// ******************** Splice **************************************************************


// Removes (and optionally inserts) items into the array and modifies the original array
//  (modify the orginal array) bcz mutale (non primtive)

const num10 =[11,22,33,44,55,66]
  
// console.log(num10);               // [ 11, 22, 33, 44, 55, 66 ]
// console.log(num10.splice(2,4));    //  [ 33, 44 ]
// console.log(num10);               //  [ 11, 22 ]



const num11 = [1, 2, 3, 4, 5, 6];


console.log(num11.splice(5, 3));   // [6]  => // when the end index is less than the start index  ==> retrun new array with whatever left from starting index

console.log(num11);               // [1, 2, 3, 4, 5] → ✅ mutated

// Starts at index 5 (which is 6)
// Tries to remove 3 elements
// Only one element (6) exists at that point, so it removes just that
// Mutates the original array



// And optionally inserts in splice

const num12 = [99,88,66,77,55,44,33]

// console.log(num12);                            // [99,88,66,77,55,44,33]
// console.log(num12.splice(3,5,"A","b","c"));    // [ 77, 55, 44, 33 ]
// console.log(num12);                             // [ 99, 88, 66, 'A', 'b', 'c' ]


// ********************************** JOIN *************************************************

// used to convert any array to string

let alpha = ["A","B","C","D","E"]

// console.log(alpha);                           // ["A","B","C","D","E"]
// console.log(alpha.join());                    // A,B,C,D,E => converted into string
// console.log(alpha.join(' '));                 // A B C D E
// console.log(alpha.join("****+++++****"));  // A****+++++****B****+++++****C****+++++****D****+++++****E


const myArr =[1,2,3,4,5,6]

const newArr = myArr.join() // joinsn the array and converted into string
const newArr2 = myArr.join(" + ") 

console.log(myArr);  // [ 1, 2, 3, 4, 5, 6 ]
console.log(newArr); // 1,2,3,4,5,6
console.log(newArr2); // 1 + 2 + 3 + 4 + 5 + 6


console.log(typeof myArr);  // object 
console.log(typeof newArr);  // string
console.log(typeof newArr2);  // string


