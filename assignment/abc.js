// let arr =[2,3,45,67,68,98]
// let num= 45;

// for(let i=0; i<=arr.length ;i++){
//     if(num == arr[i]){
//         console.log("Given number present in array");
//     }
    
// }


// let arr=[1,2,3,4,5]

// for(let el of arr){
//     console.log(el);
    
// }

// arr.forEach(element => {
//     console.log(element);
    
    
// });

// let full_Name = "virat"
// let Last_Name = "kohli"

// let student2 ={
//     f_name: "kushal",
//     l_name:"chaturvedi",
//     fun_name : function(){
//         let f_name ="suresh";
//         let l_name = "raina"
//         return this.f_name + ' ' + this.l_name  
//     },

//     fun_outer_name : function(){
//         return full_Name + " " + Last_Name    

//     }
// }



// console.log(student2.fun_name());
// console.log(student2.fun_outer_name());

// console.log(this);

// let obj = {
//   name: "Alice",
//   sayName: function() {
//     console.log(this.name);
//   }
// };

// obj.sayName(); // "Alice" - `this` is `obj`


// let obj = {
//   name: "Alice",
//   sayName: function() {
//     let arrowFunc = () => {
//       console.log(this.name);
//     };
//     arrowFunc();
//   }
// };

// obj.sayName(); // "Alice" — arrowFunc inherits `this` from `sayName`


// let obj = {
//   name: "Alice",
//   sayName: function() {
//     let arrowFunc = () => {
//       console.log(this.name);
//     };
//     // arrowFunc();
//   }
// };

// obj.sayName(); // "Alice" — arrowFunc inherits `this` from `sayName`


// let student = {
//   f_name: "Kushal",
//   l_name: "Chaturvedi",
//   fullName: () => {
//     return this.f_name + " " + this.l_name;
//   },

// };

// console.log(student.fullName()); // "undefined undefined"


let student = {
  f_name: "Kushal",
  l_name: "Chaturvedi",
  printFullName: function() {
    let arrowFunc = () => {
      console.log(this.f_name + " " + this.l_name);
    };
    arrowFunc();
  }
};

student.printFullName(); // "Kushal Chaturvedi"


let obj = {
  name: "Alice",
  changeName: function(){
    this.name = "Bob"; // this is NOT obj, it's global or undefined in strict mode
  }
};

obj.changeName();
console.log(obj.name); // Still "Alice" because `this.name` changed global, not obj
