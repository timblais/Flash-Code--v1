const Card = require('../models/Card');
const Deck = require('../models/Deck')

module.exports = {
    createCard: async (req, res) => {
        try {
            const deck = await Deck.findOneAndUpdate({_id: req.body.deckId}, {$inc: { totalCards: 1}}, {new: true})
          
            await Card.create({
                createdBy: req.body.user,
                createdDate: new Date(),
                title: `Card ${deck.totalCards}`,
                dueDate: new Date(),
                deck: req.body.deckId,
                question: req.body.question,
                answer: req.body.answer,
                repetitionNumber: 0,
                easinessFactor: 2.5,
                repetitionInterval: 1,
                totalViews: 0,
          });
          res.json('Card created');
        } catch (err) {
          console.log(err);
        }
    },

    editCard: async (req, res) => {
      try {
          
      } catch (err) {
        console.log(err);
      }
  },

}