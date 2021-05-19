const express = require("express");
const path = require("path");
const http = require("https");
const jsondata = require("./package.json");
const fs = require("fs");
var privateKey = fs.readFileSync("./sslcert/selfsigned.key", "utf8");
var certificate = fs.readFileSync("./sslcert/selfsigned.crt", "utf8");

var credentials = { key: privateKey, cert: certificate };
app = express();

app.use(express.static(path.join(__dirname, "templates")));

app.get("/home", function (req, res) {
  res.send(jsondata);
});

http.createServer(credentials, app).listen(8433, "0.0.0.0");
