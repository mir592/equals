const express = require('express');
const router = express.Router();
const questionslistController = require('../controllers/questionlistController');

router.get('/questionsList', questionslistController.listGet);
router.post('/questionList', questionslistController.readAnswer);

module.exports = router;
