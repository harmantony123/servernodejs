const express = require("express");
const path = require("path");
const db = require("../config/mysql");
const router = express.Router();

router.post("/", (req, res, next) => {
  const counter = req.body.counter;
  const sql = "REPLACE INTO counter(counter) VALUES ?";
  const values = [[counter]];
  db.query(sql, [values], (err, result) => {
    if (err) {
      console.log("err");
      return;
    }
    res.status(200).json({
      message: "berhasil menambah data counter",
    });
  });
});
router.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "index.html"));
});
router.use("/", (req, res, next) => {
  res.send("<h1>tidak bisa menambah data</h1>");
});
module.exports = router;
