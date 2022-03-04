const express = require("express");
const userApiController = require("../../controllers/api/user-api-controller");

const router = express.Router();

router.get("/validationUser", userApiController.getUserValidation);

//Lista todos los usuarios
router.get("/", userApiController.list);
//Lista un usuario por su id
router.get("/:userId", userApiController.detail);

module.exports = router;
