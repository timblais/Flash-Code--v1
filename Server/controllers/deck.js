const Deck = require('../models/Deck');


module.exports = {
    createDeck: async (req, res) => {
        try {
          await Deck.create({
            createdBy: req.body.user,
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
      const user = req.params.user
      console.log(req.params.user)
      try {
        const decks = await Deck.find({ createdBy: user});
        res.json({decks: decks})
      } catch (err) {
        console.log(err)
      }
    }
}