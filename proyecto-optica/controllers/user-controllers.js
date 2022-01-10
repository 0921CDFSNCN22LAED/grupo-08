const usersServices = require("../services/users");
const { validationResult, body } = require("express-validator");
const bcryptjs = require("bcryptjs");

module.exports = {
  /***  REGISTER  ***/
  register: (req, res) => {
    res.render("users/register", {
      oldData: req.session.oldData,
      errors: req.session.errors,
      userData: req.session.userData,
    });
  },

  processRegister: (req, res) => {
    const errorsRegister = validationResult(req);
    //errorsRegister es un objeto con la propiedad errors, dicha propiedad error contiene un array de objetos con los errores
    if (!errorsRegister.isEmpty()) {
      //si tengo errores , entro aca
      req.session.errors = errorsRegister.mapped();
      req.session.oldData = req.body;
      res.redirect("/user/register");
    } else {
      req.session.userData = req.body;
      if (req.file) {
        req.session.userData.avatar = req.file.filename;
      }
      usersServices.registerUser(req.body, req.file.filename);
      res.redirect("/");
    }
  },

  /***  LOGIN  ***/
  login: (req, res) => {
    res.render("users/login", {
      errors: req.session.errorsLogin,
      oldData: req.session.oldData,
    });
  },
  processLogin: (req, res) => {
    const userToLogin = usersServices.findByField("email", req.body.email);

    if (userToLogin) {
      if (bcryptjs.compareSync(req.body.password, userToLogin.password)) {
        /* delete userToLogin.password;
        delete userToLogin.confirmPassword; */
        //por seguridad eliminamos esos datos del userLogged antes de pasarlo a session
        // preguntar porque no se destruye la variable al terminar el bloque
        req.session.userLogged = userToLogin;
        if (req.body.rememberuser) {
          res.cookie("userEmail", req.body.email, {
            maxAge: 1000 * 30,
          }); // una vez todo esta validado , seteo la cookie en singular porque es una sola
        }
        return res.redirect("/user/profile");
      } else {
        req.session.errorsLogin = {
          password: {
            msg: "Contraseña incorrecta",
          },
        };
        return res.redirect("/user/login");
      }
    } else {
      req.session.errorsLogin = {
        email: {
          msg: "Las credenciales son invalidas",
        },
      };
      req.session.oldData = req.body;
      res.redirect("/user/login");
    }
  },
  profile: (req, res) => {
    //leyendo la cookie, es plural porque es un objeto con varias
    res.render("users/userProfile", { userLogged: req.session.userLogged });
  },
  logout: (req, res) => {
    res.clearCookie("userEmail"); //elimina  cualquier cookie que exista con ese nombre
    req.session.destroy(); // destruye la session
    res.redirect("/");
  },
};
