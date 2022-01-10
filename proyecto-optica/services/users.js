const bcryptjs = require("bcryptjs");
const jsonHelper = require("../lib/jsonHelper");
const pahtUserJson = "../data/usersDataBase.json";

const users = jsonHelper.getData(pahtUserJson);

module.exports = {
  users,
  findOne: (userId) => {
    const user = users.find((user) => {
      return userId == user.userId;
    });
    return user;
  },
  findEmail: (email) => {
    const user = users.find((user) => {
      return email == user.email;
    });
    return user;
  },
  findByField: function (field, text) {
    return users.find((oneUser) => oneUser[field] === text);

    //retorna el primero que encuentra
  },
  registerUser: (body, file) => {
    const password = bcryptjs.hashSync(body.password, 10);
    if (bcryptjs.compareSync(body.confirmPassword, password)) {
      body.confirmPassword = password;
    }
    const user = {
      userId: Date.now(),
      ...body,
      password: password,
      avatar: file,
    };

    const verification = users.find((user) => body.email === user.email);
    if (!verification) {
      users.push(user);
      jsonHelper.seveData(users, pahtUserJson);
    }
  },
};
