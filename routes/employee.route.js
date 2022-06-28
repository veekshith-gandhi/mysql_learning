const {
  getAllEmployee,
  getEmployeeById,
  removeEmployee,
  addEmployee,
  updateEmployeData,
  employeeInDetail,
  totalAward,
  searchByName,
} = require("../controller/employee.controller");

const route = require("express").Router();

route.get("/list", getAllEmployee);
route.post("/", addEmployee);
route.post("/name", searchByName);
route.get("/reward", totalAward);
route.get("/detail", employeeInDetail);
route.get("/:id", getEmployeeById);
route.delete("/:id", removeEmployee);
route.patch("/:id", updateEmployeData);

module.exports = route;
