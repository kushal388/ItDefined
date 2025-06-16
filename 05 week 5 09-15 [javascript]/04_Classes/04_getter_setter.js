// class Person {
//   constructor(name, age , pass) {
//     this.name = name;
//     this.age = age;
//     this._pass = pass   // underscore indicates Private property
//   }

//   get_details(){
//     console.log(` hi my name is ${this.name} and my age is ${this.age} and my pass is ${this._pass} `);
    
//   }

//   get password(){
//     return this._pass
//   }

//   set set_password(pass){
//     this._pass = pass
//   }




// }


// let persone_one = new Person("kushal", 25 , "Banglore")
// persone_one.get_details()

// persone_one.set_password ="ksuh123"
// persone_one.get_details()


//************************* */




class Person {
  #pass; // truly private

  constructor(name, age, pass) {
    this.name = name;
    this.age = age;
    this.#pass = pass; // only accessible inside the class
  }

  // Getter to access #pass
  get password() {
    return this.#pass;
  }

  //  Setter to change #pass
  set set_password(newPass) {
    this.#pass = newPass;
  }

  get_details() {
    console.log(`Hi, I'm ${this.name}, age ${this.age}, password: ${this.#pass}`);
  }
}


let p1 = new Person("Kushal", 25, "Banglore");

p1.get_details()                                // Hi, I'm Kushal, age 25, password: Banglore


console.log("Password (via getter):", p1.password); // Password (via getter): Banglore

p1.set_password ="sira"
 
console.log("Password (via getter):", p1.password);  // Password (via getter): sira

