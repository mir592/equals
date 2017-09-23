const express = require('express');
const router = express.Router();
const questionslistController = require('../controllers/questionlistController');

router.get('/questionsList/', questionslistController.listGet);
router.post('/questionsList/:id', questionslistController.readAnswer);

module.exports = router;
