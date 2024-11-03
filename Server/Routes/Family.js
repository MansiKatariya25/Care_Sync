const express = require('express');
const { Add } = require('../Controller/Family');

const router = express.Router()

router.post('/Add',Add)
router.get('/family')

module.exports = router