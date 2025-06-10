// **************** Apply **************************
// .apply(thisArg, [arg1, arg2, ...]) if any argument swe musr specefiy in  [ ] like array  ||  args means obj you are passing
// if no arguments then use  .applu(thisArg)


/*
let obj = {
    name : "kushal"
}

function sayHello(){
    return "hello " + this.name
}


// no arguments
console.log(sayHello.apply(obj) );

*/

let obj = {
    name : "kushal"
}

function sayHello(age , profession){
    return "hello " + this.name +  " & age is " + age + " and works as a " + profession
}



// with arguments muse use []
console.log(sayHello.apply(obj,[25 , "Software engineer"])); // hello kushal & age is 25 and works as a Software engineer