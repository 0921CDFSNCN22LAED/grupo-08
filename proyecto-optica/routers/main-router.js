const express = require("express");
const router = express.Router();
const mainControllers = require("../controllers/mainControllers");

router.get("/", mainControllers.home);
router.get("/home", mainControllers.home);
router.get("/how-to-read", mainControllers.howToRead);
router.get("/product-detail", mainControllers.productos);

module.exports = router;
