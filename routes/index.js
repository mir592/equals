const router = require('express').Router();
const IndexController = require('../controllers/IndexController');

router.get('/', IndexController.index);
//router.get('/secret', IndexController.secret);

module.exports = router;
