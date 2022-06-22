const {
  getAllEmployee,
  getEmployeeById,
  removeEmployee,
  addEmployee,
  updateEmployeData,
} = require("../controller/employee.controller");

const route = require("express").Router();

route.get("/list", getAllEmployee);
route.post("/", addEmployee);
route.get("/:id", getEmployeeById);
route.delete("/:id", removeEmployee);
route.patch("/:id", updateEmployeData);

module.exports = route;
