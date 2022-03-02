const express = require("express");
const productApiController = require("../../controllers/api/product-api-controller");
const router = express.Router();

router.get("/", productApiController.list);
router.get("/men", productApiController.men);
router.get("/women", productApiController.women);
router.get("/children", productApiController.children);
router.get("/sun", productApiController.sun);
router.get("/read", productApiController.read);
router.get("/recetados", productApiController.recetados);

router.get("/:productId", productApiController.detail);

module.exports = router;
