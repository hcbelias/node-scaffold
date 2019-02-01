'use strict';

var compose = require('composable-middleware');
var CommerceSDK = require('./../commerce-rest');

var nconf = require('nconf');
var applicationToken = nconf.get('occserver.application.token') || process.env.OCC_APP_TOKEN || '';
var storeUrl = nconf.get('occserver.url') || process.env.OCC_URL || '';



var sdkInstance = new CommerceSDK({
    hostname: storeUrl,
    apiKey: applicationToken
});

var sdkConnection = sdkInstance.init('/ccadmin')
    .then(function (res) {
        console.log('OCC SDK Logged In');
        return Promise.resolve(res);
    })
    .catch(function (err) {
        console.log('OCC SDK Logged In Error ' + JSON.stringify(err));
        return Promise.reject(res);
    })

function isSDKAuthenticated() {
    return compose()
        .use(function (req, res, next) {
            return Promise.all([sdkConnection]).then(data => {
                debugger;
                req.sdkInstance = sdkInstance;
                return next();
            }).
            catch(err => {
                return next(err);
            });

        });
}



module.exports = {
    isSDKAuthenticated
}