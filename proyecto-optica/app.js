const express = require("express");
const app = express();
const path = require("path");
const routeMain = require("./routers/main-router");
const routeRegister = require("./routers/register-router");
const routeLogin = require("./routers/login-router");
const routeCarrito = require("./routers/carrito-router");
app.listen(3000, () => console.log("Server funcionando"));

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "/public")));

app.use("/", routeMain);
app.use("/register", routeRegister);
app.use("/login", routeLogin);
app.use("/carrito", routeCarrito);
/* app.use("/product-detail", routeMain); */

app.use(express.urlencoded({extended: false}));
app.use(express.json());
