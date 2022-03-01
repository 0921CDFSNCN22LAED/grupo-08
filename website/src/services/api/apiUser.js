const db = require("../../database/models");

module.exports = {
  getListUser: async () => {
    try {
      const users = await db.User.findAll({ raw: true });
      for (let user of users) {
        delete user.password;
        delete user.confirmPassword;
        delete user.admin;
      }
      return users;
    } catch (error) {
      console.log(error);
    }
  },
  getUserById: async (id) => {
    try {
      const user = await db.User.findByPk(id, {
        raw: true,
      });
      delete user.password;
      delete user.confirmPassword;
      delete user.admin;

      return user;
    } catch (error) {
      console.log(error);
    }
  },
};
