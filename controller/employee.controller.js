const connection = require("../config/db");

//GET ALL EMPLOYEE
const getAllEmployee = (req, res) => {
  const sqlQuery = `select * from employee`;
  connection.query(sqlQuery, (err, rows, field) => {
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
  connection.query(sqlQuery, (err, rows, field) => {
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
  connection.query(sqlQuery, (err, rows, field) => {
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
  const id = req.body.Employee_id;
  const first_name = req.body.First_name;
  const last_name = req.body.Last_name;
  const salary = req.body.Salary;
  const date = req.body.Joining_date;
  const departement = req.body.Departement;

  const sqlQuery = `INSERT INTO employee
  (Employee_id, First_name,Last_name,Salary,Joining_date,Departement) 
  VALUES(${id},"${first_name}","${last_name}",${salary},"${date}","${departement}")`;
  connection.query(sqlQuery, (err, rows, field) => {
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

  connection.query(sqlQuery, (err, rows, field) => {
    if (err) {
      console.log("error while fetching", err);
      return res.send("error");
    } else {
      res.json("updated");
    }
  });
};

// USING JOIN
const totalAward = (req, res) => {
  var sqlQuery = `SELECT Employee_id,First_name,Departement,COUNT(amount) AS 'total award'
FROM employee JOIN reward
ON employee.Employee_id = reward.Employee_ref_id
GROUP BY Employee_ref_id`;
  connection.query(sqlQuery, (err, rows, field) => {
    if (err) {
      console.log("error while fetching", err);
      return res.send("error");
    } else {
      res.json(rows);
    }
  });
};

//JOIN
const employeeInDetail = (req, res) => {
  var sqlQuery = `SELECT * FROM employee LEFT JOIN reward 
  ON employee.Employee_id = reward.Employee_ref_id
  UNION
  SELECT *
  FROM employee RIGHT JOIN reward 
  ON employee.Employee_id = reward.Employee_ref_id`;
  connection.query(sqlQuery, (err, rows, field) => {
    if (err) {
      console.log("error while fetching", err);
      return res.send("error");
    } else {
      res.json(rows);
    }
  });
};

//SEARCH BY NAME AVOIDING SQL INJECTION
const searchByName = (req, res) => {
  let searchQuery = req.body.name;
  connection.query(
    `select * from employee where First_name like ? or Last_name like ?`,
    ["%" + searchQuery + "%", "%" + searchQuery + "%"],
    (err, rows, field) => {
      if (err) {
        console.log("error while fetching", err);
        return res.send("error");
      } else {
        res.json(rows);
      }
    }
  );
};

module.exports = {
  getAllEmployee,
  getEmployeeById,
  removeEmployee,
  addEmployee,
  updateEmployeData,
  employeeInDetail,
  totalAward,
  searchByName,
};
