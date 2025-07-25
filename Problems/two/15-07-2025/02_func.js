// function greet(){
//     console.log("hello , world!!");
    
// }

// greet()


// function greet(name){
//     console.log("hello " + name);
    
// }

// greet( "kush")

// function greet(){
//    return "hell world"
    
// }

// console.log(greet());

// function add(a,b){
//     return a+b

// }

// let sum = add(3,4)
// console.log(sum);

// let sayHi = function(name){
//     return "hi " + name

// }

// console.log(sayHi("deepak"));


// let add = function(a,b){
//     return  a +b
// }

// console.log(add(3,7));


// let some = function(x,y){
//     return x+y
// }



// console.log(some(3,5));


// let multiple = (a,b) => {
//     return a * b
// }
// console.log(multiple(3,5));


// (function(){
//     console.log("ï run immediatley")
// })();

// (function(){
//     console.log("ï run immediatley")
// })();



// (function() {
//     console.log("first function called");
//   return function() {
//     console.log("Second function called");
//   };
// })()();  


// function displayDetails(name , age = 25  , city){
//     console.log(`hi , my name is ${name} and my age is ${age} and   live in ${city}`);
    
// }

// displayDetails("kushalo" , "banglore")


// function get_name(f_name , l_name){
//     let name = f_name + " " + l_name
//     console.log("full_name :", name );
//     console.log(`welcome ${name}`);
//     console.log("namaste " + name );
     
// }


// get_name("ksuhal", "chaturvedi")


// function get_name(f_name , l_name){
//     let name;
//     return  name = f_name + " " + l_name
   
     
// }


// console.log(get_name("kushal", "chaturvedi"))


// arguments in js

// function printArgu(){
    // console.log(arguments);
    // console.log(arguments[4]);
    
    // for(let el of arguments){
    //     console.log(el);
        
    // }

    // for(let index in arguments){
    //     // console.log(index);
    //     console.log(arguments[index]);
        
    // }


    // for(let index in arguments){
    //     console.log(`arguments index is ${index} and value is ${arguments[index]}`);
        
    // }

    // chnaging the index from 1
    // for(let index in arguments){
    //     let custon_index = parseInt(index) + 1  // ParseInt convert value into 
    //     console.log(`Argumetns index is ${custon_index}  and value is : ${arguments[index]}`);
    // }

    
    
// }

// 
// printArgu(10,20,30,40,50,60,70)


// let printAll = (...args) => {
//     console.log(args);
    
// }

// printAll(3,4,5,6,7)



// let  printAll = (...args) => {
//     return args
// }

// console.log(printAll(3,4,5,6,7));






// let print = () => {
//     console.log("kushal");
    
// }

// print()


// let multiple = (a,b) => {
//     // return a * b
//     console.log(a*b);
    
// }
// // console.log(multiple(3,5))
// multiple(3,5)



// afte rretrun nothing runs


// function sayHi(){
//     console.log("before retrun");
//     return "hello!!!"
//     console.log("after retunr");
        
// }

// console.log(sayHi())


// function add(a, b) {
//   return a + b;
// }
// let result = add(5, 3); // result = 8
// console.log(result);



// function add(num1 , num2){
//     return num1 + num2
// }

// // add(2,3) // no output
// console.log(add(2,3));


// let result = add (2,3)

// console.log(result);
// console.log(add(2,3));


// const sayHi = function(name) {
//   return "Hi, " + name;
// };

// let name = sayHi("ksuhalli")
// console.log(name); 



// let name = "kushal"

// for(let i=name.length-1 ; i>=0 ; i--){
//     let ch = name[i]
//     if(i %2 == 0){
//         console.log(ch.toUpperCase());
//     }
//     console.log(ch);    
// }


// let name = "kushal";

// for (let i = name.length - 1; i >= 0; i--) {
//   if (i % 2 === 0) {
//     console.log(name[i].toUpperCase());
//   }else{
//   console.log(name[i]);
//   }
  
// }


for(let i=1 ; i<=10 ;i++){
   if(i<1){
    console.log(i);
   }
   else if(i>2 && i<9){
    console.log("*");
   }
   else{
    console.log(i);
    
   }
   
}


fetch("https://fakestoreapi.com/products/1")
    .then( Response => {
        if(!Response.ok){
            throw new Error("Failed tooo fetch the dataaaa!!!")
        }else{
            return Response.json()
        }
    })
    .then( data => console.log("sucess :", data))
    .catch( error => console.log("error:" , error.message))