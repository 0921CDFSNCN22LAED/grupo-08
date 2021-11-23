//const path =require ("path");
const glasses = [
  {
    name: "JOSS negro mate",
    desc: "breve descripcion",
    seller: "Nombre de vendedor",
    size: "M",
    price: "$6999",
    img: "/img/joss-negro-mate.jpg",
    higlights: "Descatado",
  },
  {
    name: "JOSS rosa",
    desc: "breve descripcion",
    seller: "Nombre de vendedor",
    size: "S",
    price: "4499",
    img: "/img/joss-rosa.jpg",
    higlights: "Descatado",
  },
  {
    name: "AHREN carey habano",
    desc: "breve descripcion",
    seller: "Nombre de vendedor",
    size: "L",
    price: "$8999",
    img: "/img/ahren-carey-habano.jpg",
    higlights: "Descatado",
  },
  {
    name: "AHREN cristal",
    desc: "breve descripcion",
    seller: "Nombre de vendedor",
    size: "S",
    price: "$9499",
    img: "/img/ahren-cristal.jpg",
    higlights: "Descatado",
  },
];

const mainControllers = {
  home: function (req, res) {
    res.render("home", {
      glasses: glasses,
    });
  },
  howToRead: function (req, res) {
    res.render("how-to-read");
  },
  productos: function (req, res) {
    res.render("product-detail");
  },
  carrito: function (req, res) {
    res.render("carrito");
  },
  login: function (req, res) {
    res.render("login");
  },
  register: (req, res) => {
    res.render("register");
  },
};

module.exports = mainControllers;
