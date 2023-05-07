const express = require("express")
const router = express.Router()
const qController = require("../controllers/qController")

// Register Endpoint 
router.post("/register", async (req, res) => {
    console.log(req.body)
    const response = await qController.register(req, res)
    res.status(200).send(response)
})

router.get('/allItems', async (req, res, next) => {
    try {
      const items = await qController.getAllItems();
      res.send(items);
    } catch (err) {
      next(err)
    }
  });

router.delete('/deleteResultById/:id', qController.deleteResultById);


router.get("/test", async (req, res) => {
    res.send("Hello, testing12345!")
})

module.exports = router