const GameResponse = require('../models/GameResponse.model'); // Replace the path with the actual path to the DataModel file

  async function registerQuestions(req, res) {
    try {
      const questions = req.body; // Assuming the JSON data is sent in the request body

      // Save the questions to MongoDB
      const savedQuestions = await GameResponse.create(questions);

      res.status(201).json(savedQuestions);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

module.exports = {
  registerQuestions,
}
