const path = require("path");
const db = require("../database/models");
const User = db.User;
module.exports = {
  findOne: async (id) => {
    try {
      const user = await User.findByPk(id);
      return user;
    } catch (error) {
      console.log(error);
    }
  },
  findEmail: async (email) => {
    try {
      const user = await User.findOne({
        where: {
          email: email,
        },
        raw: true,
        nest: true,
      });
      return user;
    } catch (error) {
      console.log(error);
    }
  },

  validationErrorsProfile: (body, file, validations) => {
    const pathNewFile = path.resolve("public", "img", "users", file.filename);
    req.session.errorsFormProfile = validations.mapped();
    req.session.dataUserProfiles = body;
    if (user.avatar != file.filename) {
      // si el usuario tiene errores y no subió una nueva foto, al asignarle
      //la misma en la validación la comparo para con la db para que no me la borre
      //si es otra foto la borro porque tuvo errores, lo mismo si carga una nueva y tiene errores no se cargar porque no coincide con su foto de usuario
      fs.unlink(pathNewFile, (error) => {
        //tambien en vez de pathFile se podia poner file.path que es la ruta de la foto que subió , pero como para saber mas lo hago asi
        if (error) {
          console.log(error);
        }
      });
    }
  },

  extractFormat: (file) => {
    const extension = path.extname(file);
    return extension;
  },
  /* findByField: async (field, text) => {
    return await Users.findOne((oneUser) => oneUser[field] === text);
    //chequear esto mañana
    //retorna el primero que encuentra
  }, */
};
