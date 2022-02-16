const express = require("express");
const router = express.Router();
const productApiRouter = require("./product-api-router");
const homeApiProductRouter = require("./home-api-product-router");
const userApiRouter = require("./user-api-router");
router.use("/", homeApiProductRouter);
router.use("/products", productApiRouter);
router.use("/user", userApiRouter);
module.exports = router;
