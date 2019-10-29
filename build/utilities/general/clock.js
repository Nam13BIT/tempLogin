"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Clock = /** @class */ (function () {
    function Clock() {
    }
    Clock.prototype.tickTock = function () {
        try {
            if (this._timer == null) {
                this._timer = new Date().getTime();
            }
            else {
                throw new Error('Clock has already started');
            }
        }
        catch (error) {
            throw new Error(error.message);
        }
    };
    Clock.prototype.getPassTime = function () {
        try {
            var passTime = new Date().getTime();
            return passTime - this._timer;
        }
        catch (error) {
            throw new Error(error.message);
        }
    };
    Clock.prototype.getPassTimeInSecond = function () {
        try {
            var passTime = new Date().getTime();
            return (passTime - this._timer) / 1000;
        }
        catch (error) {
            throw new Error(error.message);
        }
    };
    Clock.prototype.getTimeLeftInSecond = function (maxTimeoutInSecond) {
        try {
            return maxTimeoutInSecond - this.getPassTimeInSecond();
        }
        catch (error) {
            throw new Error(error.message);
        }
    };
    return Clock;
}());
exports.default = Clock;
