const productsServices = require("../services/products");
module.exports = {
  home: (req, res) => {
    const arrayProducts = productsServices.listProductsHome();
    res.render("main/home", { products: arrayProducts });
  },
  search: (req, res) => {
    const query = req.query.search;
    const searchar = productsServices.search(query);
    res.render("products/results", { searchar });
  },

  howToRead: (req, res) => {
    res.render("main/how-to-read");
  },

  car: (req, res) => {
    res.render("carrito");
  },
};
