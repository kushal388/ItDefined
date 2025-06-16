// classes : in es6 class syntax  is introduced that makes it easier to create Objects and deal with inheritance

// remeber diff between objet and class 
// in object { key : "value"}
// in class { key = "value"}

class vehicle {
    type = "car"

}


// create an object
let car  = new vehicle
console.log(car.type);


// constructor 

class about {
    constructor(){
        console.log("My name is Kushal");     //  My name is Kushal ==> when we create an object it will call automatically!!
        
    }
}

let data = new about

// constructor with paramters
class About {
    constructor(name, age) {
        console.log(`My name is ${name} and I am ${age} years old.`);  // My name is Kushal and I am 25 years old.
    }
}

let data2 = new About("Kushal", 25);


// cosntructor to store value
class Animal{
    constructor(name , species){
        this.name = name,
        this.species = species
          
    }

    introduce(){
        console.log(`hi i am a ${this.species} and name ${this.name}`);
        
    }
}

// let Tiger = new Animal ("huli" , "tiger")
// Tiger.introduce()
// console.log(Tiger.species);


class cat extends Animal{
   constructor(name ,species){
        super(name , species)

    }
}

let Biilly  = new cat("moew" , "beku")
Biilly.introduce()