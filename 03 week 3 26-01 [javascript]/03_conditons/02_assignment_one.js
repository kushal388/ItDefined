let grade = 79;

if (grade  >= 80 && grade <= 100){
    console.log("Your Grade is Distinction");
}
else if(grade  >= 60 && grade <= 79){
    console.log("Your Grade is First Class")
}
else if(grade  >= 50 && grade <= 59) {
    console.log("Your Grade is Second Class");
}
else{
    console.log("your are failed!");
}
                                    




/*

by switch

let grade = 40;

switch(true){
    case (grade  >= 80 && grade <= 100) :
                                    console.log("Your Grade is Distinction");
                                    break;
     case (grade  >= 60 && grade <= 79) :
                                    console.log("Your Grade is First Class");
                                    break;
     case (grade  >= 50 && grade <= 59) :
                                    console.log("Your Grade is Second Class");
                                    break;
     case (grade  > 35 && grade < 49) :
                                    console.log("Your Grade is Pass");
                                    break;
    default:
        console.log("your are failed!");
        
                                    
}

console.log("out of switch!");


*/



let user = 15;
// let isAllowed

if ( user >= 18 ){
    console.log("you are allowed to Vote!!");
}
else{
    // isAllowed = 18 - user
    console.log(` you are allowed to Vote after ${18 - user} years`);
    
}



let abc ="kushal"
abc[0] = "S";

console.log(abc);

let maxSafe = Number.MAX_SAFE_INTEGER;
console.log(maxSafe);  // 9007199254740991
console.log(typeof(maxSafe));
console.log(typeof 123n);  



let name = "Kush"
name[0] = "R"

console.log(name);
