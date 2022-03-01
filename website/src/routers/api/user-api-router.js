const express = require("express");
const userApiController = require("../../controllers/api/user-api-controller");

const router = express.Router();

//Lista todos los usuarios
router.get("/", userApiController.list);

router.get("/profile/:id", userApiController.profile);

module.exports = router;
