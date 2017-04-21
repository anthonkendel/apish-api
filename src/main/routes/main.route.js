"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var Main = (function () {
    function Main() {
        this.router = express.Router();
        this.init();
    }
    Main.prototype.init = function () {
    };
    return Main;
}());
var main = new Main();
exports.default = main;
