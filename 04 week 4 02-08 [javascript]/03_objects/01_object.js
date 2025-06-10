// in js everything is Object
// Everything can be an object have 2 properties that are key value pair


let abc={

}

// console.log(abc);  // {}  empty objects
// console.log(typeof(abc)); // object



let student ={
    f_name: "kushal",
    l_name:"chaturvedi"
}

// console.log(student);  // { f_name: 'kushal', l_name: 'chaturvedi' }
// console.log(typeof(student));  // object

// 1) print bu using . propert
// console.log(student.f_name); //kushal
// console.log(student.l_name);// chaturvedi
// console.log(student.adress); // undeifined  -> if no properties then undefined


// 2) another type
// console.log(student['f_name']); // kushal




// ************************************************************

let full_Name = "Suresh"
let Last_Name = "Raina"


let student2 ={
    f_name: "kushal",
    l_name:"chaturvedi",
    fun_name : function(){
        return this.f_name + ' ' + this.l_name  //  if we want to use the variables which are in object  { } // we need to use this.f_name
    },

    fun_outer_name : function(){
        return full_Name + " " + Last_Name    //here i didnt use this it took refrence from global scope

    }
}

console.log(student2.fun_name());  // kushal chaturvedi 

console.log(student2.fun_outer_name());  // Suresh Raina


// what if we print whole object
console.log(student2); 
/*
        {
            f_name: 'kushal',
            l_name: 'chaturvedi',
            fun_name: [Function: fun_name],
            fun_outer_name: [Function: fun_outer_name]
        }

*/

//*********************************************** */


let student3 ={
    f_name: "kushal",
    l_name:"chaturvedi"
}

// add
student3.age=25
console.log(student3.age);  //23

// update 
student3.f_name = "manish"
console.log(student3.f_name);  // manish

// another method
student3 = Object.assign({},student3 ,{hobby : "cricket"})  // Note : if forgot to use Student3 it creates a new  object with only hobby
console.log(student3.hobby);

console.log(student3); //    { f_name: 'manish', l_name: 'chaturvedi', age: 25, hobby: 'cricket' }


 





