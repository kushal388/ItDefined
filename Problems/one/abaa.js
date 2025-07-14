class person{
    constructor(name){
        this.name = name
    }

    saymyname(){
        console.log(`my name is ${this.name}`);
        
    }
}

const  obj = new person("kushal")
obj.saymyname()