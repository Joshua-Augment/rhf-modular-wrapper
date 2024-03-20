"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var COLOURS = {
    trace: "#aaa",
    info: "blue",
    warn: "pink",
    error: "red",
};
var Log = /** @class */ (function () {
    function Log() {
        this.debug = false;
    }
    Log.prototype.generateMessage = function (level, message, source, group) {
        if (!this.debug) {
            return;
        }
        var textColor = COLOURS[level];
        if (!group) {
            if (typeof message === "object") {
                var _message = "";
                try {
                    _message = JSON.parse(JSON.stringify(message));
                }
                catch (err) {
                    _message = "Cyclic Object";
                }
                console.log("%c" + source + "  ||  %c" + _message, "color:#000;", "color:" + textColor + ";");
            }
            else {
                console.log("%c" + source + "  ||  %c" + message, "color:#000;", "color:" + textColor + ";");
            }
        }
        else if (group === "start") {
            console.group("%c" + source + "  ||  %c" + message, "color:#000;", "color:" + textColor + ";");
        }
        else if (group === "end") {
            console.groupEnd();
        }
    };
    Log.prototype.trace = function (debug, message, source, group) {
        this.debug = debug;
        return this.generateMessage("trace", message, source, group);
    };
    Log.prototype.info = function (debug, message, source, group) {
        this.debug = debug;
        return this.generateMessage("info", message, source, group);
    };
    Log.prototype.warn = function (debug, message, source, group) {
        this.debug = debug;
        return this.generateMessage("warn", message, source, group);
    };
    Log.prototype.error = function (debug, message, source, group) {
        this.debug = debug;
        return this.generateMessage("error", message, source, group);
    };
    Log.prototype.nullifyCircular = function (obj) {
        var _this = this;
        // Base case: if obj is not an object, return it as it is
        if (typeof obj !== "object" || obj === null) {
            return obj;
        }
        // If obj is an HTMLInputElement, nullify it
        if (obj instanceof HTMLInputElement) {
            return null;
        }
        // Recursively process arrays
        if (Array.isArray(obj)) {
            return obj.map(function (item) { return _this.nullifyCircular(item); });
        }
        // Recursively process objects
        var newObj = {};
        for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                newObj[key] = this.nullifyCircular(obj[key]);
            }
        }
        return newObj;
    };
    return Log;
}());
exports.default = new Log();
//# sourceMappingURL=index.js.map