const path = require("path");
const { body } = require("express-validator");
const { countImagesActives } = require("../../lib/libFunctions");
const db = require("../../database/models");
module.exports = [
  body("name")
    .notEmpty()
    .withMessage("No completo el campo, se cargo con los valores anteriores")
    .isLength({ min: 4 })
    .withMessage("el nombre del producto debe contener al menos 3 caracteres"),
  body("shortDescription")
    .notEmpty()
    .withMessage("No completo el campo, se cargo con los valores anteriores")
    .isLength({ max: 255 })
    .withMessage("La descripción debe contener menso de 255 caracteres"),
  body("price")
    .notEmpty()
    .withMessage("No completo el campo, se cargo con los valores anteriores")
    .isNumeric()
    .withMessage("El campo precio debe ser un numero"),
  body("size").notEmpty().withMessage("Debe seleccionar un talle"),
  body("color")
    .notEmpty()
    .isLength({ max: 7 })
    .withMessage("No completo el campo, se cargo con los valores anteriores"),
  body("image_edit_product").custom(async (values, { req }) => {
    const files = req.files;
    console.log(req.params.productId);
    console.log(files);
    const imagesActives = await countImagesActives(
      await db.Image.findAll({
        where: {
          product_id: req.params.productId,
        },
        raw: true,
        nest: true,
      })
    );
    console.log(imagesActives, "imagens activas");
    //devuelve un numero con la cantidad de imágenes que hay en la db relacionada con este producto
    if (8 - imagesActives > 0) {
      if (files.length == 0) {
        throw new Error("Debe subir al menos una imagen ");
      } else {
        //doble verificacion de formato
        const files = req.files;
        //console.log(files);
        const extensionAcepted = [
          "image/jpeg",
          "image/jpg",
          "image/gif",
          "image/png",
        ];

        for (image of files) {
          console.log(!extensionAcepted.includes(image.mimetype));
          if (!extensionAcepted.includes(image.mimetype)) {
            // lo niego, false implica que es un formato valido
            // entonces true significa ques no es un formato invalido
            throw new Error(
              `Debe subir una foto con formato valido, los formatos aceptados son  ${extensionAcepted}`
            );
          }
        }
      }
    } else {
      if (files.length == 0) {
        return true;
      } else {
        throw new Error(
          "Ya tiene 8 fotos de anteojos , debe eliminar alguna para cargar nuevas"
        );
      }
    }

    return true;
  }),
  body("longDescription")
    .notEmpty()
    .withMessage("Debe completar el campo descripción"),
  body("material")
    .notEmpty()
    .isNumeric()
    .withMessage("Debe seleccionar un material"),
];
