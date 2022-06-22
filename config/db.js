const mysql = require("mysql");

const con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "Welcome@123",
  database: "EmployeeDB",
  port: 3306,
});
module.exports = con;
