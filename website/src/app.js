const express = require("express");
const app = express();
const path = require("path");
const indexRouter = require("./routers/indexRouter");
const session = require("express-session");
const cookies = require("cookie-parser");
const methodOverride = require("method-override"); //PASAR PODER USAR LOS MÉTODOS PUT Y DELETE
const userLoggedMiddleware = require("./middlewares/app-middleware/user-logged-middleware");
const rememberUserCookieMiddleware = require("./middlewares/app-middleware/remember-user-cookie-middleware");

app.listen(3001, () => console.log("Server funcionando en el puerto 3001"));
app.use(express.static(path.join(__dirname, "../public"))); //  NECESARIO PARA LOS ARCHIVOS ESTÁTICOS EN EL FOLDER /PUBLIC
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: false })); //NECESARIO PARA PODER CAPTURAR TODO AQUELLO QUE VENGA DE UN FORMULARIO
app.use(express.json()); // LO CAPTURADO DEL FORMULARIO QUE ME LO GUARDE EN FORMATO JSON (SI ASI LO QUISIERAMOS)
app.set("views", path.resolve(__dirname, "./views"));
app.set("view engine", "ejs");

// ********  MIDDLEWARES DE APLICATION  ********//
app.use(
  session({
    secret: "princesa bebe",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(cookies());
app.use(rememberUserCookieMiddleware);
app.use(userLoggedMiddleware);

// ********  RUTAS  ********//
app.use("/", indexRouter);