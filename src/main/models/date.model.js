"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var faker = require("faker");
var Date = (function () {
    function Date(type) {
        if (type === void 0) { type = ''; }
        switch (type) {
            case 'past':
                this.date = faker.date.past();
                break;
            case 'future':
                this.date = faker.date.future();
                break;
            case 'recent':
                this.date = faker.date.recent();
                break;
            default:
                this.date = faker.date.recent(1);
                break;
        }
    }
    Date.prototype.toJson = function (format) {
        if (format === void 0) { format = ''; }
        switch (format) {
            default:
                break;
        }
        return JSON.stringify({
            date: this.date
        });
    };
    return Date;
}());
exports.Date = Date;
