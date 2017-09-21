const express = require("express");
const router = express.Router();
const newController = require('../controllers/newController');

router.get('/new', newController.newGet);
router.post('/new', newController.newPost);

module.exports = router;
