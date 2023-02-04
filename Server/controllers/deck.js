const Deck = require('../models/Deck');


module.exports = {
    createDeck: async (req, res) => {
        try {
          await Deck.create({
            createdBy: 'preUserPlaceholder',
            createdDate: new Date(),
            title: req.body.deckTitle,
            totalCards: 0,
          });
          console.log("Deck has been created");
          res.json('Deck has been created');
        } catch (err) {
          console.log(err);
        }
      },
}