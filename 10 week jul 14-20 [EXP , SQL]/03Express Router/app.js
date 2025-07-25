const express = require("express")
let app = express()
let PORT = 3000


let customer = require('./customer')

let seller = require('./seller')

let admin = require('./admin')

// add middlewares

app.use('/customer', customer)

app.use('/seller', seller)

app.use('/admin', admin )



app.listen(PORT, ()=> {
    console.log(`connected to sserver http://localhost:${PORT}`)})