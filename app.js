const express = require("express");
const path = require("path");
const jsondata = require("./package.json");
app = express();

app.use(express.static(path.join(__dirname, "templates")));

app.get("/home", function (req, res) {
  res.send(toString(req));
});
app.listen(5000, "0.0.0.0");
