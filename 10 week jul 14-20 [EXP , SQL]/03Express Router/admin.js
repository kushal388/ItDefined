const express = require("express")
const router = express.Router()


router.get('/home', (reqq, res) => res.send("welcome to admin homePage"))

router.get('/about' , (req, res) => res.send("welcome to admin about page"))

router.get('/profile', (req, res) => res.send("welcome to admin profile page"))


module.exports = router