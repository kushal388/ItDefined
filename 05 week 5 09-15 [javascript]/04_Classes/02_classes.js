class Person {
  constructor(name, age ,location) {
    this.name = name;
    this.age = age;
    this.mylocation = location
  }

  get_details(){
    console.log(` hi my name is ${this.name} and my age is ${this.age} and i lives in ${this.mylocation}`);
    
  }

  location_details(location){
    this.mylocation = location
  }


}


let persone_one = new Person("kushal", 25 , "Banglore")


console.log(persone_one.name);             // kushal
console.log(persone_one.age);              // 25
console.log(persone_one.mylocation);       // banglore

console.log("before changing current location");
persone_one.get_details()                                            //  hi my name is kushal and my age is 25 and i lives in Banglore

persone_one.location_details("sira")

console.log("after changing current location");
persone_one.get_details()                                            //  hi my name is kushal and my age is 25 and i lives in sira



console.log(persone_one.mylocation);       // sira
