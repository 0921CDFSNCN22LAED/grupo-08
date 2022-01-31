const express = require("express");
const router = express.Router();
const mainControllers = require("../controllers/main-controllers");

router.get("/:id", mainControllers.car);
router.delete("/");

module.exports = router;
