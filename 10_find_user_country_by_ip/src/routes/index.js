const express = require("express");
const detectRoute = require('./detect.route');
const router = express.Router();

router.use('/detect',detectRoute);

module.exports = router ;
