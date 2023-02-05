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

    getDecks: async (req, res) => {
      try {
        const decks = await Deck.find({ createdBy: 'preUserPlaceholder'});
        res.json({decks: decks})
      } catch (err) {
        console.log(err)
      }
    }
}