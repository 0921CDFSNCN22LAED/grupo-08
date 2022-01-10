const { saveProducts } = require("../services/products");
const productsServices = require("../services/products");

module.exports = {
  index: (req, res) => {
    res.render("products/products", { products: productsServices.products });
  },
  create: (req, res) => {
    res.render("products/products-create");
  },
  store: (req, res) => {
    const body = req.body;
    const files = req.files;

    const productId = productsServices.createOne(body, files);
    res.redirect(`/products/${productId}`);
  },
  detail: function (req, res) {
    const productId = req.params.productId;

    const product = productsServices.findOne(productId);

    res.render("products/product-detail", { product });
  },
  edit: (req, res) => {
    const productId = req.params.productId;
    const product = productsServices.findOne(productId);
    res.render("products/product-edit", { product });
  },

  update: (req, res) => {
    const productId = req.params.productId;
    const body = req.body;
    const files = req.files;
    productsServices.updateOne(productId, body, files);
    res.redirect(`/products/${productId}`);
  },
  destroy: (req, res) => {
    const productId = req.params.productId;
    productsServices.eliminatedOne(productId);
    res.redirect("/products");
  },
};
