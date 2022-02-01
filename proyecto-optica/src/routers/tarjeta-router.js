const express = require("express");
const router = express.Router();
const productController = require("../controllers/product-controllers");

/*** GET ALL PRODUCTS ***/
router.get("/", productController.tarjeta);
router.delete("/");

module.exports = router;
