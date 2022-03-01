const db = require("../../database/models");

module.exports = {
  getListUser: async () => {
    const users = await db.User.findAll({ raw: true });
    for (let user of users) {
      delete user.password;
      delete user.confirmPassword;
      delete user.admin;
    }
    return users;
  },
};
