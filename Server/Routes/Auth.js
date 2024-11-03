const express = require('express');
const { login, signup } = require('../Controller/Auth');
const jwtverify = require('../Models/JWT');


const router = express.Router()

router.post('/signup',signup)
router.post('/login',jwtverify,login)

module.exports = router