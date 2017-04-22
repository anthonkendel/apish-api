"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var date_model_1 = require("../models/date.model");
var DateRouter = (function () {
    function DateRouter() {
        this.router = express.Router();
        this.routes();
    }
    DateRouter.prototype.routes = function () {
        this.router.get('/', function (req, res, next) {
            var type = req.query.type;
            res.status(200).send(new date_model_1.Date(type).toJson());
        });
    };
    return DateRouter;
}());
var date = new DateRouter();
exports.default = date;
