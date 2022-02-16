const express = require("express");
const router = express.Router();
const mainControllers = require("../controllers/main-controllers");

/*** GET ALL PRODUCTS ***/
router.get("/:id", mainControllers.car);
router.delete("/");

module.exports = router;
