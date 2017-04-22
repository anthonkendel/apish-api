"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var date_route_1 = require("./date.route");
var MainRouter = (function () {
    function MainRouter() {
        this.router = express.Router();
        this.routes();
    }
    MainRouter.prototype.routes = function () {
        this.router.use('/dates', date_route_1.default.router);
    };
    return MainRouter;
}());
var main = new MainRouter();
exports.default = main;
