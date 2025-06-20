// Async : to define a async function
//       it returns a promise

// await : is a keyowrd only be used inside a async function

// ___________________________________________________________


let promise = new Promise((resolve, reject)=>{
    setTimeout(()=> 
        resolve("Async and await example"),1500)
})

// promise.then(res => console.log(res))
//        .catch(res => console.log(res))


// try using normal function


/*
function executePromise(){
    let data = promise
    console.log(data);
    
}

executePromise()     // Promise { <pending> }  Async and await example


     executePromise().then(res => console.log(res))
                      .catch(res => console.log(res))

   we are not able to catch the erros using noral functions so will use Async function  
   
   
*/


// handling with Async Function

async function executePromise() {

    let data = await promise
    console.log(data);                  // Async and await example
    return "all execution completed"
}

// executePromise() => just enogh for resolve

//.then used whatever retrun from async function
// executePromise().then(data => console.log(data))

// if we haev reject in promise we must use catch
// executePromise().catch(error => console.log(error))

// usefd together
executePromise().then(data => console.log(data))
                .catch(error => console.log(error))