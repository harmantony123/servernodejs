const express = require("express");
const path = require("path");
const db = require("../config/mysql");
const router = express.Router();

router.post("/", (req, res, next) => {
  const counter = req.body.counter;
  const sql = "INSERT INTO counterLatihan(counter) values ?";
  const values = [[counter]];
  db.query(sql, [values], (err, result) => {
    if (err) throw err;
    res.status(200).json({
      message: "berhasil menambah data counter",
    });
  });
});
router.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "index.html"));
});
module.exports = router;
