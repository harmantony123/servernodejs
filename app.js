const express = require("express");
const bodyParser = require("body-parser");
const counterRoute = require("./routes/counter");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", counterRoute);

module.exports = app;
