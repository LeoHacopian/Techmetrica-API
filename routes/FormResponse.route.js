const express = require("express")
const router = express.Router()
const FormResponseController = require("../controllers/FormResponseController.js")

// Register Endpoint 
router.post("/register", async (req, res) => {
    console.log(req.body)
    const response = await FormResponseController.registerFormResponse(req, res)
    res.status(200).send(response)
})

router.get('/getAllResponses', FormResponseController.getAllResponses);

module.exports = router