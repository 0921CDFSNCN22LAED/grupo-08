const db = require("../../database/models");

module.exports = {
  getProductsById: async (id) => {
    try {
      const product = await db.Product.findByPk(id, {
        include: ["image", "size", "material", "price", "color", "category"],
      });
      let status;
      let statusCode;
      if (product) {
        status = 200;
        statusCode = true;
      } else {
        status = 404;
        statusCode = false;
      }
      let response = {
        meta: {
          status: status,
          statusCode: statusCode,
          count: product ? 1 : "",
          url: product ? `/api/product/${product.id}` : "",
        },
        data: product,
      };
      return response;
    } catch (error) {
      console.log(error);
    }
  },

  getAllProductsAllAssociations: async () => {
    try {
      const products = await db.Product.findAll({
        include: ["image", "size", "material", "price", "color", "category"],
      });
      let status;
      let statusCode;
      if (products) {
        status = 200;
        statusCode = true;
      } else {
        status = 404;
        statusCode = false;
      }
      let response = {
        meta: {
          status: status,
          statusCode: statusCode,
          count: products ? products.length : "",
          url: products ? "/api/products" : "",
        },
        data: products,
      };
      return response;
    } catch (error) {
      console.log(error);
    }
  },

  getAllProductsMen: async () => {
    try {
      const productsMen = await db.Category.findAll({
        where: {
          categoryName: "MEN",
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
      if (productsMen[0].product.length !== 0) {
        status = 200;
        statusCode = true;
      } else {
        status = 404;
        statusCode = false;
      }
      let response = {
        meta: {
          status: status,
          statusCode: statusCode,
          count: productsMen[0].product.length,
          url: "/api/products/men",
        },
        data: productsMen[0].product,
      };
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  getAllProductsWomen: async () => {
    try {
      const productsWomen = await db.Category.findAll({
        where: {
          categoryName: "WOMEN",
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
      let statusCode;
      if (productsWomen[0].product.length !== 0) {
        status = 200;
        statusCode = true;
      } else {
        status = 404;
        statusCode = false;
      }
      let response = {
        meta: {
          status: status,
          statusCode: statusCode,
          count: productsWomen[0].product.length,
          url: "/api/products/women",
        },
        data: productsWomen[0].product,
      };
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  getAllProductsChildren: async () => {
    try {
      const productsChildren = await db.Category.findAll({
        where: {
          categoryName: "CHILDREN",
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
      let statusCode;

      if (productsChildren[0].product.length !== 0) {
        status = 200;
        statusCode = true;
      } else {
        status = 404;
        statusCode = false;
      }
      let response = {
        meta: {
          status: status,
          statusCode: statusCode,
          count: productsChildren[0].product.length,
          url: "/api/products/children",
        },
        data: productsChildren[0].product,
      };
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  getAllProductsSun: async () => {
    try {
      const productsSun = await db.Category.findAll({
        where: {
          categoryName: "SUN",
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
      let statusCode;
      if (productsSun[0].product.length !== 0) {
        status = 200;
        statusCode = true;
      } else {
        status = 404;
        statusCode = false;
      }
      let response = {
        meta: {
          status: status,
          statusCode: statusCode,
          count: productsSun[0].product.length,
          url: "/api/products/sun",
        },
        data: productsSun[0].product,
      };
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  getAllProductsRead: async () => {
    try {
      const productsRead = await db.Category.findAll({
        where: {
          categoryName: "SUN",
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
      let statusCode;
      if (productsRead[0].product.length !== 0) {
        status = 200;
        statusCode = true;
      } else {
        status = 404;
        statusCode = false;
      }
      let response = {
        meta: {
          status: status,
          statusCode: statusCode,
          count: productsRead[0].product.length,
          url: "/api/products/read",
        },
        data: productsRead[0].product,
      };
      return response;
    } catch (error) {
      console.log(error);
    }
  },

  getAllProductsRecetados: async () => {
    try {
      const productsRecetados = await db.Category.findAll({
        where: {
          categoryName: "RECETADOS",
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
      let statusCode;
      if (productsRecetados[0].product.length !== 0) {
        status = 200;
        statusCode = true;
      } else {
        status = 404;
        statusCode = false;
      }
      let response = {
        meta: {
          status: status,
          statusCode: statusCode,
          count: productsRecetados[0].product.length,
          url: "/api/products/read",
        },
        data: productsRecetados[0].product,
      };
      return response;
    } catch (error) {
      console.log(error);
    }
  },
};
