const mongoose = require('mongoose');

const GameResponseSchema = new mongoose.Schema({
  responses: [{
    rt: Number,
    bystanders: {
      type: Number,
      default: null
    },
    size: {
      type: String,
      default: null
    },
    relation: {
      type: String,
      default: null
    },
    region: {
      type: String,
      default: null
    },
    confidence: {
      type: Number,
      default: null
    }
  }]
});

const DataModel = mongoose.model('Game Response', GameResponseSchema);

module.exports = DataModel;
