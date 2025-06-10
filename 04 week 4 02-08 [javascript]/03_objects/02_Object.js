let student1 ={
    f_name: "kushal",
    l_name:"chaturvedi"
}

// creating or copy a new object
// 1) assign

let student2= Object.assign({}, student1)

student1.age= 25  // here only student 1 is afffected

console.log("student1", student1); // student1 { f_name: 'kushal', l_name: 'chaturvedi', age: 25 }
 
console.log("Student2", student2); // Student2 { f_name: 'kushal', l_name: 'chaturvedi' }


// 2 ) by =

let student3= student1

student1.adress = "banglore" // it changes in both student1 and student 3 as well

console.log("student1", student1); // student1 { f_name: 'kushal', l_name: 'chaturvedi' adress: 'banglore' }
 
console.log("Student3", student3); // Student3 { f_name: 'kushal', l_name: 'chaturvedi', age: 25, adress: 'banglore' }


//  3) sprerad Operator

let student5 = {...student1}

console.log("student5" ,student5); // student5 { f_name: 'kushal', l_name: 'chaturvedi', age: 25, adress: 'banglore' }


// delete

delete student5.adress

console.log("student5" ,student5);  // student5 { f_name: 'kushal', l_name: 'chaturvedi', age: 25 }


// only object ans keys

console.log(Object.keys(student5));  // [ 'f_name', 'l_name', 'age' ]

console.log(Object.values(student5)); //  [ 'kushal', 'chaturvedi', 25 ]