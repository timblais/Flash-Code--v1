const Deck = require('../models/Deck');
const Card = require('../models/Card');

module.exports = {
    createDeck: async (req, res) => {
        try {
          await Deck.create({
            createdBy: req.body.user,
            createdDate: new Date(),
            title: req.body.deckTitle,
            totalCards: 0,
          });
          res.json('Deck has been created');
        } catch (err) {
          console.log(err);
        }
      },

    getUserDecks: async (req, res) => {
      const user = req.params.userId
      try {
        const decks = await Deck.find({ createdBy: user});
        res.json({decks: decks})
      } catch (err) {
        console.log(err)
      }
    },

    getDeckandCards: async (req, res) => {
      const user = req.params.userId
      const deck = req.params.deckId
      try {
        const myDeck = await Deck.find({ createdBy: user, _id: deck});
        const deckCards = await Card.find({createdBy: user, deck: deck});
        res.json({deck: myDeck[0], cards: deckCards})
      } catch (err) {
        console.log(err)
      }
    }
}