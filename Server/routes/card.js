const express = require('express')
const router = express.Router()
const cardController = require('../controllers/card') 

router.post('/new', cardController.createCard)
router.put('/edit', cardController.editCard)
router.put('/editReset', cardController.editCardReset)
router.delete('/delete', cardController.deleteCard)

module.exports = router