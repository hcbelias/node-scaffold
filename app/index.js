'use strict';

var winston = require('winston');
var express = require('express');
var bodyParser = require('body-parser');
var app = new express();

var logger = new(winston.Logger)({
    levels: {
        error: 0,
        warning: 1,
        info: 2,
        debug: 3
    },
    transports: [
        new(winston.transports.Console)({
            level: 'debug',
            colorize: true
        })
    ]
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(function (req, res, next) {

    if (!res.locals) {
        res.locals = {};
    }
    //http://expressjs.com/en/api.html#res.locals  
    //use res.locals to pass object between main and sub apps  
    res.locals.logger = logger;
    next();
});

require('./routes')(app);

exports = module.exports = app;