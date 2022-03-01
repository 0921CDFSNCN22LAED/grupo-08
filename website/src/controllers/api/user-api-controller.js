//const fs = require("fs");
//const { validationResult } = require("express-validator");
//const { findOne } = require("../../utils/functions");

const { getListUser } = require("../../services/api/apiUser");

module.exports = {
  profile: async (req, res) => {
    //   if (!req.session.userLogged) {
    //     // return retorno al hoem con un error que no esta logeado , tampoco podrian acceder a esta ruta si no estan logeados
    //   } else {
    //     const user = await findOne(req.params.id);
    //     res.redirect("/user/profile", {
    //       user,
    //     });
    //   }
  },
  list: async (req, res) => {
    const users = await getListUser();
    let status;
    let statusCode;
    if (users) {
      status = true;
      statusCode = 200;
    } else {
      status = true;
      statusCode = 200;
    }
    const response = {
      meta: {
        status: status,
        total: users.length,
        statusCode: statusCode,
        url: "/api/users",
      },
      data: users,
    };
    res.json(response);
  },
};
