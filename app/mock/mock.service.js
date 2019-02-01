'use strict';
var compose = require('composable-middleware');

function setMock(req, mockType) {
  if (req.query && req.query.mock) {
    req.body = require("./" + mockType);
  }
}

function setGenericMockMiddleware(mockType) {
  return compose()
    .use(function (req, res, next) {
      var paymentType = 

      setMock(req, mockType);
      return next();
    })
}

function setMockMiddleware(mockType) {
  return compose()
    .use(function (req, res, next) {
      setMock(req, mockType);
      return next();
    })
}

module.exports = {
  setMockMiddleware,
  setMock
};