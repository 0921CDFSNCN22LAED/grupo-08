const express = require("express");
const app = express();
const path = require("path");
app.use(express.static(path.join(__dirname, "/public")));
app.listen(3000, () => console.log("El server esta funcionando"));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/home.html"));
});
// si hago estatica la carpeta public entonces desde el html puedo acceder con / y siempre con barra

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/register.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/login.html"));
});

app.get("/carrito", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/carrito.html"));
});
app.get("/how-to-read", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/how-to-read.html"));
});
