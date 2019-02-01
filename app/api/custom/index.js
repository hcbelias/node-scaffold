var express = require('express');
var Controller = require('./custom.controller');
var Auth = require('./../../auth/auth.service');

var router = express.Router();

router.get('/products', Auth.isSDKAuthenticated(), Controller.getProducts);

module.exports = router;