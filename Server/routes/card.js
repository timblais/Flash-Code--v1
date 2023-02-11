const express = require('express')
const router = express.Router()
const cardController = require('../controllers/card') 

router.post('/new', cardController.createCard)

module.exports = router