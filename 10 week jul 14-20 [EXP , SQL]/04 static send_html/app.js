const { log } = require("console")
const express = require("express")
const path = require("path");
const app = express()

console.log(__dirname);



// add file individual 
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "one_.html"));
// });


// to add complete public [[ so  no need to add individual
// Serve all static files from the "public" directory

app.use(express.static("public"));


// to check
//app.use(express.static("dummy"))


app.listen(3000, ()=> {
    console.log("server is running at http://localhost:3000");
    
})