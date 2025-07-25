const express = require('express')

const app = express()

// app.get('/', (req, res) => {
//   res.send('Hello World')
// })


app.get('/' , (req, res) => {
    res.send("<h1 style='text-align:center' >hello World!!!</h1>")
})


// app.get('/:user',(req, res)=> {

//     res.send("welcome to node js")
// })


// app.get('/about' , (req, res) => {
//     res.send("about Page!!!")
// })


app.get('/contact' , (req, res) => {
    res.send("contact page!!")
})


app.listen(3000 , () => console.log("connect to server at http://localhost:3000/"))