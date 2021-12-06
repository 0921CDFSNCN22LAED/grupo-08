const express = require("express");
const router = express.Router();
const mainControllers = require("../controllers/mainControllers");

router.get("/", mainControllers.login);
router.post("/", mainControllers.inicio);

module.exports = router;
