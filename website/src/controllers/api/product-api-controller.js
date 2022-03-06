const {
  getProductsById,
  getAllProductsAllAssociations,
  getAllProductsMen,
  getAllProductsWomen,
  getAllProductsChildren,
  getAllProductsSun,
  getAllProductsRead,
  getAllProductsRecetados,
  getOrders,
} = require("../../services/api/apiProducts");

module.exports = {
  list: async (req, res) => {
    try {
      const page = req.query.page;
      const response = await getAllProductsAllAssociations(page);
      res.json(response);
    } catch (error) {
      console.log(error);
    }
  },
  detail: async (req, res) => {
    try {
      const response = await getProductsById(req.params.productId);
      res.json(response);
    } catch (error) {
      console.log(error);
    }
  },
  listOrders: async (req, res) => {
    const page = req.query.page;
    const orders = await getOrders(page);
    res.json(orders);
  },
  men: async (req, res) => {
    try {
      const response = await getAllProductsMen();
      res.json(response);
    } catch (error) {
      console.log(error);
    }
  },
  women: async (req, res) => {
    try {
      const response = await getAllProductsWomen();
      res.json(response);
    } catch (error) {
      console.log(error);
    }
  },
  children: async (req, res) => {
    try {
      const response = await getAllProductsChildren();
      res.json(response);
    } catch (error) {
      console.log(error);
    }
  },
  sun: async (req, res) => {
    try {
      const response = await getAllProductsSun();
      res.json(response);
    } catch (error) {
      console.log(error);
    }
  },
  read: async (req, res) => {
    try {
      const response = await getAllProductsRead();
      res.json(response);
    } catch (error) {
      console.log(error);
    }
  },
  recetados: async (req, res) => {
    try {
      const response = await getAllProductsRecetados();
      res.json(response);
    } catch (error) {
      console.log(error);
    }
  },
};
