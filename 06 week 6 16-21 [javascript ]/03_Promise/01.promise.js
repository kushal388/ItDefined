/*
        let myPromise = new Promise((resolve , reject) => {

            // resolve("sucessfully executed or fetched the data!!")
            reject("failed to fetch the data!!!")

        })

        myPromise.then(data => console.log("Reolve msg:" ,data))     // Reolve msg: sucessfully executed or fetched the data!!
                .catch(data => console.log("Rejected msg:" ,data))   // Rejected msg:  failed to fetch the data!!!


*/


/*

        let myPromise = new Promise((resolve, reject)=>{
            let sucess = false;

            if(sucess){
                resolve("task completed")
            }
            else{
                reject("task rejected!!")
            }
        })

        myPromise.then((result)=> console.log(result))
                .catch((error)=>console.error(error))


*/


// ************ By setTimeout
/*
 let myPromise = new Promise((resolve, reject)=>{
            
            setTimeout(()=> {
                let sucess = true;

                if(sucess){
                    resolve("task completed")
                }
                else{
                    reject("task rejected!!")
                }
            },1500)
        })

    myPromise.then((result)=> console.log("Resolve MSG: ",result))
                .catch((error)=>console.error("Reject MSG: ",error))


console.log("done!!");

*/

/*
 let myPromise = new Promise((resolve, reject)=>{
            
            setTimeout(()=> {
                let sucess = true;

                if(sucess){
                    resolve("task completed")
                }
                else{
                    reject("task rejected!!")
                }
            },1500)
        })

    myPromise.then((result)=> console.log("Resolve MSG: ",result))
             .then( () => console.log("done!!"))
             .then( () => console.log("done!!"))
             .catch((error)=>console.error("Reject MSG: ",error))
             .finally(()=> console.log("finally promise completed!!"))
             
*/

// swiggy example

let swigy_order = new Promise((resolve, reject)=>{
            
            setTimeout(()=> {
                let order = true;

                if(order){
                    resolve("your  order has been Placed!!")
                }
                else{
                    reject("Shop is closed!!")
                }
            },1500)
        })

    swigy_order.then((result)=> console.log("Resolve MSG: ",result))
             .catch((error)=>console.error("Reject MSG: ",error))
             .finally(()=> console.log("finally Order is completed!! , Enjoy your meal"))





