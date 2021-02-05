var express = require('express');
var router = express.Router();
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');

require('../api/models/db');
require('../api/config/passport');

app.use(passport.initialize());
app.use('/api', routesApi);

// error handlers
// Catch unauthorised errors
app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
      res.status(401);
      res.json({"message" : err.name + ": " + err.message});
    }
  });

  router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });

  module.exports = router