/*
function myFetch(){
    return new Promise((resolve, reject) => {
        fetch("https://fakestoreapi.com/products/1")
        .then(response => {
            if(!response.ok){
                reject("Failed to fetch the data from the Api")
            }
            else{
                return response.json();
            }

        })
        .then( data => resolve(data))
        .catch(error => reject(error))
    })
}

myFetch().then(data => console.log(data))
        .catch(data => console.log(data) )

*/

/*
function myFetch2(){
    return new Promise((resolve, reject)=>{
        fetch("https://fakestoreapi.com/products/category/jewelery")
        .then( response => {
            if(!response.ok){
                reject("failed to fethc jewlery data")
            }
            else{
                return response.json()
            }
        })
        .then( data => resolve(data))
        .catch(abc => reject(abc))
    })
}

myFetch2().then(data => console.log(data))
        .catch(data => console.log(data))

  */      


// function myFetch(){
//     return new Promise((resolve, reject)=> {
//          fetch("https://fakestoreapi.com/products/category/jewelery")
//          .then(response  => {
//             if(!response.ok){
//                 reject("failed to fetch")
//             }
//          })
//          .then(data => response(data))
//          .catch(error => reject(error))

//     })
// }

// myFetch().then(data => console.log(data))
//          .catch(error => console.log(error))


// function myfetch(){
//     return fetch("https://fakestoreapi.com/products/category/jewelery")
//     .then(response => {
//         if(!response.ok){
//             throw new Error("fetch failed!!!")
//         }
//         else{
//             return response.json()
//         }
//     })
// }

// myfetch().then(data => console.log(data))
//         .catch(error => console.log(error))


async function myFetch(){
    
    let result = await fetch('https://fakestoreapi.com/products/category/jewelery')
}






// manually wrapping fetch() inside new Promise, which isn't needed
// cleaner way using direct fetch() chaining.

/*

function myfetch3(){
    return fetch("https://fakestoreapi.com/products/category/jewelery")
    .then(response => {
        if(!response.ok){ 
           throw new Error("Failed to fetch jewelry data");
        }
        else{
            return response.json()
        }
    })
}

myfetch3().then(data => console.log(data))
        .catch(error => console.log(error))

*/

/*
// Async and await with .then and .cathc to display 
// other wise we habe anothe rmethod have 2 async fucntion one for fetc and another for try cathc block


async  function myfetch4(){
    const response = await fetch('https://fakestoreapi.com/products/category/jewelery')

    if(!response.ok){
        throw new Error("faield to fetch the data")
    }   

    const data = await response.json()
    return data;

}


myfetch4().then(data => console.log(data))
        .catch(error => console.log(error))



    */


// fetch aslo return promsie
// const promise = fetch("https://fakestoreapi.com/products/1");
// console.log(promise); //  Promise { <pending> }



// 2nd way with 2 async function onne for fetch and one for try catch

/*
async function myfetch5(){
    const response = await fetch('https://fakestoreapi.com/products/category/jewelery')
    if(!response.ok){
        throw new Error("failed to fethc ")
    }

    const data = await response.json()
    return data
}

async function main(){
    try{
        const result = await myfetch5()
        console.log( result);
        
    }
    catch(error){
        console.log(error);
        
    }
}

main()

*/


      