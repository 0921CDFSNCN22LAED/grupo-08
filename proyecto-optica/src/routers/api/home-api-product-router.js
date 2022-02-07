const express = require("express");
const router = express.Router();
const mainApiController = require("../../controllers/api/main-api-controller");

router.get("/", mainApiController.listHome);

module.exports = router;
