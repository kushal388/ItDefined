// console.log("kushal");

// let arr = [1,2,3,4,4,3]
// let res = []

// function check(arr , unique_arr){
//     return 

// }

// let unique_arr = (arr) => {
// let res = []
// for(let i=0; i<arr.length ;i++){
//     let exist = false;
//     for(let j=0; j<arr.length ;j++){
//         if(arr[i] == res[j]){
//             exist = true;
//             break;
//         }
//     }

//     if(!exist){
//         res.push(arr[i])
//     }

// }

// console.log(res);

// }


//Request  --> Middleware  --> middleware2 --> Route handler  --> middleware 3 --> Resposnse

// middle helps in validation , authentication check like this

const express = require ('express')

const app = express()


// middleware 1
app.use((req, res, next)=>{
    console.log("middleware 1");
    next();
})


// middleware 2

/*
    app.use((req, res, next)=>{
        console.log("middleware 2");
        next();
    })
*/

// we can write  this also  or another way 

let middleware2 = (req, res, next) => {
    console.log("middleware2");
    next()
    
}
app.use(middleware2)




// Router 
app.get('/', (req, res ,next) => {

    console.log("main app  executing handler!!!");

    res.send("helolo from express ")
    next()  // to call next middleware
})

// middleware 3
app.use((req, res, next)=>{
    console.log("middleware 3");
    next();
});

app.listen(300, ()=> {
    console.log("server is running at porot http://localhost:300")
   
    
})