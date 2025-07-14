// function myPromise(){
//     return new Promise((resolve, reject) => {

//         let test = true ;


//         if(!test){
//             resolve("test is resolved")
//         }else{
//             reject("test have got some error")
//         }

//     })
// }
// myPromise().then(data => console.log(data))
//        .catch(error => console.log(error))


// let  myPromise = new Promise((resolve, reject) => {

//     setTimeout(() => {

//         let task = true;

//         if(!task){
//             resolve("task is completed!!!")
//         }else{
//             reject("task is rejceted!!!")
//         }

    
//     }, 3000)
// })

// myPromise.then(Data => console.log(Data))
//             .catch(Error => console.log(Error))
//             .finally(() => console.log("finally task is completed!!!"))


// function onlyPromiseResolve(){
//     return new Promise((resolve) => {
//         resolve("this is always resloved!!!")
//     })
// }

// onlyPromiseResolve().then(data => console.log(data))


// function onlyPromiseResolve(){
//     return Promise.resolve("Thus is always reoslvedd!!!")
// }

// onlyPromiseResolve().then(data => console.log(data))


// here we shoul provide resolve otherwise reject treated as reoslve bcx it is first parmater!!!!
// function onlyPromiseReject(){
//     return new Promise((resolve, reject)=>{
        
//         reject("this promise is rejected!!!")
        

//     })
// }

// onlyPromiseReject().catch(error => console.log(error))



// function onlyPromiseReject(){
//     return Promise.reject("this Promise is Rejectedd!!!!")
// }

// onlyPromiseReject().catch(Error => console.log(Error))



// Promise.resolve(2)
//     .then(data => data * 2)
//     .then(data2 => data2 * 10)
//     .then(data3 => console.log(data3))


// Promise.reject("Something went Wromg!!!!")
//     .catch(error => {
//                        console.log("caught error1 :", error)
//                         throw "New Error from catch1!  handled by next catch"
//                     })
//     .catch(error2 => {
//                         console.log( "caught error2 :", error2)
//                         throw "New Error from Error2 Handled by nect caught!!"
//                     })
//     .catch(error3 => console.log("error 3 is :", error3))


/*
If inside .catch():

It throws, it is handled by the next .catch()

It returns, it is handled by the next .then()
*/



// Promise.reject("Intial error!!!!")
//     .catch(error => {
//                        console.log("caught error1 :", error)
//                         throw "New Error from catch1!  handled by next catch"
//                         // return "Recoverd"
//                     })
//     .then(data => console.log(data))  // skipped incase of throw
//     .catch(error3 => console.log("error 2 is :", error3))


// if it return it will move to .then()
// if catch throw it will move into next catch


// Promise.reject("intial catch!!!!")
//     .catch(error => {
//                        console.log("first caught error1 :", error)
//                         return "Recovered from error"
//                     })
//     .then (data => {
//                      console.log("firsst then :" ,data)
//                      throw "Error after Recovery!!!"
//                     })
//     .catch(error2 => {
//                         console.log( "second caught error2 :", error2)
//                         return "Recovered from error2"
//                     })
//     .then(data =>  console.log("second then :" ,data))







// let p1 = new Promise(res => setTimeout(() => res("First"), 400))
// let p2 = new Promise(res => setTimeout(() => res("Second"), 200))
// let p3 =  new Promise(res => setTimeout(() => res("Third"), 300))


// Promise.race([ p1,p2,p3])
// .then(result => console.log("Winner:", result));

// Promise.any([
//     Promise.reject("Fail 1"),
   
//     Promise.reject("Fail 2")
// ])
// .then(result => console.log("First fulfilled:", result))
// .catch(err => console.log("All failed:", err));

// Promise.all([
//     Promise.reject("Fail 1"),
//     Promise.resolve("First success!"),
//     Promise.reject("Fail 2")
// ])
// .then(result => console.log("First fulfilled:", result))
// .catch(err => console.log("All failed:", err));


// Promise.all([
//     Promise.reject("Fail 1"),
//     Promise.resolve("First success!"),
//     Promise.resolve("Fail 2")
// ])
// .then(result => console.log("First fulfilled:", result))
// .catch(err => console.log("All failed:", err));


// Promise.allSettled([
//     Promise.reject("Fail 1"),
//     Promise.resolve("First success!"),
//     Promise.reject("Fail 2")
// ])
// .then(result => console.log("First fulfilled:", result))


// Promise.race([
//     Promise.reject("Fail 1"),
//     Promise.resolve("First success!"),
//     Promise.reject("Fail 2")
// ])
// .then(result => console.log("First fulfilled:", result))
// .catch(err => console.log("All failed:", err));


// Promise.any([
//     Promise.reject("Fail 1"),
//     Promise.resolve("First success!"),
//     Promise.reject("Fail 2")
// ])
// .then(result => console.log("First fulfilled:", result))
// .catch(err => console.log("All failed:", err));


// Promise.any([
//     Promise.reject("Fail 1"),
//     Promise.reject("First success!"),
//     Promise.resolve("Fail 2")
// ])
// .then(result => console.log("First fulfilled:", result))
// .catch(err => console.log("All failed:", err));



// function fetchData(){
//     return Promise.resolve("data fetched sucessfully!!!")
// }

// fetchData().then(data => console.log(data))

// function fetchData(){
//     return new Promise((resolve, reject)=> {
//         setTimeout( () => { 
//             resolve("data fetched sucessfully")
//         },3000)
//     })
// }

// async function getData() {
//     console.log("Loading.....");
//     const result = await fetchData()
//     console.log(result);
// }

// getData()


// async with try and catch

// function fetchuser(){
//     return new Promise((resolve, reject) => { 
//         setTimeout(() => {
//             // reject("user not found")
//             resolve("user found!!!")
//         }, 2000)
//     })
// }


// async function  getUser() {
//     try{
//         const result = await fetchuser()
//         console.log(result);
        
//     }
//     catch(error){
//         console.log(error);
        
//     }
    
// }

// getUser()



//  mulltiple awaits

// function double(x){
//     return new Promise((resolve, reject)=> {
//         setTimeout(()=> {
//             resolve(x * 2)
//         }, 2500)
//     })
// }

// async function multiply() {

//     const data1 = await double(2)
//     const data2 = await double(3)
//     const data3 = await double(4)

//     console.log(data1 +data2 +data3);
    
    
// }


// multiply()



// fetch api


// fetch('https://fakestoreapi.com/products/1')
//     .then(res=>res.json())
//     .then(json=>console.log(json))


// function myfetch(){
//     return new Promise((resolve, reject)=> {
//         fetch("https://fakestoreapi.com/products/category/jewelery")
//           .then( response => {
//                 if(!response.ok){
//                     reject("failed to fetch data")
//                 }else{
//                    return response.json()
//                 }
//         })
//         .then(data => resolve(data))
//         .catch(abc => reject(abc))
//     })
// }


// myfetch().then( data => console.log(data))
//         .catch(error => console.log(error))


// function myfetch(){
//     return new Promise((resolve, reject) => {
//         fetch("https://fakestoreapi.com/products/category/jewelery")
//             .then( response => {
//                 if(!response.ok){
//                     throw new Error(" Failed to fetch data")
//                 }
//                 return response.json()
//             })
//             .then( data => resolve(data))
//             .catch(error => reject(error.message || error))
//     })
    
// }
// myfetch().then( data => console.log(data))
//         .catch( error => console.log(error))



// function myfetch2(){
//     return  new Promise((resolve, reject) => {
//         fetch("https://fakestoreapi.com/products/1")
//                 .then(response => {
//                      if(!response.ok){
//                         reject("failed to fetch")
//                      }else{
//                         return response.json()
//                      }
//                 })
//                 .then( data => resolve(data))
//                 .catch( error => reject( error))
//     })
// }



// myfetch2().then( data => console.log(data))
//         .catch(error => console.log(error))


// function myfetch2(){
//     return  new Promise((resolve, reject) => {
//         fetch("https://fakestoreapi.com/products/1")
//                 .then(response => {
//                      if(!response.ok){
//                         throw new Error("failed to fetch")
//                      }else{
//                         return response.json()
//                      }
//                 })
//                 .then( data => resolve(data))
//                 .catch( error => reject( error.message || error))
//     })
// }



// myfetch2().then( data => console.log(data))
//         .catch(error => console.log(error))




//by using direct fetch

// fetch("https://fakestoreapi.com/products6767/1")
//     .then( Response => {
//         if(!Response.ok){
//             throw new Error("Failed tooo fetch the dataaaa!!!")
//         }else{
//             return Response.json()
//         }
//     })
//     .then( data => console.log("sucess :", data))
//     .catch( error => console.log("error:" , error.message))

// fetch("https://fakestoreapi.com/products/categor232/jewelery")
// .then(response => {
//     if(!response.ok){
//         throw new Error("failed to fetch jew data")
//     }
//     else { response.json()
//     }
// })
// .then( data => console.log("sucess:", data))
// // .catch( error => console.log("failed:", error.message))
// .catch(error => console.error(error.message))



// async await

// async function myFetch(){
    
//     const repsonse = await fetch("https://fakestoreapi.com/products/categor/jewelery")

//     if(!repsonse.ok){
//         throw new Error("faieled to fetch async await data")
//     }

//     const data = await repsonse.json()
//     return data;

// }

// myFetch().then( data => console.log(data))
//         .catch(error => console.log(error))



// async  function myfetch4(){
//     const response = await fetch('https://fakestoreapi.com/products/category3435/jewelery')

//     if(!response.ok){
//         throw new Error("faield to fetch the data")
//     }   

//     const data = await response.json()
//     return data;

// }


// myfetch4().then(data => console.log(data))
//         .catch(error => console.log(error.message))



// async function myfetch(){

//     try{
//         const Response = await fetch('https://fakestoreapi.com/products/category/jewelery')

//         if(!Response.ok){
//             throw new Error("failed to fetch the data")
//         }
        
//         const data = await Response.json()
//         console.log("sucess:", data);
        
//     }
//     catch(error){
//         console.log("Error message:", error.message)
//     }


// }

// myfetch()



// async function myfetch(){

//     const response = await fetch("https://fakestoreapi.com/products345")

//     if(!response.ok){
//         throw new Error("failed to fetch products detail")
//     }

//     return await response.json()
// }


// myfetch().then(data => console.log("sucess:", data))
//         .catch(error => console.log("Failure:" , error.message))


// async function myfetch(){

//     try{

//         const response = await fetch("https://fakestoreapi.com/products34354")

//         if(!response.ok){
//             throw new Error("failed to fetch the data!!")
//         }

//         const data = await response.json()

//         console.log(data);
        

//     }
//     catch(error){
//         console.log(error.message)
//     }

// }

// myfetch()



async  function myfetch4(){
    const response = await fetch('https://fakestoreapi.com/products/category/jewelery')

    if(!response.ok){
        throw new Error("faield to fetch the data")
    }   

    const data = await response.json()
    return data;

}


myfetch4().then(data => {
                            console.log(data[0])
                            return data[0]
                        
                        })
        .then(data => console.log(data.description))
        .catch(error => console.log(error.message))


