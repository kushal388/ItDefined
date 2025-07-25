// for loop

// for(intialization , condition , increment)
// uses  ===> when you know how many time to loop

/*
for(let i =0 ;  i < 3; i++){
    console.log(i);
    
}
*/

// while loop 
// when to use ==> when thw number of iteration not know in advance

// let i=0
// while(i<3){
//     console.log(i);
//     i++;
// }

// real time scenario: reverse a number : bcz we dont know how mnay didgits num has
// retry until sucessfull apiu call
// keep asking correctpassword until correct password


// let num = 1234
// let rev =0
// while(num >0){
// let last_digit = num % 10
// rev = rev * 10 + last_digit
// num = Math.floor(num /10)

// }

// console.log(rev);


let arr = [1, 2, 3];
arr.forEach(val =>console.log( val * 2));

// cannot able to store in another variablefor 


let fruits =["apple", "orange", "cherry"]

// fro each with value
fruits.forEach((fruits)=> console.log(fruits))


// for each with index and value 
fruits.forEach((value , index) => {
    console.log(`ìndex is ${index} and value is ${value}`);
    
})



let ns_data2 = [ [1,2,3],[4,5,7],[7,8,[5,6,7],9]]
let resul_array = []


for(let data of ns_data2){
    for(let el of data){
       resul_array.push(el)
        
    }
    
}

console.log(resul_array);