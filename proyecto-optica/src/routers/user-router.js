const express = require("express");
const router = express.Router();

/***  CONTROLLER  ***/
const userControllers = require("../controllers/user-controllers");

/***  MIDDLEWARES DE RUTA ***/
const guestMiddleware = require("../middlewares/middleware-user/guest-middleware");
const authMilddleware = require("../middlewares/middleware-user/auth-milddleware");
const uploadFiles = require("../middlewares/middleware-user/middleware-multer");
const validationsRegister = require("../middlewares/validations/validation-form-register");

/***  REGISTER  ***/

// Formulario de registro
router.get("/register", guestMiddleware, userControllers.register);

// Proceso de registro
router.post(
  "/register",
  uploadFiles.single("avatar"),
  validationsRegister,
  userControllers.processRegister
);

/***  LOGIN  ***/

// Formulario de de login
router.get("/login", guestMiddleware, userControllers.login);

// Procesar el login
router.post("/login", userControllers.processLogin);

// Perfil de Usuario
router.get("/profile", authMilddleware, userControllers.profile);

//Edit perfil esta hecho con apis
//router.get("/profile/:id/edit", userControllers.ProfileEdit);

// Logout
router.get("/logout", userControllers.logout);

module.exports = router;
