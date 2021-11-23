//const path =require ("path");
const glasses = [
  {
    name: "JOSS negro mate",
    desc: "breve descripcion",
    size: "S",
    price: "$6999",
    img: "/img/joss-negro-mate.jpg",
    higlights: "Descatado",
  },
  {
    name: "JOSS negro mate",
    desc: "breve descripcion",
    size: "S",
    price: "$6999",
    img: "/img/joss-negro-mate.jpg",
    higlights: "Descatado",
  },
  {
    name: "JOSS negro mate",
    desc: "breve descripcion",
    size: "S",
    price: "$6999",
    img: "/img/joss-negro-mate.jpg",
    higlights: "Descatado",
  },
  {
    name: "JOSS negro mate",
    desc: "breve descripcion",
    size: "S",
    price: "$6999",
    img: "/img/joss-negro-mate.jpg",
    higlights: "Descatado",
  },
  {
    name: "JOSS negro mate",
    desc: "breve descripcion",
    size: "S",
    price: "$6999",
    img: "/img/joss-negro-mate.jpg",
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
