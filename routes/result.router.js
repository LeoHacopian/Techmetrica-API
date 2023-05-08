const express = require('express');
const router = express.Router();
const ResultController = require('../controllers/result.controller.js');

router.post('/saveResult', ResultController.saveResult);

router.delete('/deleteResultById/:id', ResultController.deleteResultById);

router.get('/allResults', ResultController.getAllResults);

router.put('/updateResult/:id', ResultController.updateResultById);

module.exports = router;