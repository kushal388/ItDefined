const express = require("express");
const app = express();

app.get('/:userId?', (req, res) => {
  res.send(`<h2>Your userID: ${req.params.userId || "Not provided"} !!!</h2>`);
});

app.listen(3000, () => console.log("Server running at http://localhost:3000"));
