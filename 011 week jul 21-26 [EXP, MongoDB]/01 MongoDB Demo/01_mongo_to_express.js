const express = require("express")
const mongoose = require('mongoose');
const app = express()

// connect
mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('Connected!'));


const Users = mongoose.model('Users', {} , "users")

/*
// Users.find({}).then(users=> console.log(users))    // all

// Users.findOne({}).then(users=> console.log(users))  // only one


// Users.find({firstName:"Rahul"}).then(users=> console.log(users))

Users.find({ email: 'priya@gmail.com'}).then(users=> console.log(users))
*/

// use in express just changed log to res.json
app.get('/get_users' ,(req, res) => {

     Users.find().then(users=> res.json(users))
    // Users.find({ email: 'priya@gmail.com'}).then(users=> res.json(users))
})

app.listen(3000 , () => {
    console.log("Server running at http://localhost:3000");
    
})