const multer = require("multer");
const path = require("path");
const express = require("express");
const productControllers = require("../controllers/product-controllers");
const router = express.Router();

/*** DONDE GUARDA MULTER LSO ARCHIVOS Y CON QUE NOMBRE ***/
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../public/img/products"));
  },
  filename: (req, file, cb) => {
    const newFileName =
      `product_${Date.now()}` + path.extname(file.originalname);
    cb(null, newFileName);
  },
});
const upload = multer({ storage });

/*** GET ALL PRODUCTS ***/
router.get("/", productControllers.index);
// ******** CREATE PRODUCT ********//
router.get("/create", productControllers.create);
router.post(
  "/",
  upload.array("img-product-crete", 8),
  productControllers.store
);

// ******** GET PRODUCT DETAIL********//
router.get("/:productId", productControllers.detail);

// ******** EDIT PRODUCT ********//
router.get("/:productId/edit", productControllers.edit);
router.put(
  "/:productId",
  upload.array("image-edit-product", 8),
  productControllers.update
);

// ******** DELETE PRODUCT ********//
router.delete("/:productId", productControllers.destroy);

module.exports = router;
