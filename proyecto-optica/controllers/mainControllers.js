const mainControllers = {
  home: function (req, res) {
    res.render("home");
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
