const res = require("express/lib/response");
const db = require("../database/models");
const { getOrders } = require("../services/products");
const productsServices = require("../services/products");
module.exports = {
  home: async (req, res) => {
    const products = await productsServices.listProductsHome();

    res.render("main/home", { products });
  },
  search: (req, res) => {
    /*  const query = req.query.search;
    const searchar = productsServices.search(query); */
    res.render("products/results");
  },

  howToRead: (req, res) => {
    res.render("main/how-to-read");
  },

  car: (req, res) => {
    res.render("carrito");
  },
  prueba: async (req, res) => {
    const order = await getOrders();
    res.json(order);
  },
  prescription: function (req, res) {
    res.render("prescription");
  },
};
