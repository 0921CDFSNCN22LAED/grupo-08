const multer = require("multer");
const path = require("path");

/*** seteo => donde guarda multer los archivos ***/
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../../../public/img/products"));
  },
  /*** seteo=> Con que nombre guarda multer los archivos ***/
  filename: (req, file, cb) => {
    const newFileName =
      `product_${Date.now()}` + path.extname(file.originalname);
    cb(null, newFileName);
  },
});
const uploadFiles = multer({ storage });
module.exports = uploadFiles;
