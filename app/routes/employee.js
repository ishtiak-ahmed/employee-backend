var express = require('express');
const { createEmployee } = require('../controllers/create.employee');
const { findAllEmployee } = require('../controllers/find.employee');
const { uploadEmployee } = require('../controllers/upload.employe');
var router = express.Router();

/* GET users listing. */
router.get('/', findAllEmployee)
router.post('/', createEmployee)
router.post('/many', uploadEmployee)

module.exports = router;
