const con = require("../config/db");

//GET ALL EMPLOYEE
const getAllEmployee = (req, res) => {
  const sqlQuery = `select * from employee`;
  con.query(sqlQuery, (err, rows, field) => {
    if (err) {
      console.log("error while fetching", err);
    } else {
      console.log(rows);
      res.json(rows);
    }
  });
};

//GET EMPLOYEE BY ID
const getEmployeeById = (req, res) => {
  const sqlQuery = `select * from employee where EmpId = ${req.params.id}`;
  con.query(sqlQuery, (err, rows, field) => {
    if (err) {
      console.log("error while fetching", err);
    } else {
      console.log(rows);
      res.json(rows);
    }
  });
};

// DELETE BY ID
const removeEmployee = (req, res) => {
  console.log(req.params);
  const sqlQuery = `delete from employee where EmpId = ${req.params.id}`;
  con.query(sqlQuery, (err, rows, field) => {
    if (err) {
      console.log("error while fetching", err);
    } else {
      console.log(rows);
      res.json("Deleted");
    }
  });
};

//INSERT EMPLOYEE DATA
const addEmployee = (req, res) => {
  const id = req.body.EmpId;
  const name = req.body.Name;
  const code = req.body.EmpCode;
  const salary = req.body.Salary;

  const sqlQuery = `INSERT INTO employee(EmpId, Name,EmpCode,Salary) VALUES(${id},"${name}",${code},${salary})`;
  con.query(sqlQuery, (err, rows, field) => {
    if (err) {
      console.log("error while fetching", err);
      return res.send("error");
    } else {
      res.json("updated");
    }
  });
};

//UPDATE EMPLOYEE DATA
const updateEmployeData = (req, res) => {
  const name = req.body.Name;
  var sqlQuery = `UPDATE employee SET Name = "${name}" where EmpId = ${req.params.id} `;

  con.query(sqlQuery, (err, rows, field) => {
    if (err) {
      console.log("error while fetching", err);
      return res.send("error");
    } else {
      res.json("updated");
    }
  });
};

module.exports = {
  getAllEmployee,
  getEmployeeById,
  removeEmployee,
  addEmployee,
  updateEmployeData,
};
