// const express = require("express");
// const app = express();

// app.get('/', (req, res) => {
//   res.send("<h2>Home Page</h2>");
// });

// app.get('/user/:userId?', (req, res) => {
//   res.send(`<h2>Your userID: ${req.params.userId || "Not provided"} !!!</h2>`);
// });

// app.listen(3000, () => console.log("Server running at http://localhost:3000"));


const express = require("express");
const app = express();

app.get('/:userId?', (req, res) => {
  let user = req.params.userId
  if(!user){
    user = "guest"
  }
  res.send(`<h2>Your userID: ${user} !!!</h2>`);
});

app.listen(3000, () => console.log("Server running at http://localhost:3000"));