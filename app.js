const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/about", (req, res, next) => {
  // console.log(req.url)
  console.log("a request on the ABOUT page was received... ");

  res.sendFile(__dirname + "/views/About.html");
});

app.get("/contact", (req, res, next) => {
  res.sendFile(__dirname + "/views/contact.html");
});

app.listen(3001, () => {
  console.log("server listening to requests...");
});
