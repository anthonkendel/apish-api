"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var faker = require("faker");
var dateFormat = require("dateformat");
var Date = (function () {
    /**
     * Public
     */
    function Date(type) {
        if (type === void 0) { type = ''; }
        this.date = this.generateDate(type);
    }
    /**
     * Private
     */
    Date.prototype.generateDate = function (type) {
        if (type === void 0) { type = ''; }
        var date = '';
        switch (type) {
            case 'past':
                date = faker.date.past();
                break;
            case 'future':
                date = faker.date.future();
                break;
            case 'recent':
                date = faker.date.recent();
                break;
            default:
                date = faker.date.recent(1);
                break;
        }
        return date;
    };
    Date.prototype.formatDate = function (format) {
        if (format === void 0) { format = ''; }
        return format ? dateFormat(this.date, format) : dateFormat(this.date, 'isoUtcDateTime');
    };
    Date.prototype.toJson = function (format) {
        if (format === void 0) { format = ''; }
        var formattedDate = this.formatDate(format);
        return JSON.stringify({
            date: formattedDate
        });
    };
    return Date;
}());
exports.Date = Date;
