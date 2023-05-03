const express = require("express")
const router = express.Router()
const GameResponsesController = require("../controllers/GameResponsesController.js")

// Register Endpoint 
router.post("/register", async (req, res) => {
    console.log(req.body)
    const response = await GameResponsesController.registerQuestions(req, res)
    res.status(200).send(response)
})

module.exports = router