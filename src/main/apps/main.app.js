"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_app_1 = require("./express.app");
var app = new express_app_1.ExpressApp();
app.start();
exports.default = app;