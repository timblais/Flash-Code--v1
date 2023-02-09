const express = require('express')
const router = express.Router()
const deckController = require('../controllers/deck') 

router.post('/', deckController.createDeck)
router.get('/:user', deckController.getDecks)

module.exports = router