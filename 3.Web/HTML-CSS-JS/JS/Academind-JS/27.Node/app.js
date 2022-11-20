const express = require("express");
const bodyParser = require("body-parser");

const port = 3000;
const app = express();

app.set("view engine", "ejs");
app.set("views", "ui");

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use((req, res, next) => {
  res.setHeader("Content-Type", "text/html");
  next();
});

app.use((req, res, next) => {
  const fullName = req.body.fullname || "John / Jane Doe";
  res.render("index", {
    user: fullName,
  });
});

app.listen(port, () => {
  console.log("Started express server...");
});
