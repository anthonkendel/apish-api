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
        this.routes();
    }
    DateRouter.prototype.routes = function () {
        this.router.get('/', function (req, res, next) {
            var type = req.query.type;
            res.status(200).send(new date_model_1.Date(type).toJson());
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
