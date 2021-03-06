const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

/* Connect to Mongodb Database */
mongoose.connect('mongodb://localhost/database_name');
let db = mongoose.connection;

//Check the Connection
db.once('open', function() {
  console.log('Connected to Mongodb');
})
//Error if Not Connected
db.on('error', function(err) {
  console.log(err);
});

/* Import Models */
var Product = require('./models/Product.js');

/* GET ALL PRODUCTS */
app.get('/products', function(req, res, next) {
  Product.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/* SET Product FROM FORM */
app.post('/setproduct', function(req, res, next) {
  // console.log(req.body);
  Product.create(req.body, function (err, products) {
    if (err) return next(err);
    res.json(req.body);
  });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
