
//1) reverse a number

/*
    let number = 1234
    let reverse = 0

    while(number>0){
        let last_digit = number % 10 // gives last number
        reverse = reverse * 10 + last_digit  // to assign the value from unit-> ten -> 
        number= Math.floor(number / 10)  // removes last number
    }

    console.log(reverse);
    console.log(typeof reverse);

*/

// 2 ) reverse a number by converting into string
/*
    let num = 1234
    let numstr = num.toString()
    let res =''

    for(let i= numstr.length -1 ;i >=0 ;i--){
        res+=numstr[i]
    }

    console.log(res);        // 4321
    console.log(typeof res);  // string

    let result = Number(res)   // conver tback to Number

    console.log(result);         // 4321
    console.log(typeof result);  // Number

*/

// 3 nested array  of same elements size


/*
let arr =[[1,2,4],[4,5,6],[7,8,9]]
let res = []

for(let i=0 ; i<arr.length ;i++){
    for(let j=0 ; j< arr.length ;j++){
        // console.log(arr[i][j]);  // to print array element
        res.push(arr[i][j])  // to store in an array
        
    }
}

console.log(res);

*/

// 4) nested element of uneven element size
/*
    let arr = [1,2,3,[4,5,6],7,[5,6,7,8,9],8,9]  // 1 level nested
    let flattened = []

    for(let i=0 ; i< arr.length ; i++){
        // console.log(arr[i]);

        if(Array.isArray(arr[i])){
            for(let j=0 ; j< arr[i].length; j++){
                flattened.push(arr[i][j])
            }
        }
        else{
            flattened.push(arr[i])
        }

    }

    console.log(flattened);
*/

//5 for 2 level nested 
// abobe method wont work another condition need to write 
// output from previous mehtod =>  [ 1, 2, 3, 4, 5, 6, 7, 5, 6, [ 1, 2, 3, 5 ], 7, 8, 9, 8, 9 ]

/*
        let arr = [1,2,3,[4,5,6],7,[5,6,[1,2,3,5],7,8,9],8,9]  // 1 level nested
        let flattened = []

        for(let i=0 ; i< arr.length ; i++){
            // console.log(arr[i]);

            if(Array.isArray(arr[i])){
                for(let j=0 ; j< arr[i].length; j++){
                    // flattened.push(arr[i][j])

                    if(Array.isArray(arr[i][j])){
                        for(let k=0 ; k< arr[i][j].length; j++){
                            flattened.push(arr[i][j][k])
                        }
                    }
                    else{
                        flattened.push(arr[i][j])
                    }
                }
            }
            else{
                flattened.push(arr[i])
            }

        }

        console.log(flattened);  // [ 1, 2, 3, 4, 5, 6,7, 5, 6, 1, 8, 9, 8, 9]

*/

// 6) General method , we cant write nested contion for more nested array

/*
    let arr = [1,2,3,[4,5,6],7,[5,6,[1,2,3,5],7,8,9],8,9] 
    let flattened = []


    let stack = [...arr]

    while(stack.length>0){

        let current = stack.shift()  // takes from the front

        if(Array.isArray(current)){
            for(let i=current.length-1 ; i>=0 ; i--){
                stack.unshift(current[i])
            }
        }
        else{
            flattened.push(current)
        }
    }

    console.log(flattened);

// note why revesing :  you remove from the front, and you're also inserting at the front.This means the last item inserted will be processed first.
*/

// 6) Alternate element of an array

/*
let arr = [10,20,30,40,50,60]
let res =[]


for(let i =1 ; i< arr.length ; i+=2){
   res.push(arr[i])
}

console.log(res);
*/

//7) Max of an array

/*
let arr = [10,22,4,6,35,63]
let max =arr[0]

for(let i=1; i<arr.length; i++){
    if(arr[i]> max){
        max = arr[i]
    }
}

console.log(max);
*/

//8) second largest in an array
/*
    let arr= [10,40,35,20]

    let first =-1
    let second = -1

    for(let i=0 ;i<arr.length ;i++){
        if(arr[i]> first){
            second = first
            first = arr[i]
        }
        else if(arr[i]> second && arr[i]!==first){
            second = arr[i]
        }
    }

    console.log(second);
*/

//9) sum of nested array 
/*
let arr = [1, [2, [3, 4], 5], 6];
let stack = [...arr]
let sum=0;

while(stack.length>0){

    let current = stack.shift()

    if(Array.isArray(current)){
        for(let i = current.length-1 ; i>=0 ;i--){
            stack.unshift(current[i])
        }
    }
    else{
        sum+=current
    }
}

console.log(sum);
*/

// 10) count total elements
/*
let arr = [1, [2, [3, 4],[1,6,3,9], 5], 6];
let stack = [...arr]
let count = 0;

while(stack.length>0){

    let current = stack.shift()

    if(Array.isArray(current)){
        for(let i = current.length-1 ; i>=0 ;i--){
            stack.unshift(current[i])
        }
    }
    else{
        count++
    }
}

console.log(count);
*/


// 12) even numbe rin nested array

/*
let arr = [1, [2, [3, 4],[1,6,3,9], 5], 6];
let stack = [...arr]
let even = []

while(stack.length>0){

    let current = stack.shift()

    if(Array.isArray(current)){
        for(let i = current.length-1 ; i>=0 ;i--){
            stack.unshift(current[i])
        }
    }
    else{
        if(current % 2 == 0){
            even.push(current)
        }
    }
}

console.log(even);
*/


// 13)unique array
/*
    let arr = [1,2,4,3,5,4,6]
    let res =[]

    for(let i=0 ; i < arr.length; i++){
        let count =0 ;

        for(let j=0 ; j< arr.length ;j++){
            if(arr[i] == arr[j]){
                count++;
            }
        }

        if(count === 1){
            res.push(arr[i])
        }
    }

    console.log(res);
   
   
 */ 

// 15) Duplicate array
/*
let arr = [1, 2, 3, 4, 5, 4, 5, 3,1 ,6];
let result =[]

for(let i =0 ; i< arr.length ; i++){
    let count = 0

    for(let j =0 ; j< arr.length ; j++){
        if(arr[i] === arr[j]){
            count++;
        }
    }

    if(count>1){
        result.push(arr[i])
    }
}

console.log(result);

*/


// 16) Not more than one duplicate
/*
let arr = [1, 2, 3, 4, 5, 4, 5, 3,1 ,6];
let result =[]

for(let i =0 ; i< arr.length ; i++){
    let count = 0

    for(let j =0 ; j< arr.length ; j++){
        if(arr[i] === arr[j]){
            count++;
        }
    }

    if(count>1){
        let alreadyAdded = false ;

        for(let k =0 ; k< result.length ; k++){
            if(result[k] === arr[i]){
                alreadyAdded = true;
                break;
            }
        }

        if(!alreadyAdded){
            result.push(arr[i])
        }
    }
}

console.log(result);

*/


// Promises

// 1
/*
let myPromise = new Promise((resolve, reject)=>{

    resolve("promise executed sucessfully!")
})

myPromise.then(data => console.log(data))  // promise executed sucessfully!

*/

// 2
/*
let myPromise = new Promise((resolve, reject)=> {
    let test = false;

    if(test){
        resolve("test passes sucessfully")
    }
    else{
        reject("test faield!!!!")
    }

})

myPromise.then(data => console.log(data))
        .catch(error => console.log(error))   // test failed!!!

  */
 
        
// 3) settimeout

/*
let myPromise = new Promise((resolve, reject)=> {

    setTimeout(()=>{
        let test = false;

          if(test){
                    resolve("task completed")
                }
                else{
                    reject("task rejected!!")
                }
    },1000)

})


 myPromise.then((result)=> console.log("Resolve MSG: ",result))
           .then( () => console.log("done!!"))
            .then( () => console.log("done!!"))
            .catch((error)=>console.error("Reject MSG: ",error))
            .finally(()=> console.log("finally promise completed!!"))
*/

// ************ promise.all : wait to all reolve or anyone to be rejected ****************


// a) all resolve
/*
let p1 =  Promise.resolve(10)

let p2 = new Promise((res , rej)=> res(35))

let p3 = new Promise((res, rej )=>{ setTimeout(()=> { res("test 3 resolved")},1500) })


Promise.all([p1,p2,p3]).then(res => console.log(res)) 

*/

// b) one reject

/*
let p1 =  Promise.resolve(10)

let p2 = new Promise((res , rej)=> res(35))

let p3 = new Promise((res, rej )=>{ setTimeout(()=> { rej("test 3 rejected" )},1500) })


Promise.all([p1,p2,p3]).then(res => console.log(res)) 
                        .catch(data => console.log(data))

  */



// Promise .race : whichever is executed first either resolve or rejct

/*
let p1 =  Promise.resolve(10)

let p2 = new Promise((res , rej)=> res(35))

let p3 = new Promise((res, rej )=>{ setTimeout(()=> { rej("test 3 rejected" )},1500) })


Promise.race([p1,p2,p3]).then(data => console.log(data))         // 10
                        .catch(error => console.log(error))

 */   

/*
let p1 =  Promise.resolve(10)

let p2 = new Promise((res , rej)=> rej(35))

let p3 = new Promise((res, rej )=>{ setTimeout(()=> { rej("test 3 rejected" )},1500) })


Promise.race([p1,p2,p3]).then(data => console.log(data))
                        .catch(error => console.log(error))

 */       

                        

// Promise.allsettled : wait untill all promsie either resolevd or rejected

/*
let p1 =  Promise.resolve(10)

let p2 = new Promise((res , rej)=> rej(35))

let p3 = new Promise((res, rej )=>{ setTimeout(()=> { rej("test 3 rejected" )},1500) })


Promise.allSettled([p1,p2,p3]).then(data => console.log(data))
                        .catch(error => console.log(error))

*/

/*
output: [
  { status: 'fulfilled', value: 10 },
  { status: 'rejected', reason: 35 },
  { status: 'rejected', reason: 'test 3 rejected' }
]
  */

// Promise.any : return a promsie as soon as one of the promise is fullfiled

/*
let p1 =  Promise.resolve(10)

let p2 = new Promise((res , rej)=> rej(35))

let p3 = new Promise((res, rej )=>{ setTimeout(()=> { rej("test 3 rejected" )},1500) })


Promise.any([p1,p2,p3]).then(data => console.log(data))           // 10
                        .catch(error => console.log(error))

*/

// what if all reject for Promise.any gives error


/*
let p1 =  Promise.reject(10)

let p2 = new Promise((res , rej)=> rej(35))

let p3 = new Promise((res, rej )=>{ setTimeout(()=> { rej("test 3 rejected" )},1500) })


Promise.any([p1,p2,p3]).then(data => console.log(data))           // 10
                        .catch(error => console.log(error))

*/

 /*
output : [AggregateError: All promises were rejected] {
  [errors]: [ 10, 35, 'test 3 rejected' ]
}

*/

// more on Promises

/*
new Promise(function(resolve, reject){

    setTimeout(function(){
        console.log(" finished after 2 sec ")
        resolve() // to notify .then as completed
        
    },2000)

}).then(function(){
    console.log(" promise fullfilled!!!");
})
*/

/*
new Promise(function(resolve, reject){

    setTimeout(()=>{
        console.log(" failed after 2 sec ")
        reject() // to notify .then as completed
        
    },2000)

})
.then(()=>{
    console.log(" promise fullfilled!!!");
})
.catch( ()=> {console.log("promise rejected!!");
})
*/

/*
new Promise((resolve, reject)=>{

    setTimeout(()=>{
        console.log("promise is fullfiled");
        resolve()
        
    },1500)

})
.then( () => console.log("promsie is sucess"))

*/

/*
let myPromise = new Promise((resolve, reject)=> {
    setTimeout(()=>{
        resolve({username:"kushal", email :"kushalcnh@gmail.com", age : 25})
    },1000)
})

myPromise.then(data => console.log(data))  // { username: 'kushal', email: 'kushalcnh@gmail.com', age: 25 }
*/

/*

let myPromise = new Promise((resolve, reject)=> {
    setTimeout(()=>{
        resolve({username:"kushal", email :"kushalcnh@gmail.com", age : 25})
    },1000)
})

myPromise.then((data) => 
                    {
                        // console.log(data);
                         return data.username
                    })
        .then(data => 
            console.log(data)
        )

*/

 let myPromise = new Promise((resolve, reject)=> {
    setTimeout(()=>{
        let error = true

        if(!error){
            resolve({username:"kushal", email :"kushalcnh@gmail.com", age : 25})
        }
        else{
            reject("something went wrong")
        }
    },1000)
})

myPromise.then((data) => 
                    {
                        // console.log(data);
                         return data.username
                    })
        .then(data => 
            console.log(data)
        )       
        .catch (error => console.log(error) )

        .finally( () => console.log("promise is completd!!"))