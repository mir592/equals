const express = require("express");
const router = express.Router();
const questionslistController = require('../controllers/compareController');



router.get('/compare', questionslistController.compareGet);
router.post('/compare', questionslistController.comparePost);
module.exports = router;
