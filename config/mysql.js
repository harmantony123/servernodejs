const mysql = require("mysql2");

const con = mysql.createConnection({
  // host: "localhost",
  // user: "root",
  // password: "albertenstein",
  // database: "kuliah",

  host: "35.188.70.158",
  user: "root",
  password: "1234",
  database: "UAS_takad",
});
con.connect((err) => {
  if (err) throw err;
  console.log(`koneksi ke database kuliah berhasil`);
});
module.exports = con;
