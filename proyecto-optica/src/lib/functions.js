const db = require("../database/models");
const path = require("path");
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
