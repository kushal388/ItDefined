// destrucring object

let mobile = {
    name :"Realme",
    price : 20000 ,
    color : "blue"
}

const { name , price , color } = mobile  // while destrucing we shoul use name as key name 

// const { mob_name , mob_price , color } = mobile     ==> here name and price wont work bcz it is not same as key names in object

// const { name : mobile_name  , price , color } = mobile   // ==> name : mobile_name by using this we can assign new name 
// console.log(mobile_name); // Realme

 console.log(name);             // Realme
console.log(mobile.name);    //Realme




console.log(price);            // 20000
console.log(mobile.price);     //200000

console.log(color);           //blue
console.log(mobile.color);     //blue




