const express = require("express");
const router = express.Router();
const filesController = require("../controllers/files.controller");
const  validateFileName  = require("../middlewares/validations/files.validation.js").validateFileName;

router.put("/:path",validateFileName(), filesController.uploadFile);
router.get("/:path",validateFileName(), filesController.getFile);

module.exports = router;
