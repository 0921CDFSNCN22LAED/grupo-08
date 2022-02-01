const db = require("../database/models");
const { saveProducts } = require("../services/products");
const productsServices = require("../services/products");

module.exports = {
  index: async (req, res) => {
    const products = await db.Product.findAll({
      where: {
        active: 1,
      },
      include: [{ association: "image" }, { association: "price" }],
    });

    res.render("products/products", { products });
  },
  create: async (req, res) => {
    const sizes = await db.Size.findAll({
      raw: true,
      nest: true,
    });
    const materials = await db.Material.findAll({
      raw: true,
      nest: true,
    });
    res.render("products/products-create", { sizes, materials });
  },
  store: async (req, res) => {
    const body = req.body;
    const files = req.files;
    const productId = await productsServices.createOne(body, files);
    res.redirect(`/products/${productId}`);
  },
  detail: async (req, res) => {
    const productId = req.params.productId;
    const sizes = await db.Size.findAll({
      raw: true,
      nest: true,
    });
    const product = await db.Product.findOne({
      where: {
        id: productId,
      },
      include: [
        { association: "image" },
        { association: "size" },
        { association: "material" },
        { association: "price" },
        { association: "color" },
      ],
    });
    console.log(product);
    console.log(product.image);

    res.render("products/product-detail", { product, sizes });
  },
  edit: async (req, res) => {
    const productId = req.params.productId;
    const sizes = await db.Size.findAll({
      raw: true,
      nest: true,
    });
    const materials = await db.Material.findAll({
      raw: true,
      nest: true,
    });
    const product = await db.Product.findOne({
      where: {
        id: productId,
      },
      include: [
        { association: "image" },
        { association: "size" },
        { association: "material" },
        { association: "price" },
        { association: "color" },
      ],
    });

    res.render("products/product-edit", {
      product,
      sizes,
      materials,
      errors: req.session.errorLoad,
      oldData: req.session.oldData,
    });
  },

  update: async (req, res) => {
    const productId = req.params.productId;
    const body = req.body;
    const files = req.files;
    const product = await productsServices.updateOne(
      productId,
      body,
      files,
      req
    );
    res.redirect(product);
  },
  destroy: (req, res) => {
    const productId = req.params.productId;
    console.log(productId);
    productsServices.eliminatedOne(productId);
    res.redirect("/products");
  },
  tarjeta: (req, res) => {
    res.render("tarjeta");
  },
};
