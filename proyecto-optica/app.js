const express = require("express");
const app = express();
const path = require("path");
const routeMain = require("./routers/main-router");
const routeUser = require("./routers/user-router");
const routeCar = require("./routers/car-router");
const routeProducts = require("./routers/product-router");
const methodOverride = require("method-override"); // Pasar poder usar los métodos PUT y DELETE

app.listen(3000, () => console.log("Server funcionando"));

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public"))); // Necesario para los archivos estáticos en el folder /public
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: false })); // Necesario para poder capturar todo aquello que venga de un formulario
app.use(express.json()); // lo capturado del formulario que me lo guarde en formato json (si asi lo quisieramos)

// ********  HOME ********//
app.use("/", routeMain);

// ********  PRODUCTS ********//
app.use("/products", routeProducts);

// ********  USER ********//
app.use("/user", routeUser);

// ******** CARRITO ********//
app.use("/car", routeCar);
