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



app.listen(3000 , () => console.log("connect to server at http://localhost:3000/"))