const Result = require('../models/result.model.js');

exports.saveResult = async (req, res) => {
  try {
    const gameresult = new Result({
      user_id: req.body.user_id,
      game_id: req.body.game_id,
      results: req.body.results
    })
    console.log(gameresult)

    try {
      const savedResult = await gameresult.save();
      res.status(200).json({ success: true, data: savedResult });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
}

exports.deleteResultById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Result.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ success: false, error: 'Result not found' });
    }
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}

exports.getAllResults = async (req, res) => {
    try {
      const results = await Result.find();
      res.status(200).json({ success: true, data: results });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
};
  
exports.updateResultById = async (req, res) => {
    try {
      const { id } = req.params;
      const { user_id, game_id, results } = req.body;
      const result = await Result.findByIdAndUpdate(id, { user_id, game_id, results }, { new: true });
      if (!result) {
        return res.status(404).json({ success: false, error: 'Result not found' });
      }
      res.status(200).json({ success: true, data: result });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
};