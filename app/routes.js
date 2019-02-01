'use strict';

var versionPrefix = '/v1/api';

module.exports = function (app) {
   app.use(versionPrefix + `/payments`, require('./api/payment'));
   app.use(versionPrefix + `/customs`, require('./api/custom'));
};