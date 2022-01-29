const db = require("../models");
const Employee = db.employees;

const validateEmployee = (employee) => {
  if (!employee.firstName) return ({ error: true, message: 'First name is required' })
  if (!employee.lastName) return ({ error: true, message: 'Last name is required' })
  if (!employee.email) return ({ error: true, message: 'Email is required' })
  return true;
}

exports.uploadEmployee = (req, res) => {

  Employee.bulkCreate(req.body)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while adding the Employee."
      });
    });
};