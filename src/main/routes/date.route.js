"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var date_model_1 = require("../models/date.model");
var DateRouter = (function () {
    /**
     * Private
     */
    function DateRouter() {
        if (DateRouter._instance) {
            throw new Error('The Logger is a singleton class and cannot be created!');
        }
        this.router = express.Router();
        this.setHeaders();
        this.serveRoutes();
    }
    DateRouter.prototype.serveRoutes = function () {
        this.router.get('/', function (req, res, next) {
            var type = req.query.type;
            var format = req.query.format;
            res.status(200).send(new date_model_1.Date(type).toJson(format));
        });
    };
    DateRouter.prototype.setHeaders = function () {
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
    DateRouter.getInstance = function () {
        return DateRouter._instance;
    };
    return DateRouter;
}());
/**
 * Variables
 */
DateRouter._instance = new DateRouter();
exports.DateRouter = DateRouter;
