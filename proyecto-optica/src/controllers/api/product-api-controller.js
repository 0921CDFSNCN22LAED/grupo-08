const db = require("../../database/models");
const Product = db.Product;
module.exports = {
  list: async (req, res) => {
    const products = await Product.findAll({
      include: ["image", "price", "size", "material", "color"],
    });
    let status;
    if (products) {
      status = 200;
    } else {
      status = 404;
    }
    let response = {
      meta: {
        status: status,
        total: products.length,
        url: "/api/products",
      },
      data: products,
    };
    res.json(response);
  },

  detail: async (req, res) => {
    const product = await Product.findByPk(req.params.id, {
      include: ["image", "price", "size", "material", "color"],
    });
    let status;
    if (product) {
      status = 200;
    } else {
      status = 404;
    }
    let response = {
      meta: {
        status: status,
        total: 1,
        url: "/api/product/id",
      },
      data: product,
    };
    res.json(response);
  },
};
