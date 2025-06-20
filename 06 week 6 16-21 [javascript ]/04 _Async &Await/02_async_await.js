/*
let p1 = new Promise((resolve, reject)=>{
    setTimeout(()=> 
        resolve("Hello1"),1500)
})
let p2 = new Promise((resolve, reject)=>{
    setTimeout(()=> 
        resolve("Hello2"),500)
})
let p3 = new Promise((resolve, reject)=>{
    setTimeout(()=> 
        resolve("Hello3"),2500)
})
let p4 = new Promise((resolve, reject)=>{
    setTimeout(()=> 
        // resolve("Hello4"),3500)
    reject("Hello4"),3500)
    
})


async function promiseconsumption() {

    let result1 = await p1
     let result2 = await p2
      let result3 = await p3
       let result4 = await p4
       
       return result1  // as soon await catches the reject in hello4 it goes to cathc block so hello1 wont print
       
    
}

promiseconsumption().then(data => console.log(data))
                    .catch(res => console.log(res))


*/

/*

let p1 = new Promise((resolve, reject)=>{
    setTimeout(()=> 
        resolve("Hello1"),1500)
})
let p2 = new Promise((resolve, reject)=>{
    setTimeout(()=> 
        resolve("Hello2"),500)
})
let p3 = new Promise((resolve, reject)=>{
    setTimeout(()=> 
        resolve("Hello3"),2500)
})
let p4 = new Promise((resolve, reject)=>{
    setTimeout(()=> 
        resolve("Hello4"),3500)
    // reject("Hello4"),3500)
    
})


async function promiseconsumption() {

    let result = await Promise.all([p1,p2,p3,p4])
    return result
   
       
      
       
    
}

promiseconsumption().then(data => console.log(data))                   // [ 'Hello1', 'Hello2', 'Hello3', 'Hello4' ]
                    .catch(res => console.log(res))         // Hello4 => if i reject in P4