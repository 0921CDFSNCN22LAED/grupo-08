const bcryptjs = require("bcryptjs");
const { body } = require("express-validator");
const { findOne } = require("../../lib/functions");

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
      console.log(req.params.id);
      console.log(value);
      const user = await findOne(req.params.id);
      if (!bcryptjs.compareSync(value, user.password)) {
        throw new Error("Su contraseña actual no coincide");
      }
    }),
  body("password")
    .notEmpty()
    .withMessage("Debe ingresar su Contraseña una nueva contraseña")
    .isLength({ min: 9 })
    .withMessage("Debe contener al menos 8 caracteres"),
  body("confirmPassword")
    .notEmpty()
    .withMessage("Debe ingresar su Contraseña una nueva contraseña")
    .isLength({ min: 9 })
    .withMessage("Debe contener al menos 8 caracteres")
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Su contraseña no coincide con la confirmación");
      }
    }),
  body("avatar").custom(async (values, { req }) => {
    const file = req.file;
    const user = await findOne(req.params.id);

    const extensionAcepted = [".jpeg", ".png", ".gif", ".jpg"];

    if (!file) {
      //si es undefined , lo niego y entra en el if
      req.file = {
        filename: user.avatar,
      };
    } else {
      const fileExtension = path.extname(file.originalname);
      const extencionVerification = extensionAcepted.includes(fileExtension);

      if (!extencionVerification) {
        throw new Error(
          `Solo se permiten fotos de formato ${extensionAcepted}`
        );
      }
    }
    return true;
  }),
];
