const fs = require("fs");
const { validationResult } = require("express-validator");
const { findOne } = require("../../lib/functions");

module.exports = {
  profile: async (req, res) => {
    if (!req.session.userLogged) {
      // return retorno al hoem con un error que no esta logeado , tampoco podrian acceder a esta ruta si no estan logeados
    } else {
      const user = await findOne(req.params.id);
      res.redirect("/user/profile", {
        user,
      });
    }
  },
};
