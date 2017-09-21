const express = require('express');
const router = express.Router();
const questionslistController = require('../controllers/questionlistController');

router.get('/questionsList', questionslistController.listGet);

module.exports = router;
