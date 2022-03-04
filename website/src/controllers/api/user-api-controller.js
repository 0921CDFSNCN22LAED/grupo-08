//const fs = require("fs");
//const { validationResult } = require("express-validator");
//const { findOne } = require("../../utils/functions");

const session = require("express-session");
const {
  getListUsers,
  getUserById,
  getUserToValidation,
  ValidationPassword,
} = require("../../services/api/apiUser");

module.exports = {
  list: async (req, res) => {
    try {
      const users = await getListUsers();
      let status;
      let statusCode;
      if (users) {
        status = true;
        statusCode = 200;
      } else {
        status = false;
        statusCode = 404;
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
    } catch (errors) {
      console.log(errors);
    }
  },
  detail: async (req, res) => {
    try {
      const user = await getUserById(req.params.userId);
      let status;
      let statusCode;
      if (user) {
        status = true;
        statusCode = 200;
      } else {
        status = false;
        statusCode = 404;
      }
      const response = {
        meta: {
          status: status,
          total: user.length,
          statusCode: statusCode,
          url: `/api/users/${user.id}`,
        },
        data: user,
      };
      res.json(response);
    } catch (errors) {
      console.log(errors);
    }
  },
  getUserValidation: async (req, res) => {
    try {
      console.log(req.query.userDB);
      const user = await getUserToValidation(req.query.userDB);
      console.log(user);
      let status;
      let statusCode;
      if (user) {
        status = true;
        statusCode = 200;
      } else {
        status = false;
        statusCode = 404;
      }
      const response = {
        meta: {
          status: status,
          total: 1,
          statusCode: statusCode,
          url: "/api/users/validationUser",
        },
        data: user,
      };
      res.json(response);
    } catch (errors) {
      console.log(errors);
    }
  },
  getUserPassword: async (req, res) => {
    try {
      const userSession = req.session.userLogged;
      console.log(userSession);
      console.log(req.query.password, "query password");
      const password = req.query.password;
      const user = await ValidationPassword(userSession, password);
      console.log(user);
      let status;
      let statusCode;
      if (user) {
        status = true;
        statusCode = 200;
      } else {
        status = false;
        statusCode = 404;
      }
      const response = {
        meta: {
          status: status,
          total: 1,
          statusCode: statusCode,
          url: "/api/users/validationUser",
        },
        data: user,
      };
      res.json(response);
    } catch (errors) {
      console.log(errors);
    }
  },
};
