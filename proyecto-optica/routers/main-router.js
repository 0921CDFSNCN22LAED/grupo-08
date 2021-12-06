const express = require("express");
const router = express.Router();
const mainControllers = require("../controllers/main-controllers");
// ********  HOME  ********//
router.get("/", mainControllers.home);
router.get("/home", mainControllers.home);
router.get("/search", mainControllers.search);

// ********  COMO LEER UNA RECETA ********//
router.get("/how-to-read", mainControllers.howToRead);

module.exports = router;
