const mongoose = require("mongoose");

const DeckSchema = new mongoose.Schema({
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },

  createdDate: {
    type: Date,
    default: Date.now,
    require: true,
  },

  title: {
    type: String,
    require: true,
  },

  totalCards: {
    type: Number,
    require: true,
  },

});

module.exports = mongoose.model("Deck", DeckSchema);