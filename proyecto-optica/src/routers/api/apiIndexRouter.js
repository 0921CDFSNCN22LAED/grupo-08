const express = require("express");
const router = express.Router();
const productApiRouter = require("./product-api-router");
const homeApiProductRouter = require("./home-api-product-router");
router.use("/", homeApiProductRouter);
router.use("/products", productApiRouter);

module.exports = router;
