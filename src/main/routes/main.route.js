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
        this.routes();
    }
    MainRouter.prototype.routes = function () {
        this.router.use('/dates', date_route_1.DateRouter.getInstance().router);
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
