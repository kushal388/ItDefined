function add1(num1, num2){
    return num1+num2
}

console.log(add1(4,6));


let add2 = (num1 , num2) => num1 + num2

console.log(add2(20,20))


let sqr = (num) => {
    return num**2

}

console.log(sqr(4));
console.log(sqr(5));


let sqr2 = (num) =>  num **3

console.log(sqr2(4));
console.log(sqr2(5));



// in arraow there is no arguments 
// here we use rest operator  ...params


let findAll = (...params) =>{
    
    for(let data of params){
        console.log(data);
        
    }
}

findAll(10,20,30,40,50,60,70)