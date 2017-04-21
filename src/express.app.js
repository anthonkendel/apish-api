"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var json_helper_1 = require("./helpers/json.helper");
var main_route_1 = require("./routes/main.route");
var ExpressApp = (function () {
    function ExpressApp() {
        this.expressApp = express();
    }
    ExpressApp.prototype.start = function (host, port) {
        this.init();
        this.routes();
        this.expressApp.listen(port, host, function () {
            console.log('App listening on ' + host + ':' + port);
        });
    };
    ExpressApp.prototype.init = function () {
        this.expressApp.use('*', function (req, res, next) {
            res.setHeader('Content-Type', 'application/json');
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
            res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
            res.setHeader('charset', 'utf-8');
            req.accepts('application/json');
            next();
        });
    };
    ExpressApp.prototype.routes = function () {
        this.expressApp.use('/api/v1', main_route_1.default.router);
        // Return a message on resources not found
        this.expressApp.use(function (req, res, next) {
            res.send(json_helper_1.toJsonMessage('Could not find the requested resource'));
        });
    };
    return ExpressApp;
}());
exports.ExpressApp = ExpressApp;
