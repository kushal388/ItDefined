// async function fetchdata(){

//     try{
//         const response  = await fetch("https://fakestoreapi.com/products")
//         if(!response.ok){
//             throw new Error("failed to fetch")
//         }
//         const data = await response.json()
//         console.log(data);
//         console.log(typeof data);
        
//     }
//     catch(error){
//         console.log("Error:" , error.message);
        
//     }
// }


// fetchdata()


// function fetchuser(){
//     return new Promise((resolve, reject) => { 
//         setTimeout(() => {
//             reject("user not found")
//             // resolve("user found!!!")
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
    
//     }

// getUser()



// fetch('https://fakestoreapi.com/products/1')
//     .then(res=>res.json())
//     .then(data =>console.log(data))



// async  function myfetch4(){
//     const response = await fetch('https://fakestoreapi.com/products/category/jewelery')

//     if(!response.ok){
//         throw new Error("faield to fetch the data")
//     }   

//     const data = await response.json()
//     return data;

// }


// myfetch4().then(data => {
//                             console.log(data[0])
//                             return data[0]
                        
//                         })
//         .then(data => console.log(data.description))
//         .catch(error => console.log(error.message))


// async function myfetch(){

//     const response = await fetch("https://fakestoreapi.com/products342")

//     if(!response.ok){
//         throw new Error("failed to fetch products detail")
//     }

//     return await response.json()
// }


// myfetch().then(data => console.log("sucess:", data))
//         .catch(error => console.log("Failure:" , error.message))



//   async function fetchData(){

//                 try{
//                     const response = await fetch("https://fakestoreapi.com/products/category/jewelery")

//                     if(!response.ok){
//                         throw new Error("failed to fetch the data")
//                     }
//                     const data = await response.json()
//                     console.log(data);
                    
//                 }
//                 catch(error){
//                     console.log("Error" , error.message);
                    
//                 }
//             }


// fetchData()



// async function fetchdata(){

//     try{
//         const response  = await fetch("https://fakestoreapi.com/products")
//         if(!response.ok){
//             throw new Error("failed to fetch")
//         }
//         const data = await response.json()
//         console.log(data);
//         console.log(typeof data);
        
//     }
//     catch(error){
//         console.log("Error:" , error.message);
        
//     }
// }


// fetchdata()