const FormResponse = require('../models/FormResponse.model');
const Questionnaire = require('../models/questionnaire.model');

// Register a form response
async function registerFormResponse(req, res) {
  try {
    const { questionnaireId, responses } = req.body;

    // Check if the questionnaire exists
    const questionnaire = await Questionnaire.findById(questionnaireId);
    if (!questionnaire) {
      return res.status(404).json({ error: 'Questionnaire not found' });
    }

    // Create a new form response
    const formResponse = new FormResponse({
      questionnaire: questionnaireId,
      responses,
    });

    // Save the form response
    await formResponse.save();

    res.status(200).json({ message: 'Form response registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
}

module.exports = {
  registerFormResponse,
};
