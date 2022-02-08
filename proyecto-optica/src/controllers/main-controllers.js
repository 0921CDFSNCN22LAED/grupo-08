const db = require("../database/models");
const productsServices = require("../services/products");
module.exports = {
  home: async (req, res) => {
    const products = await productsServices.listProductsHome();

    res.render("main/home", { products });
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
  prueba: async (req, res) => {
    const producto = await db.Product.findOne({
      where: {
        id: 55,
      },
      include: [
        { association: "image" },
        { association: "size" },
        { association: "material" },
        { association: "price" },
        { association: "color" },
      ],
    });
    if (producto.active == 1) {
      console.log(producto);
      res.send(producto);
    } else {
      res.send("Ese producto no se encuentra activado");
    }
  },
};