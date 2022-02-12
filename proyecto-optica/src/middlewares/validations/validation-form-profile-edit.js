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
  body("oldPassword")
    .notEmpty()
    .withMessage("Debe ingresar su Contraseña Actual")
    .custom(async (value, { req }) => {
      const user = await findOne(req.params.id);
      if (!bcryptjs.compareSync(req.body.oldPassword, user.password)) {
        throw new Error("Su contraseña actual no coincide");
      }
    }),
  body("password")
    .notEmpty()
    .withMessage("Debe ingresar su Contraseña una nueva contraseña")
    .isLength({ min: 8 })
    .withMessage("Debe contener al menos 8 caracteres"),
  body("confirmPassword")
    .notEmpty()
    .withMessage("Debe ingresar su Contraseña una nueva contraseña")
    .isLength({ min: 8 })
    .withMessage("Debe contener al menos 8 caracteres")
    .custom((value, { req }) => {
      if (value != req.body.password) {
        throw new Error("Su contraseña no coincide con la confirmación");
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
