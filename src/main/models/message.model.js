"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Message = (function () {
    /**
     * Public
     */
    function Message(message) {
        this.message = message;
    }
    Message.prototype.toJson = function () {
        return JSON.stringify({
            message: this.message
        });
    };
    return Message;
}());
exports.Message = Message;
