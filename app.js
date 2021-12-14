const express = require("express");
const path = require("path");
const app = express();

const pathPublic = path.resolve(__dirname, "./public");

app.use(express.static(pathPublic));

app.listen(process.env.PORT || 3000, () =>
  console.log("Servidor está corriendo en el puerto 3000")
);

app.get("/", (req, res) => {
  let pathNew = path.resolve(__dirname, "views/home.html");
  res.sendFile(pathNew);
});

app.get("/register", (req, res) => {
  let pathNew = path.resolve(__dirname, "views/register.html");
  res.sendFile(pathNew);
});

app.get("/login", (req, res) => {
  let pathNew = path.resolve(__dirname, "views/login.html");
  res.sendFile(pathNew);
});
