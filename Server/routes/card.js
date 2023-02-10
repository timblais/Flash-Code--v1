const express = require('express')
const router = express.Router()
const cardController = require('../controllers/card') 

router.post('/', cardController.createCard)

module.exports = router