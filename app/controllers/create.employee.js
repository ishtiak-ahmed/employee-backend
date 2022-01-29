const db = require("../models");
const Employee = db.employees;

const validateEmployee = (employee) => {
  if(!employee.firstName) return ({error: true, message: 'First name is required'})
  if(!employee.lastName) return ({error: true, message: 'Last name is required'})
  if(!employee.email) return ({error: true, message: 'Email is required'})
  return true;
}

exports.createEmployee = (req, res) => {
  const validate = validateEmployee(req.body)
  if (validate.error) {
    res.status(400).send({
      message: validate.message
    });
    return;
  }

  const employee = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email
  };

  Employee.create(employee)
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