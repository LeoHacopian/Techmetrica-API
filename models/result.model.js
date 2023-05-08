const mongoose = require('mongoose');

const ResultSchema = new mongoose.Schema({
    user_id: { type: Number, ref: 'User', required: true }, 
    game_id: { type: Number, ref: 'Game', required: true },
    results: [{
        rt: Number,
        response: {
            type: String,
            enum: ['strike', 'no-strike'],
            required: true
        },
        bystanders: {
            type: Number,
            default: null
        },
        size: {//enum?
            type: String,
            default: null
        },
        trial_index: {
            type: Number,
            required: true
        },
        time_elapsed: {
            type: Number,
            required: true
        },
        relation: {//enum?
            type: String,
            default: null
        },
        region: {//enum?
            type: String,
            default: null
        },
        confidence: {
            type: Number,
            default: null
        }
    }]
});

const ResultModel = mongoose.model('Result', ResultSchema);

module.exports = ResultModel;