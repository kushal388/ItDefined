/*
promise methods :
        all(iterable) , allsettled(iterable), any(iterable) , race(iterable)
        reject(reson) , resolve(reason) ,catch() , then() , finally()

*/


//  1 ) Promise.all : wait for all promises to be resolved or anyone to be rejected
// 2) Promise.race : give the output of first orderd 
// 3) Promise.allsettled : wait untill all promsie either resolevd or rejected
// 4) Promise.any : return a promsie as soon as one of the promise is fullfiled


/*
let p1 =  Promise.resolve(10)

let p2 = new Promise((res , rej)=> res(35))

let p3 = new Promise((res, rej )=>{ setTimeout(()=> { res("delivered to the adress!!")},1500) })


Promise.all([p1,p2,p3]).then(res => console.log(res)) // [ 10, 35, 60 ]

 
// Promise.all([p3,p2,p1]).then(res => console.log(res)) // [ 60, 35, 10 ] // order was changed p3.p2,p1

*/

/*

let p1 =  Promise.resolve("Food ordered")

let p2 = new Promise((res , rej)=> res("being prepared!!"))

let p3 = new Promise((res, rej )=>{ setTimeout(()=> { res("delivered to the adress!!")},1500) })
})
 
Promise.all([p1,p2,p3]).then(res => console.log(res)) //  [ 'Food ordered', 'being prepared!!', 'delivered to the adress!!' ]


*/

/*
// if one is rejected  that is p2

        let p1 =  Promise.resolve("Food ordered")

        let p2 = new Promise((res , rej)=> rej("Shop is closeD!!"))

        let p3 = new Promise((res, rej )=>{ setTimeout(()=> { res("delivered to the adress!!")},1500) })
        
        Promise.all([p1,p2,p3])
                    .then(res => console.log(res))
                    .catch(msg => console.log(msg))   //Shop is closeD!!


        // here one got rejecte dot came out...

*/

// ******************** RACEE *******************************
// giev whichever is execurted first

/*
let p1 =  Promise.resolve("Food ordered")

let p2 = new Promise((res , rej)=> res("Shop is closeD!!"))

let p3 = new Promise((res, rej )=>{setTimeout(()=> { res("delivered to the adress!!")},0) })


        
        
// Promise.race([p1,p2,p3]).then(res => console.log(res))      //Food ordered
//                       .catch(msg => console.log(msg)) 

Promise.race([p3,p2,p1]).then(res => console.log(res))      //Shop is closeD!! here it shows p2 ncz p3 is asynchrnous andhave settimeout
                      .catch(msg => console.log(msg)) 


*/


// ********* ALLSETTLED *****************
// Promise.allsettled : wait untill all promsie either resolevd or rejected

/*
    let p1 =  Promise.resolve("Food ordered")

    let p2 = new Promise((res , rej)=> rej("Shop is closeD!!"))

    let p3 = new Promise((res, rej )=>{setTimeout(()=> { res("delivered to the adress!!")},0) })


            
    Promise.allSettled([p1,p2,p3]).then(res => console.log(res))      
                        .catch(msg => console.log(msg)) 

*/



// **************** ANY **********************
// Promise.any : return a promsie as soon as one of the promise is fullfiled

/*
 let p1 =  Promise.resolve("Food ordered")

    let p2 = new Promise((res , rej)=> rej("Shop is closeD!!"))

    let p3 = new Promise((res, rej )=>{setTimeout(()=> { res("delivered to the adress!!")},0) })


            
    Promise.any([p1,p2,p3]).then(res => console.log(res))       // food orderd
                        .catch(msg => console.log(msg)) 

*/
// if all rejected!!

/*
 let p1 =  Promise.reject("Food ordered")

    let p2 = new Promise((res , rej)=> rej("Shop is closeD!!"))

    let p3 = new Promise((res, rej )=>{setTimeout(()=> { rej("delivered to the adress!!")},0) })


            
    Promise.any([p1,p2,p3]).then(res => console.log(res))       
                        .catch(msg => console.log(msg)) 


     */                   

 /*
    OUTPUT :  [AggregateError: All promises were rejected] {
                             [errors]: [ 'Food ordered', 'Shop is closeD!!', 'delivered to the adress!!' ]
                 }

  */


  // one is working
 let p1 =  Promise.reject("Food ordered")

    let p2 = new Promise((res , rej)=>res("Shop is closeD!!"))

    let p3 = new Promise((res, rej )=>{setTimeout(()=> { rej("delivered to the adress!!")},0) })


            
    Promise.any([p1,p2,p3]).then(res => console.log(res))       // Shop is closeD!!
                        .catch(msg => console.log(msg)) 