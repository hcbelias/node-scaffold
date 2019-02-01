var express = require('express');
var PaymentController = require('./payment.controller');
var mockService = require("../../mock/mock.service");

var router = express.Router();

router.post('/credit-card', mockService.setMockMiddleware('credit-card'), PaymentController.processCreditCard);
router.post('/generic', mockService.setMockMiddleware('generic'), PaymentController.processGeneric);

//router.post('/generic/boleto', controller.generateBoleto);
//router.post('/loyalty-points', controller.processLoyaltyPoints);

module.exports = router;