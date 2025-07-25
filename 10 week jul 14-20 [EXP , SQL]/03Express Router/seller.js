let express = require("express")
let router = express.Router()


router.get('/home',(req,res)=> res.send("welcome to seller home page"))

router.get('/about',(req,res)=> res.send("welcome to seller about page"))

router.get('/profile',(req,res)=> res.send("welcome to seller profile page"))

// export all

module.exports = router