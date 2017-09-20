const express = require("express");
const router = express.Router();
const AuthController = require('../controllers/addController');

router.get('/add', addController.addGet);
router.post('/add', addController.addPost);

module.exports = router;
