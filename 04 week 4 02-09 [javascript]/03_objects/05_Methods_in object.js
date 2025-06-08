// methods in js objects

// 1)call  => Invokes a function with specified this value and arguments provided individually
// 2)apply ==> invokes a function with a specifies this value and arguments provided as an array
// 3)bind   => creates a new function when called has its value set to a specefied value witha given sequence of arguments preceding any provided when the new fucntion is called


let student ={
    get_name : function(){
        return this.firstName + " "+ this.lastName 
    }
}


let scahin ={
    firstName : "Sachin",
    lastName : "Tendukar"
}

let Virat ={
    firstName : "Virat",
    lastName : "Kohli"
}


let output = student.get_name.call(scahin )
console.log("output call :", output);                       // output call : Sachin Tendukar



// let output2 = student.get_name.call(Virat) 
// console.log(output2);                          // Virat Kohli


// with Parameters
let student2 ={
    get_name : function(age){
        return this.firstName + " "+ this.lastName + ` and his age is  ${age}`
    }
}


let scahin2 ={
    firstName : "Sachin",
    lastName : "Tendukar"
}

let Virat2 ={
    firstName : "Virat",
    lastName : "Kohli"
}


let output3 = student2.get_name.call(scahin2 ,50 )
console.log("output3 call with Parameters  :", output3);       // output3 call with Parameters  : Sachin Tendukar and his age is  50


// 2) Apply will use []  // in call we use ,
let student3 ={
    get_name : function(age , city){
        return this.firstName + " "+ this.lastName + `  and his age is  ${age} ans lives in ${city}`
    }
}


let scahin3 ={
    firstName : "Sachin",
    lastName : "Tendukar"
}

let Virat3 ={
    firstName : "Virat",
    lastName : "Kohli"
}


 let output4 = student3.get_name.apply(scahin3, [50 , "Mumbai" ]) 
console.log("output4 apply:", output4);                             // output4 apply: Sachin Tendukar  and his age is  50 ans lives in Mumbai


//3) bind  its a function we use  ,  or  []
// Note only if a fucntion is expectinng  array then use  [] otherwise  ,

let student4 ={
    get_name : function(age , city){
        return this.firstName + " "+ this.lastName + `and his age is  ${age} ans lives in ${city}`
    }
}


let scahin4 ={
    firstName : "Sachin",
    lastName : "Tendukar"
}

let Virat4 ={
    firstName : "Virat",
    lastName : "Kohli"
}



let output5 = student4.get_name.bind(scahin4, 50 , "banglore" ) 
// console.log("output5 bind",output5);   // [Function: bound get_name]
console.log("output5 bind: ",output5());   // output5 bind:  Sachin Tendukarand his age is  50 ans lives in banglore



// setTimeout eXample

let random  ={
    f_name :"Suresh",
    l_name : "Raina",
    full_name : function(age , city ){
       console.log("Cricketer is " + this.f_name + " " + this.l_name + ", age is " + age + ", and his city is " + city);
    }
}


// Without bind → 'this' will be lost (outputs undefined)
setTimeout(random.full_name , 1000) // Cricketer is undefined undefined, age is undefined, and his city is undefined



// ✅ With bind → binds 'this' to the 'random' object and passes args
setTimeout(random.full_name.bind(random, 30 , "delhi") , 1000)  // Cricketer is Suresh Raina, age is 30, and his city is delhi


