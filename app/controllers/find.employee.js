const db = require("../models");
const Employee = db.employees;

exports.findAllEmployee = (req, res) => {
  console.log('employee request received');
  Employee.findAll()
    .then(data => {
      console.log(data.length);
      res.send(data);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send({
        message:
          err.message || "Some error occurred while getting employees."
      });
    });
};