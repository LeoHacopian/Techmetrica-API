const mongoose = require("mongoose")

const FormResponseSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    questionnaire: { type: mongoose.Schema.Types.ObjectId, ref: 'Questionnaire', required: true },
    responses: [{
      questionNumber: { type: Number, required: true },
      answer: { type: mongoose.Schema.Types.Mixed }
    }]
  });

FormResponseSchema.method("toJSON", function() {
    const { __v, _id, ...object} = this.toObject();
    object.id = _id;
    return object;
})

const FormResponse = mongoose.model("Form Reponses", FormResponseSchema)
module.exports = FormResponse