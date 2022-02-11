const { validationResult } = require("express-validator");
const usersServices = require("../services/users");

module.exports = {
  /***  REGISTER  ***/
  register: (req, res) => {
    res.render("users/register", {
      oldData: req.session.oldData,
      errors: req.session.errors,
      userData: req.session.userData,
    });
  },

  processRegister: async (req, res) => {
    const result = await usersServices.registerUser(req);
    res.redirect(result);
  },

  /***  LOGIN  ***/
  login: (req, res) => {
    res.render("users/login", {
      errors: req.session.errorsLogin,
      oldData: req.session.oldData,
    });
  },
  processLogin: async (req, res) => {
    const result = await usersServices.loginUser(req, res);
    res.redirect(result);
  },

  /***  PROFILE ***/
  profile: (req, res) => {
    //leyendo la cookie, es plural porque es un objeto con varias
    res.render("users/userProfile", { userLogged: req.session.userLogged });
  },
  profileEdit: (req, res) => {
    const body = req.body;
    console.log(body);
    const validations = validationResult(req);
    if (validations.errors.length !== 0) {
      console.log(validations);
      req.session.errorsFormProfile = validations.mapped();
      req.session.dataUserProfiles = body;
    }
  },

  logout: (req, res) => {
    res.clearCookie("userEmail"); //elimina  cualquier cookie que exista con ese nombre
    req.session.destroy(); // destruye la session
    res.redirect("/");
  },
};
