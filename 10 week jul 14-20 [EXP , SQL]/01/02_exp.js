
const express = require("express")
let app = express()



app.get('/' , (req,res) => {
    res.send("<h2>Welcome to node js</h2>")
})

// app.get('/:USER', (req, res)=> {
//     res.send("<h3> welcome to node js </h3>")
// })


// app.get('/:user', (req, res)=> {
//     res.send(`<h2> Hi ${req.params.user} welcome to node js</h2>`)
// })



app.get('/:user/:company' , (req, res) => {
    res.send(`<h3> hi ${req.params.user} welcome to ${req.params.company}!!!</h3>`)
})


// app.get('/:useriD' ,(req, res) => {
//     res.send(`<h2> Your userID : ${req.params.useriD} !!!</h2>`)

// })


// limit by regex number by 20r 3 digits

app.get(/^\/(\d{2,3})$/, (req, res) => {
  res.send(`User ID: ${req.params[0]}`);
});

// optional params

// app.get('/:userId?', (req, res) => {
//   res.send(`<h2>Your userID: ${req.params.userId} !!!</h2>`);
// });


app.listen(3000 , () => console.log("connect to server at http://localhost:3000/"))





