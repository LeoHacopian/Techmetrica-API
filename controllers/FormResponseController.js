const FormResponse = require('../models/FormResponse.model');
const Questionnaire = require('../models/questionnaire.model');

// Register a form response
async function registerFormResponse(req, res) {
  try {
    const { questionnaire, responses } = req.body;
    console.log("questionnaireId")
    console.log(questionnaire)

    // Check if the questionnaire exists
    const questionnaireNew = await Questionnaire.findById(questionnaire);
    if (!questionnaireNew) {
      return res.status(404).json({ error: 'Questionnaire not found' });
    }

    // Create a new form response
    const formResponse = new FormResponse({
      questionnaire: questionnaire,
      responses: responses,
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
