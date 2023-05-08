const express = require("express")
const router = express.Router()
const FormResponseController = require("../controllers/FormResponseController.js")
const { validateToken } = require("../tokens.js")

// Register Endpoint 
router.post("/register", async (req, res) => {
    const tokenBody = validateToken(req.body.user_id)
    const user_id = tokenBody.user_id
    req.body.user_id = user_id
    const response = await FormResponseController.registerFormResponse(req, res)
    res.status(200).send(response)
})

router.get('/getAllResponses', FormResponseController.getAllResponses);

module.exports = router