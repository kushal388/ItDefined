let express = require("express")
let router = express.Router()


router.get(('/home'),(req,res,next) => { res.send("welcome to  customer Home Page") })

router.get('/about', (req,res) => { res.send("welcome to customer About page")})


router.get(('/profile'), (req,res) => { res.send("welcome to customer Profile page")})


//export to app

module.exports = router