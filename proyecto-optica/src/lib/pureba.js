const findOne = require("../services/users");
const jsonHelper = require("./jsonHelper");

const users = jsonHelper.getData("../data/usersDateBase.json");

jsonHelper.seveData(users, "../data/usersDateBase.json");
