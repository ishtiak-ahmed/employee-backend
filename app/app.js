var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors')

var indexRouter = require('./routes/index');
var employeRouter = require('./routes/employee');
var mailRouter = require('./routes/mail');

var app = express();
const db = require("./models");


db.sequelize.sync().then(() => {
  console.log("Drop and re-sync db.");
});


app.use(logger('dev'));
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/employee', employeRouter);
app.use('/send-mail', mailRouter);

module.exports = app;
