"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useInputValAndError = void 0;
var react_1 = require("react");
var react_hook_form_1 = require("react-hook-form");
var index_1 = __importDefault(require("../Logger/index"));
var Form_1 = require("../Form");
var accessObjectByDottedName = function (obj, name) {
    var keys = name.split(".");
    var result = obj;
    for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
        var key = keys_1[_i];
        if (result && typeof result === "object" && key in result) {
            result = result[key];
        }
        else {
            return null; // Property not found
        }
    }
    return result;
};
var useInputValAndError = function (name, directDefaultValue) {
    var debug = (0, react_1.useContext)(Form_1.ThemeContext).debug;
    index_1.default.info(debug, "Name : ".concat(name), "useInputValAndError", "start");
    var _a = (0, react_hook_form_1.useFormContext)(), control = _a.control, methods = __rest(_a, ["control"]);
    var _b = (0, react_hook_form_1.useController)({ name: name, defaultValue: directDefaultValue }), _c = _b.field, onChange = _c.onChange, onBlur = _c.onBlur, value = _c.value, ref = _c.ref, _d = _b.fieldState, invalid = _d.invalid, isTouched = _d.isTouched, /* isValidating, */ error = _d.error;
    index_1.default.info(debug, "Value : ".concat(String(value)), "useInputValAndError");
    // Logger.info(debug, `Errors : ${JSON.stringify(Logger.nullifyCircular(errors ?? {}))}`, "useInputValAndError");
    // const error = useMemo(() => accessObjectByDottedName(errors, name), [accessObjectByDottedName(errors, name)?.message, value]);
    index_1.default.info(debug, null, null, "end");
    return __assign(__assign({ value: value, onChange: onChange, onBlur: onBlur, inputRef: ref }, methods), { error: error, fieldState: {
            invalid: invalid,
            isTouched: isTouched,
            // isValidating,
        } });
};
exports.useInputValAndError = useInputValAndError;
//# sourceMappingURL=useInputValnError.js.map