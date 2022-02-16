const express = require("express");
const productApiController = require("../../controllers/api/product-api-controller");
const router = express.Router();

router.get("/", productApiController.list);
router.get("/men", productApiController.men);
router.get("/women", productApiController.women);
router.get("/children", productApiController.children);
router.get("/:id", productApiController.detail);

module.exports = router;
