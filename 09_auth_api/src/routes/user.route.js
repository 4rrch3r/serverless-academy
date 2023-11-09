const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const validateAndUpdateTokens = require('../middlewares/tokenValidator')

router.get('/',validateAndUpdateTokens(),userController.getUserInfo)

module.exports = router;
