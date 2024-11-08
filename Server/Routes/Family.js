const express = require('express');
const { Add, handleFamily } = require('../Controller/Family');
const jwtverify = require('../Models/JWT');

const router = express.Router()

router.post('/Add',jwtverify,Add)
router.get('/getfamdata',jwtverify,handleFamily)
router.get('/family')

module.exports = router