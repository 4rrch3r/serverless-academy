const express = require("express");
const router = express.Router();
const linksController = require("../controllers/link.controller");
const  validateLinks  = require("../middlewares/validations/link.validation");

router.post("/link",validateLinks.validateLongLink(), linksController.createShortLink)
router.get("/:shortLink",validateLinks.validateShortLink(), linksController.getShortLink)

module.exports = router;
