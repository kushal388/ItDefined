// without parms

/*
class Animal{
    constructor(){
        console.log("Animal constructor called");
        
    }

}

class Dog extends Animal{
    constructor(){
        super()
        console.log("child class Dog also called");
        
    }
}


let abc =  new Dog

*/

// with argumnets


class Animal{
    constructor(name ){
       this.name = name 
        
    }

    speaks(){
        console.log(`${this.name} make a sound`);
        
    }

}

class Dog extends Animal{
    constructor(name , barks){
        super(name)
        this.barks = barks
        
    }

    speaks(){
        super.speaks()    // call parent method too
        console.log(` ${this.name} make sound  as  ${this.barks}`);
        
    }
}


let abc =  new Dog("julie" ," Bow_Bow")
abc.speaks()                        //julie make sound  as   Bow_Bow

