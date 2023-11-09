const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const validateSignUp = require('../middlewares/validations/user.validation').validateSignUp;
const validateSignIn = require('../middlewares/validations/user.validation').validateSignIn;

router.post('/sign-up',validateSignUp(),authController.signUp)
router.post('/sign-in',validateSignIn(),authController.signIn)

module.exports = router;
