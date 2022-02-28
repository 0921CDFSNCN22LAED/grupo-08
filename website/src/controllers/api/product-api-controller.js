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
  men: async (req, res) => {
    const productsMen = await db.Category.findAll({
      where: {
        id: 1,
      },
      include: [
        {
          model: db.Product,
          as: "product",
          include: ["image", "price"],
        },
      ],
    });
    let status;
    if (productsMen) {
      status = 200;
    } else {
      status = 404;
    }
    let response = {
      meta: {
        status: status,
        total: productsMen.length,
        url: "/api/products/men",
      },
      data: productsMen,
    };
    res.json(response);
  },
  women: async (req, res) => {
    const productsWomen = await db.Category.findAll({
      where: {
        id: 2,
      },
      include: [
        {
          model: db.Product,
          as: "product",
          include: ["image", "price"],
        },
      ],
    });
    let status;
    if (productsWomen) {
      status = 200;
    } else {
      status = 404;
    }
    let response = {
      meta: {
        status: status,
        total: productsWomen.length,
        url: "/api/products/women",
      },
      data: productsWomen,
    };
    res.json(response);
  },
  children: async (req, res) => {
    const productsChildren = await db.Category.findAll({
      where: {
        id: 3,
      },
      include: [
        {
          model: db.Product,
          as: "product",
          include: ["image", "price"],
        },
      ],
    });
    let status;
    if (productsChildren) {
      status = 200;
    } else {
      status = 404;
    }
    let response = {
      meta: {
        status: status,
        total: productsChildren.length,
        url: "/api/products/children",
      },
      data: productsChildren,
    };
    res.json(response);
  },
};
