// function mynewpromise(){
//     return new Promise((resolve, reject) =>{
//         let  sucess = true;

//         if(sucess){
//             resolve("sucessfull")
//         }
//         else{
//             reject("Some error")
//         }

//     })
// }


// mynewpromise().then(data => console.log(data))
//             .catch(error => console.log(error))


// async function myAsync(){
//     try{
//         const data = await mynewpromise()
//         console.log(data);
        
//     }
//     catch(error){
//         console.log(error);
        

//     }
// }


// myAsync()



// / **********************************************



// function fetchUrl(){
//     return new Promise((resolve, reject) => {
//         fetch("https://jsonplaceholder.typicode.com/post666s/1")
//         .then( response => {
//             if(!response.ok){
//                 reject("failed to fetch")
//             }
//             return response.json()
//         })
//         .then(data => resolve(data))
//         .catch(error => reject(error))

//     })
// }

// fetchUrl().then( data => console.log("sucesfully data : " , data))
//         .catch(error => console.log("Error :", error))








// function myPromise(){
//     return new Promise((resolve , reject) => {
//         fetch("https://jsonplaceholder.typicode.com/posts12/1")
//             .then(response => {
//                 if(!response.ok){
//                     reject("faield to fetch the api")
//                 }
//                 return response.json()
//             })
//             .then(data => resolve(data))
//             .catch(error => reject(error))
        
//     })
// }


// myPromise().then( data => console.log("data is :" , data))
//             .catch( error => console.log("error is :" , error))



// function promises2(){
//     return fetch("https://jsonplaceholder.typicode.com/post12s/1")
//     .then(response => {
//         if(!response.ok){
//             throw new Error("failedd too fetttchh")
//         }
//         return response.json()
//     })
// }


// promises2().then( data => console.log("data is " , data))
//             .catch(error => console.log("Error is :", error))


