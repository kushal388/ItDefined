const express = require("express")
const mongoose = require('mongoose');
const app = express()

// connect
mongoose.connect('mongodb://127.0.0.1:27017/world_db')
  .then(() => console.log('Connected!'));


const Cities = mongoose.model('Cities', {} , "cities")




// app.get('/get_users' ,(req, res) => {
//      Cities.find({}).limit(5).then(data=> res.json(data))  
// })

/*
app.get('/:state_id',(req,res) => {

    let state = parseInt(req.params.state_id)
     Cities.find({state_id : state}).limit(5).then(data=> res.json(data))  

})
*/

/*
app.get('/:state_id',(req,res) => {

    let state = parseInt(req.params.state_id)
     Cities.find({state_id : state, name:"Lab-Sar"}).then(data=> res.json(data))  

})
*/


// check :india
/*
app.get('/',(req,res) => {

     Cities.find({country_name : "India"}).limit(20).then(data=> res.json(data))  

})
*/

// logical Operator : AND , or , nor
/*
app.get('/',(req,res) => {


     Cities.find({ $and : [{country_name : "India"},{state_name : "Karnataka"}] }).limit(20).then(data=> res.json(data))  

})
*/

// Greaterthan gt ,gte , lesserthan lt ,lte
/*
app.get('/',(req,res) => {

     Cities.find( { longitude: { $gte : "44" } }).limit(20).then(data=> res.json(data))  

})
*/

// Patren matching by regex!!
/*
app.get('/',(req,res) => {

    //  Cities.find( { name : /^Benga/ }).then(data=> res.json(data))  // starts with benga
     Cities.find( { name : /lore$/ }).then(data=> res.json(data))  // ends with lore

})
*/

// othe methods like skip and sort and limit
/*
Cities.find({ name: /lore$/ })
  .sort({ name: 1 }) // 1 = ascending, -1 = descending
  .then(data => res.json(data));

Cities.find({ name: /lore$/ })
  .sort({ name: 1 })
  .skip(10)
  .limit(20)
  .then(data => res.json(data));

*/


app.listen(3000 , () => {
    console.log("Server running at http://localhost:3000");
    
})