"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var date_route_1 = require("./date.route");
var MainRouter = (function () {
    /**
     * Private
     */
    function MainRouter() {
        if (MainRouter._instance) {
            throw new Error('The Logger is a singleton class and cannot be created!');
        }
        this.router = express.Router();
        this.setHeaders();
        this.serveRoutes();
    }
    MainRouter.prototype.serveRoutes = function () {
        this.router.use('/dates', date_route_1.DateRouter.getInstance().router);
    };
    MainRouter.prototype.setHeaders = function () {
        this.router.use('*', function (req, res, next) {
            res.setHeader('Content-Type', 'application/json');
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
            res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
            res.setHeader('charset', 'utf-8');
            req.accepts('application/json');
            next();
        });
    };
    /**
     * Public
     */
    MainRouter.getInstance = function () {
        return MainRouter._instance;
    };
    return MainRouter;
}());
/**
 * Variables
 */
MainRouter._instance = new MainRouter();
exports.MainRouter = MainRouter;
