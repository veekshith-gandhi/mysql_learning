const express = require("express");
const con = require("./config/db");
const employeeRouter = require("./routes/employee.route");

const PORT = 8080;
const app = express();

//MIDLEWARE
app.use(express.json());

//ROUTER
app.use("/employee", employeeRouter);

//ESTABLISH CONNECTION
con.connect((err) => {
  if (err) {
    console.log("Error while Connecting to Mysql");
  } else {
    console.log("Connected Succesfull");
  }
});

app.listen(PORT, () => {
  console.log("listening to port : 8080");
});
