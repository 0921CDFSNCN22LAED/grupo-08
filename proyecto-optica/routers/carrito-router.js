const express = require("express");
const router = express.Router();
const mainControllers = require("../controllers/mainControllers");

router.get("/carrito", mainControllers.carrito);

module.exports = router;
