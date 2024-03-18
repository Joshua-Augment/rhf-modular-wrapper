"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var COLOURS = {
    trace: '#aaa',
    info: 'blue',
    warn: 'pink',
    error: 'red'
};
var Log = /** @class */ (function () {
    function Log() {
        this.debug = true;
    }
    Log.prototype.generateMessage = function (level, message, source, group) {
        if (!this.debug) {
            return;
        }
        var textColor = COLOURS[level];
        if (!group) {
            if (typeof message === "object") {
                var _message = '';
                try {
                    _message = JSON.parse(JSON.stringify(message));
                }
                catch (err) {
                    _message = 'Cyclic Object';
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
    Log.prototype.trace = function (message, source, group) {
        return this.generateMessage('trace', message, source, group);
    };
    Log.prototype.info = function (message, source, group) {
        return this.generateMessage('info', message, source, group);
    };
    Log.prototype.warn = function (message, source, group) {
        return this.generateMessage('warn', message, source, group);
    };
    Log.prototype.error = function (message, source, group) {
        return this.generateMessage('error', message, source, group);
    };
    return Log;
}());
exports.default = new Log();
//# sourceMappingURL=index.js.map