
/*
const promiseOne = new Promise(function(resolve, reject){

    setTimeout(function(){
        console.log("Async task copleted after 2sec");
        resolve()
    },2000)
})

promiseOne.then(function(){
    console.log("Promise consumed!!");
    // promise is executed only when resolved method called in function
    
})

*/



////////////////////////////////////////////////////////

/*
new Promise(function(resolve, reject){

    setTimeout(function(){
        console.log("Async2 finished after 2 sec ")
        resolve() // to notify .then as completed
        
    },2000)

}).then(function(){
    console.log("Aync 2 promise consumed!!!");
    
})

*/


// **********************************************************

/*
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username : "kushal" , email : "kush@gmial.com"})

    },1000)
})

promiseThree.then(function(user){
    console.log(user.username);
     
    
})

*/


///////////////////////////////////////////////////////////////

/*

const promiseFour = new Promise(function(resolve, reject){

    setTimeout(function(){
        let error = false;
        if (!error){
                resolve({username:"kushi", id : 1212423})            
        }else{
            reject("ERROR: something went wrong");
            
        }
    },1000)
})


promiseFour
        .then(function(user){
            console.log(user);
            return user.username
            
        })
        .then(function(username){
            console.log(username);
            
        })
        .catch(function(error){
            console.log(error);
            
        })
        .finally(function() {
            console.log("promises is either resolved or rejected!!")
        }  
        )


  */      

 // aync await 
 // some time we have to wait until the function has to complete // exaample like DB calls and all
 
 /*
 
 const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
        resolve({useranme : "Javascript" , pass : 123})
        }else{
            reject('Error : jS  went wrog')
        }
    })
 })


async function PromiseFiveConsumtion(){
   try{
    const response =  await promiseFive
    console.log(response);
    console.log("Username:", response.useranme);
    console.log("ID:", response.pass);
   }
   catch(error){
    console.log(error);
    
   }
   
}
PromiseFiveConsumtion()

*/

// console.log(" ********************* ++++++++++ ***********************************************");


// async function PromiseSix(){

//     try {
//         const promise = await new Promise(function(resolve, reject){
//             setTimeout(() => {
//                 let error = false;
//                 if(!error){
//                     resolve({username : "promise6" , pass : 1233} )                    
//                 }
//                 else{
//                     reject('error: something went wrong!!!!!')  
//                 }
//             },1000)
//         })
//         console.log(promise);
//         console.log('username :', promise.username);
//         console.log('pass : ', promise.pass);
        
//     } catch (error) {
        
//         console.log(error);
        
//     }
// }

// PromiseSix()


// async function getAllusers() {
//    try {
//     const response =  await fetch('https://jsonplaceholder.typicode.com/users')
//     console.log( await response.json());
//     // const data = await response.json() // to convert also it takes time so we should give await
//     // console.log(data);
    
    
//    } catch (error) {
//     console.log("E: " , error);
    
    
//    }
     
// }


//  getAllusers() 

// fetch('https://jsonplaceholder.typicode.com/users')
// .then(function(res){
//     console.log( await  res.json());
// })
// .catch(function(error){
//     console.log(error);
    
// })


// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve()
//     }, 1000)
// }).then(() => {
//     console.log("Async 2 resolved");

// })


// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = false;
//         if(!error){
//             resolve({username:"kush", password :"121212"})
//         }else{
//             reject('ERROR: Something went wrong')
//         }
//     },1000)
// })


// //promiseFour.then().then().catch() // chianing also posssible

// promiseFour.then(function(user){
//     console.log(user)
//     return user.username
// }).then(user => {  // the value that return from the upper  value that will be new value
//     console.log( user );  
// }).catch(function(err){
//     console.log(err);
// }).finally(function() {
//     console.log("promises is either resolved or rejected!!")
// }  
// )





// let promise = new Promise(function(resolve, reject) {
//     let success = false;
//     if (success) {
//       //resolve("Task completed!");
//       resolve()
//     } else {
//      // reject("Something went wrong.");
//      reject()
//     }
//   });

  
//   promise
//   .then(() => {
//     console.log("task completed"); // "Task completed!"
//   })
//   .catch(() => {
//     console.error("error occured"); // If rejected
//   });


//   let promisetwo = new  Promise((resolve, reject) => {
//     let sucess2 = false;
//     if(sucess2){
//         resolve(" task completed sucessfully!!!")
//     }
//     else{
//         reject(" something went wrong!!")
//     }

//   })

//   promisetwo.then((result)=>{
//     console.log(result);

//   })
//   .catch((error)=>{
// console.log(error);
//   }
// )



// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = false;
//         if(!error){
//             resolve({username:"kush", password :"121212, [1,2,4,5]"})
//         }else{
//             reject('ERROR: Something went wrong')
//         }
//     },1000)
// })


// //promiseFour.then().then().catch() // chianing also posssible

// promiseFour.then(function(user){
//     console.log(user)
//     return user.username
// }).then(function(username){  // the value that return from the upper  value that will be new value
//     console.log(username);  
// }).catch(function(err){
//     console.log(err);
// }).finally(function() {
//     console.log("promises is either resolved or rejected!!")
// }  
// )


// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve("Async 2 resolved")
//     }, 1000)
// }).then(function(ans){
//     console.log(ans);

// })


// const promiseFive = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = false;
//         if(!error){
//             resolve({username:"javascript", password :"121212"})
//         }else{
//             reject('Error: JS went wrong')
//         }
//     },1000)
// })


// async function consumePromiseFive() {
//    try{
//     const  res= await promiseFive
//     console.log(res);
//    }catch(error){
//     console.log(error);
    
//    }
       
// }

// consumePromiseFive()



// const promisesix = new Promise( resolve => {
//     setTimeout(() => {
//         resolve("data fetched")
//     }, 1000)
// })


// async  function consumePromisesix (){
//     let result = await promisesix
//     console.log(result);
    
// }

// consumePromisesix();

// promisesix.then(function(res){
//     console.log(res);
    
// })


