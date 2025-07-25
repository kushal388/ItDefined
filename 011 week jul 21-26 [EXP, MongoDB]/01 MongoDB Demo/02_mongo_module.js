const express = require("express")
const mongoose = require('mongoose');


// connect
mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('Connected!'));


const Users = mongoose.model('Users', {} , "users")


// Users.find({}).then(users=> console.log(users))    // all

// Users.findOne({}).then(users=> console.log(users))  // only one


// Users.find({firstName:"Rahul"}).then(users=> console.log(users))

Users.find({ email: 'priya@gmail.com'}).then(users=> console.log(users))