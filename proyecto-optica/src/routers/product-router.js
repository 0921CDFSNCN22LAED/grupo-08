const express = require("express");
const router = express.Router();
const productControllers = require("../controllers/product-controllers");
const uploadFiles = require("../middlewares/middleware-products/middleware-multer");
const multer = require("multer");
const validationFormCreateProduct = require("../middlewares/middleware-products/validations/validation-form-create-product");
const validationFormUpdateProduct = require("../middlewares/middleware-products/validations/validation-form-update-product");
/*** GET ALL PRODUCTS ***/
router.get("/", productControllers.index);
// ******** CREATE PRODUCT ********//
router.get("/create", productControllers.create);
router.post(
  "/",
  uploadFiles.array("img_product_create", 8),
  validationFormCreateProduct,

  productControllers.store
);

// ******** GET PRODUCT DETAIL********//
router.get("/:productId", productControllers.detail);

// ******** EDIT PRODUCT ********//
router.get("/:productId/edit", productControllers.edit);

router.put(
  "/:productId",
  uploadFiles.array("image_edit_product", 8),
  validationFormUpdateProduct,
  productControllers.update
);

// ******** DELETE PRODUCT ********//
router.delete("/:productId", productControllers.destroy);

module.exports = router;
