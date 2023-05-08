const FormResponse = require('../models/FormResponse.model');
const Questionnaire = require('../models/questionnaire.model');

// Register a form response
async function registerFormResponse(req, res) {
  try {
    const { user_id, questionnaire, responses } = req.body;
    
    // Check if the questionnaire exists
    const questionnaireNew = await Questionnaire.findById(questionnaire);
    if (!questionnaireNew) {
      return res.status(404).json({ error: 'Questionnaire not found' });
    }

    // Create a new form response
    const formResponse = new FormResponse({
      user_id: user_id,
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

async function getAllResponses(req, res) {
  try {
    const results = await FormResponse.find();
    res.status(200).json({ success: true, data: results });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = {
  registerFormResponse,
  getAllResponses,
};
