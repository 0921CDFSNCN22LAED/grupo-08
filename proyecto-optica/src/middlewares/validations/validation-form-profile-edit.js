const path = require("path");
const bcryptjs = require("bcryptjs");
const { body } = require("express-validator");
const { findOne } = require("../../utils/functions");

module.exports = [
  body("name")
    .notEmpty()
    .withMessage("Debe llenar el campo nombre")
    .isLength({ min: 3 })
    .withMessage("Debe tener al menos 3 caracteres"),
  body("lastName")
    .notEmpty()
    .withMessage("Debe llenar el campo nombre")
    .isLength({ min: 3 })
    .withMessage("Debe tener al menos 3 caracteres"),
  body("oldPassword").custom(async (value, { req }) => {
    if (!value) {
      return true;
    }
    const user = await findOne(req.params.id);
    if (!bcryptjs.compareSync(req.body.oldPassword, user.password)) {
      throw new Error("Su contraseña actual no coincide");
    }
    return true;
  }),
  body("password").custom((value, { req }) => {
    if (!req.oldPassword) {
      if (!value) {
        throw new Error("Debe llenar el campo Contraseña actual");
      }
      if (value.length < 7) {
        throw new Error("El campo debe tener al menos 8 caracteres");
      }
    }
    return true;
  }),
  body("confirmPassword").custom((value, { req }) => {
    console.log(value, "value=confirmPassword");
    console.log(req.body.password, "req.body.password = password");
    if (!req.oldPassword) {
      if (!value) {
        throw new Error("Debe confirmar su contraseña");
      }
      if (value.length < 7) {
        throw new Error("El campo debe tener al menos 8 caracteres");
      }
      if (value !== req.body.password) {
        throw new Error("Su contraseña no coincide con la confirmación");
      }
    }
    return true;
  }),
  body("streetAddress")
    .notEmpty()
    .withMessage("Debe llenar el campo Dirección"),
  body("avatar").custom(async (values, { req }) => {
    const file = req.file;
    const user = await findOne(req.params.id);

    const extensionAcepte = [
      "image/jpeg",
      "image/png",
      "image/gif",
      "image/jpg",
    ];

    if (!file) {
      //si no subio ninguna imagen entro y le dejo la que tenia
      req.file = {
        filename: user.avatar,
      };
    } else {
      const extencionVerification = extensionAcepte.includes(file.mimetype);
      if (!extencionVerification) {
        throw new Error(`Solo se permiten fotos de formato ${extensionAcepte}`);
      }
    }
    return true;
  }),
];
