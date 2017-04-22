"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var message_model_1 = require("../models/message.model");
var main_route_1 = require("../routes/main.route");
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
        var basePath = '/api/v1';
        this.expressApp.use(basePath, main_route_1.default.router);
        // Return a message on resources not found
        this.expressApp.get(basePath, function (req, res, next) {
            res.send(new message_model_1.Message('Could not find the requested resource').toJson());
        });
        this.expressApp.post(basePath, function (req, res, next) {
            res.send(new message_model_1.Message('Could not find the requested resource').toJson());
        });
    };
    return ExpressApp;
}());
exports.ExpressApp = ExpressApp;
