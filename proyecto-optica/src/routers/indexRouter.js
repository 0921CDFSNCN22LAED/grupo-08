const express = require("express");
const mainRouter = require("./main-router");
const productRouter = require("./product-router");
const userRouter = require("./user-router");
const paymentRouter = require("./payment-router");
const carRouter = require("./car-router");
const apiIndexRouter = require("./api/apiIndexRouter");
const prescription = require ("./prescription-router")
const router = express.Router("./prescription");

router.use("/", mainRouter);

router.use("/products", productRouter);
router.use("/user", userRouter);
// preguntar a pablo donde poner el carrito
router.use("/car", carRouter);
router.use("/api", apiIndexRouter);
router.use("/prescription", prescription)

module.exports = router;
