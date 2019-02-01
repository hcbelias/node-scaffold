'use strict';

var app = require('./index');
var HTTP = require('http');

var server = HTTP.createServer(app);


function startServer() {
    var port = 3100;
    var ip = 'localhost';
    server.listen(port, ip, function () {
        console.log('Express server listening on %d', port);
    });
}

setImmediate(startServer);

module.exports = app;