const express = require("express");
const mainRouter = require("./main-router");
const productRouter = require("./product-router");
const userRouter = require("./user-router");
const carRouter = require("./car-router");
const confirmPageRouter = require("./confirm-page-router");
const apiIndexRouter = require("./api/apiIndexRouter");
const router = express.Router();

router.use("/", mainRouter);

router.use("/products", productRouter);
router.use("/user", userRouter);
// preguntar a pablo donde poner el carrito
router.use("/car", carRouter);
router.use("/confirm", confirmPageRouter);
router.use("/api", apiIndexRouter);

module.exports = router;
