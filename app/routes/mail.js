var express = require('express');
const { sendMailToEmployees } = require('../controllers/send.mail');
var router = express.Router();

/* GET home page. */
router.post('/', sendMailToEmployees);

module.exports = router;
