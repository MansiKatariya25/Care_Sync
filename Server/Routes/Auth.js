const express = require('express');
const { login, signup, UserData } = require('../Controller/Auth');
const jwtverify = require('../Models/JWT');



const router = express.Router()

router.post('/signup',signup)
router.post('/login',login)
router.get('/verify',jwtverify,(req,res)=>{
    console.log(req.email)
    res.status(200).send("ok")
})
router.get('/userdata',jwtverify,UserData)


module.exports = router