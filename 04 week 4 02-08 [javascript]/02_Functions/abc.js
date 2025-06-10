// let num  = 0 ;

// if(num > 0 ){
//     console.log("number is positve");   
// }
// else if(num < 0 ){
//     console.log("number is negative");  
// }else {
//     console.log("number is equal to zeero");
    
// }

// let num1 = 5;

// if(num1 %2 == 0){
//     console.log("number is even");
// }
// else {
//     console.log("number is odd");  
// }


// function add(a,b){
//    return a + b
// }

// let result = add(3,4)
// console.log(result);

// for(let i= 1 ; i <=10 ; i++){
//     console.log(i);
    
// }


let arr= [10,20,30,40,50]
let sum = 0
for(let i= arr.length-1 ; i>=0 ; i--){
    sum += arr[i]
    console.log(sum);
}



function sqr(num){
    return num*num
}

console.log(sqr(3));


for (let i= 50 ; i<=100 ;i++){ 
    // console.log(i);
    
}

let arr2 =[10,20,30,40]
let num =30

// console.log(arr2.includes(num));
for (let i = 0 ; i<arr2.length ; i++){
    if(arr2[i] == num){
        console.log(`number is present aat ${i}`);
        
    }
}
