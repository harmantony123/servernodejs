const mysql = require("mysql2");

const con = mysql.createConnection({
  // host: "localhost",
  // user: "root",
  // password: "albertenstein",
  // database: "kuliah",

  host: "sql.freedb.tech",
  user: "freedb_harmanelins",
  password: "sz35$pQWM@$4kG",
  database: "freedb_dbuser",
});
con.connect((err) => {
  if (err) throw err;
  console.log(`koneksi ke database kuliah berhasil`);
});
module.exports = con;
