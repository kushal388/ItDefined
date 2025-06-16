// static methods belong to class not to objects


class Person {
  constructor(name, age ,location) {
    this.name = name;
    this.age = age;
    this.mylocation = location
  }

  get_details(){
    console.log(` hi my name is ${this.name} and my age is ${this.age} and i lives in ${this.mylocation}`);
    
  }

 

  // static method 
  static get_pesnal_detail(){
    console.log(" this is static details cannot");
    
  }


}


let persone_one = new Person("kushal", 25 , "Banglore")

persone_one.get_details()

// persone_one.get_pesnal_detail()  // cannot accces by object gives error

Person.get_pesnal_detail()  //  this is static details cannot