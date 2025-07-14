const express = require("express");
const app = express();

app.get('/:userId?', (req, res) => {
  let user = req.params.userId
  if(!user){
    user = "guest"
  }
  res.send(`<h2>Your userID: ${user} !!!</h2>`);
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
