const express = require("express");
const router = express.Router();
const productControllers = require("../controllers/product-controllers");
const uploadFiles = require("../middlewares/middleware-products/middleware-multer");

/*** GET ALL PRODUCTS ***/
router.get("/", productControllers.index);
// ******** CREATE PRODUCT ********//
router.get("/create", productControllers.create);
router.post(
  "/",
  uploadFiles.array("img-product-crete", 8),
  productControllers.store
);

// ******** GET PRODUCT DETAIL********//
router.get("/:productId", productControllers.detail);

// ******** EDIT PRODUCT ********//
router.get("/:productId/edit", productControllers.edit);

router.put(
  "/:productId",
  uploadFiles.array("image-edit-product", 8),
  productControllers.update
);

// ******** DELETE PRODUCT ********//
router.delete("/:productId", productControllers.destroy);

module.exports = router;
