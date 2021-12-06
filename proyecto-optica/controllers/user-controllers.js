const usersServices = require("../services/users");

module.exports = {
  /***  REGISTER  ***/
  register: (req, res) => {
    res.render("users/register");
  },

  createRegister: function (req, res) {
    const body = req.body;
    const register = usersServices.registerUser(body);
    if (register) {
      res.redirect("/");
    } else {
      res.send("ese mail ya fue usado");
    }
  },

  /***  LOGIN  ***/
  login: function (req, res) {
    res.render("users/login");
  },
  createLogin: function (req, res) {
    const body = req.body;
    res.send(body);
  },
};
