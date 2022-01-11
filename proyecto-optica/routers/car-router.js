const express = require("express");
const router = express.Router();
const mainControllers = require("../controllers/main-controllers");

/*** GET ALL PRODUCTS ***/
router.get("/", mainControllers.car);
router.delete("/");

module.exports = router;