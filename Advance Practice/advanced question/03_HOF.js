//     How can you create a Higher-Order Function for logging execution time?


// how to use args in fun paramters

/*
// 1)
function sumAll(...args){
    console.log(args);
    return args.reduce((total, num) => total + num , 0)
    
}

console.log(sumAll(20,30)); // 50
console.log(sumAll(20,30,50, 100)); // 200


// 2
function greetAll(...names){
    for(const name of names){
        console.log( "hello ," + " " + name+ " !");
        
    }
}

greetAll("Kushal")  // function(...args)
greetAll("kushal", "JOHN" ,"BECK") 


output : hello , kushal !
hello , JOHN !
hello , BECK !



*/

/*
const start = performance.now();
// ... some code
const end = performance.now();

console.log(`Elapsed: ${end - start} ms`);
*/

/*
function exexcute_time(fn){
    return function(...args){
        const start = performance.now()

        const result = fn(...args)

        const end  = performance.now()

        console.log(` Executed time : ${(end - start).toFixed(3)}ms`);
        return result
        

    }
}

function add(a,b){
    for(let i =0 ; i < 1e4; i++){
        // console.log(i);
        
    }
    return a+b;
}

const timecalucalte = exexcute_time(add)

console.log("Result :", timecalucalte(30,45));

*/

// *************************************************************************************************************
/*
function logExecutionTime(fn) {
  return function(...args) {
    const start = performance.now();  // Start timer
    const result = fn(...args);       // Call original function
    const end = performance.now();    // End timer

    console.log(`⏱ Execution time: ${(end - start).toFixed(2)} ms`);
    // console.log("result is" , result);
    
    return result;
  };
}


function add(a, b) {
  for (let i = 0; i < 1e4; i++) {
    // console.log(i);
    
  }  // simulate delay
  return a + b;
}

const timedAdd = logExecutionTime(add);

console.log("Result:", timedAdd(10, 20));
*/


// ************************************************************************************************************


// with async function
/*
function exexcute_time(fn){
    return async function(...args){
        const start = performance.now()

        const result = await fn(...args)

        const end  = performance.now()

        console.log(` Async  Executed time : ${(end - start).toFixed(3)}ms`);
        return result
        

    }
}


async function fetchUSerData() {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve("Data recived sucessfuly!!");   
        }, 2000)
    })
    
}

const time_to_fetch = exexcute_time(fetchUSerData)

time_to_fetch().then(data => console.log("Response : " ,data))

*/


// with url

/*
function exexcute_time(fn){
    return async function(...args){
        const start = performance.now()

        const result = await fn(...args)

        const end  = performance.now()

        console.log(` Async  Executed time : ${(end - start).toFixed(3)}ms`);
        return result
        

    }
}


async  function myfetch4(){
    const response = await fetch('https://fakestoreapi.com/products/category/jewelery')

    if(!response.ok){
        throw new Error("faield to fetch the data")
    }   

    const data = await response.json()
    return data;

}






const time_to_fetch = exexcute_time(myfetch4)


time_to_fetch().then(data => console.log(data))
          .catch(error => console.log(error))


 */

// retrun single digit output

// function single_digit(n){
//         let sum =0;

//         while (n >0  ||  sum > 9){

//             if(n === 0){
//                 n =sum;
//                 sum = 0;
//             }

//             sum = sum + n%10 
//             n = Math.floor(n/10)
//         }
//         return sum;
// }


// console.log(single_digit(4563));  


// let num1 = 30
// let num2 = 40;

// [num1, num2] = [num2 , num1]

// console.log("num 1 :", num1);
// console.log("num 2 :", num2);


// let str = "hello"
// let rev = ''

// for(let i = 0 ; i < str.length ; i++){
//     if(!rev.includes(str[i])){
//     let count =0;
//     for(let j=1 ; j<str.length ; j++){
//         if(str[i]== str[j]){
//             count++
//         }
//     }
//     console.log(`${str[i]} count is ${count} times`);
//     rev+= str[i]
// }
// }


// let str = "hello!"
// let count = {}
// for (const element of str) {
//     // console.log(element);
//     count[element] = (count[element] || 0) + 1;
    
// }

// console.log(count); 
 

// function greet(greeting, name) {
//   console.log(`${greeting}, ${name}`);
// }

// const args = ["Hello", "Kushal"];
// greet.apply(this, args); // → Hello, Kushal


//  let timeoutId = setTimeout(() => {
//   console.log("This will NOT be printed if cleared.");
// }, 3000); 

// clearTimeout(timeoutId); // Cancels the timeout


function logArgs(...args) {
  console.log("Inside function:", args);
}

const values =  ["Hello", "Kushal"];
logArgs.apply(null, values);
