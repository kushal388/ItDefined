// "use strict";
// function show(){
//     console.log(this);
    
// }
// show()



// function sort(){
//     let n = arr.length

//     for(let i=0 ; i<n-1 ; i++){
//         for(let j=0 ; j<n-i-1;j++){

//             if(arr[j]> arr[j+1]){
//             let temp = arr[j];
//             arr[j] = arr[j] + 1;
//             arr[j+1] = temp
//             }
//         }
//     }

//     return arr;
// }

// let arr =[40,50,10,34,53,56,75,70]

// console.log(arr);

// // let x =4
// console.log(sort(arr));
// console.log(arr);

// console.log(arr[4]);

// let name ="raki"
// const user = {
//     name :"kushal",
//     greet(){
//         console.log(this.name);
//         console.log(name);
        
//     }
// }

// user.greet();

// name ="raki"
// class User {
//   constructor(name) {
//     this.name = name;
//     console.log(name);
    
//   }

//   greet() {
//     console.log(this.name);
//     console.log(name);
    
//   }
// }

// const user1 = new User("Kushal");
// user1.greet(); // 👉 "Kushal"


// const user={
//     name : "kushal",

//     // greet : () => {
//     //     console.log(this.name);
        
//     // }

//     greet(){
//         const inner =() => {
//             console.log(this.name);
            
//         }
//         inner()
//     }
// }

// user.greet();


// class User {
//   constructor(name, age) {
//     console.log("Before assigning:", this); /
//     this.name = name;
//     this.age = age;
//     console.log("After assigning:", this); 
//   }
// }

// const user1 = new User("Kushal", 25);

// name ="Raki"
// class user{
//     constructor(name){
//         console.log("before " , this);
//         this.name = name;
//         console.log("inside a constructor" , this);
//         console.log(name);
        
//     }
    
//     greet(){
//         console.log(this.name);
//         console.log(name);
        
        
//     }
// }


// const user1 = new user("ksuh")

// user1.greet()

// let name = "rakii"
// const user={
//     name : "kushal",
  
    
//     greet : () => {
//         console.log(name);
        
//     }

//     // greet(){
//     //     const inner =() => {
//     //         console.log(this.name);
            
//     //     }
//     //     inner()
//     // }
// }

// user.greet();


// function sayHello(name){
//     console.log("hello " + name);
    
// }

// function greet(callback){
//     let name = "kushal"
//     callback(name)
// }

// greet(sayHello)


// function mul(x){
//     return function(y){
//         return x * y;
//     }

// }

// const op = mul(5)
// console.log(op(5));

// const nums = [1, 2, 3];
// const sum = nums.reduce((acc, num) => acc + num, 3);
// console.log(sum); // 6

// function outer(){
//     let greet = "hello from outer"

//     function inner(){
//         console.log(greet);
        
//     }

//     inner()
// }

// outer()


const person= {
    name : "kushal"
}

function greet(greet){
    console.log( greet + " " + this.name);
    

}

function say(city , country){
    console.log( ` ${this.name} from city ${city} and country ${country}`);
    

}

// greet.call(person , "hello")

say.call(person, "banglore", "india")

// greet.apply(person , ["hey how you been"])

say.apply(person, ["amstredam", "eurpe"])

// const somme = greet.bind(person , "what are you doing???")
// somme()

const xyz = say.bind(person ,"melnboune" , "australia")
xyz()



Promise.any([
    Promise.reject("Fail 1"),
    Promise.reject("First success!"),
    Promise.resolve("Fail 2")
])
.then(result => console.log("First fulfilled:", result))
.catch(err => console.log("All failed:", err));