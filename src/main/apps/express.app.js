"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var message_model_1 = require("../models/message.model");
var main_route_1 = require("../routes/main.route");
var ExpressApp = (function () {
    /**
     * Public
     */
    function ExpressApp() {
        this.BASE_PATH = '/api';
        this.VERSION_PATH = '/v1';
        this.expressApp = express();
        this.expressApp.set('port', (process.env.PORT || 3000));
        this.serveStaticSite();
        this.setHeaders();
        this.serveRoutes();
        this.serveRoutesNotAvailable();
    }
    /**
     * Private
     */
    ExpressApp.prototype.serveRoutes = function () {
        this.expressApp.use(this.BASE_PATH + this.VERSION_PATH, main_route_1.MainRouter.getInstance().router);
    };
    ExpressApp.prototype.serveRoutesNotAvailable = function () {
        // Return a message on resources not found
        this.expressApp.use(this.BASE_PATH, function (req, res) {
            res.send(new message_model_1.Message('Could not find the requested resource').toJson());
        });
        // Return a message on resources not found
        this.expressApp.use(this.BASE_PATH + this.VERSION_PATH, function (req, res) {
            res.send(new message_model_1.Message('Could not find the requested resource').toJson());
        });
    };
    ExpressApp.prototype.serveStaticSite = function () {
        this.expressApp.use('/', express.static('public'));
    };
    ExpressApp.prototype.setHeaders = function () {
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
    ExpressApp.prototype.start = function () {
        var _this = this;
        this.expressApp.listen(this.expressApp.get('port'), function () {
            console.log('App listening on port:' + _this.expressApp.get('port'));
        });
    };
    return ExpressApp;
}());
exports.ExpressApp = ExpressApp;
