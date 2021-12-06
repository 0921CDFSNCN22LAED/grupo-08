const express = require("express");
const userControllers = require("../controllers/user-controllers");
const router = express.Router();

/***  REGISTER  ***/
router.get("/register", userControllers.register);
router.post("/register", userControllers.createRegister);

/***  LOGIN  ***/
router.get("/login", userControllers.login);
router.post("/login", userControllers.createLogin);

module.exports = router;
