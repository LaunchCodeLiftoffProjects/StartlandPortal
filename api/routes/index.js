var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

var ctrlHome = require('../controllers/home');
var ctrlAuth = require('../controllers/authentication');

router.get('/home', auth, ctrlHome.homeRead);

router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

module.exports = router;