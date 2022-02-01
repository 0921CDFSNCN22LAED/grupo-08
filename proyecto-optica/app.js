const express = require("express");
const app = express();
const path = require("path");
const routeMain = require("./routers/main-router");
const routeUser = require("./routers/user-router");
const routeCar = require("./routers/car-router");
const routeProducts = require("./routers/product-router");
const session = require("express-session");
const cookies = require("cookie-parser");
const methodOverride = require("method-override"); //PASAR PODER USAR LOS MÉTODOS PUT Y DELETE
const userLoggedMiddleware = require("./middlewares/app-middleware/user-logged-middleware");
const rememberUserCookieMiddleware = require("./middlewares/app-middleware/remember-user-cookie-middleware");

app.listen(3000, () => console.log("Server funcionando"));
app.use(express.static(path.join(__dirname, "public"))); //  NECESARIO PARA LOS ARCHIVOS ESTÁTICOS EN EL FOLDER /PUBLIC
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: false })); //NECESARIO PARA PODER CAPTURAR TODO AQUELLO QUE VENGA DE UN FORMULARIO
app.use(express.json()); // LO CAPTURADO DEL FORMULARIO QUE ME LO GUARDE EN FORMATO JSON (SI ASI LO QUISIERAMOS)
app.set("view engine", "ejs");
// ********  MIDDLEWARES DE APLICATION ********//
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

// ********  HOME ********//
app.use("/", routeMain);

// ********  PRODUCTS ********//
app.use("/products", routeProducts);

// ********  USER ********//
app.use("/user", routeUser);

// ******** CARRITO ********//
app.use("/car", routeCar);
