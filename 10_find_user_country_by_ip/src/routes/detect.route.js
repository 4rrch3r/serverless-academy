const express = require("express");
const router = express.Router();
const detectController = require("../controllers/detect.controller");
const validateIpV4 = require("../middlewares/validations/ip.validation").validateIpV4;

router.post("/ip", validateIpV4(), detectController.detectCountry);

module.exports = router;
