var express = require('express');
var router = express.Router();
const authController = require('../controller/auth');

router.post('/signin', authController.signin);
router.post('/signup', authController.signup);

module.exports = router;
