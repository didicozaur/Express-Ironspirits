const express = require("express");
const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

app.use(express.static("public"));

app.get("/home", (req, res, next) => {
  res.render("home");
});

app.get("/contact", (req, res, next) => {
  res.render("contact");
});

app.get("/about", (req, res, next) => {
  res.render("About");
});

app.get("/limoncello", (req, res, next) => {
  // res.render("view", info);

  const data = {
    title: "Limoncello",
    price: 20,
    imageFile: "limoncello.jpg",
  };

  res.render("product", data);
});

app.get("/single-malt", (req, res, next) => {
  // res.render("view", info);

  const data = {
    title: "Single Malt",
    price: 50,
    imageFile: "single-malt.jpg",
  };

  res.render("product", data);
});

app.get("/tequilla", (req, res, next) => {
  // res.render("view", info);

  const data = {
    title: "Tequilla",
    price: 35,
    imageFile: "tequila.jpg",
    stores: ["Online", "Albacete", "Freiburg", "Amsterdam"],
  };

  res.render("product", data);
});

app.listen(3001, () => {
  console.log("server listening to requests...");
});
