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
    var _a, _b, _c;
    var debug = (0, react_1.useContext)(Form_1.ThemeContext).debug;
    index_1.default.info(debug, "Name : ".concat(name), "useInputValAndError", "start");
    var _d = (0, react_hook_form_1.useFormContext)(), control = _d.control, methods = __rest(_d, ["control"]);
    var _e = (0, react_hook_form_1.useFormState)({
        name: name,
        exact: true,
    }), isLoading = _e.isLoading, errors = _e.errors, isSubmitSuccessful = _e.isSubmitSuccessful, isSubmitted = _e.isSubmitted, isSubmitting = _e.isSubmitting, submitCount = _e.submitCount, defaultValues = _e.defaultValues;
    var defaultValue = (_b = (_a = accessObjectByDottedName(defaultValues !== null && defaultValues !== void 0 ? defaultValues : {}, name)) !== null && _a !== void 0 ? _a : directDefaultValue) !== null && _b !== void 0 ? _b : null;
    index_1.default.info(debug, "isLoading : ".concat(isLoading ? "true" : "false", " | \n  isSubmitted : ").concat(isSubmitting ? "true" : "false", " | \n  isSubmitSuccessful : ").concat(isSubmitSuccessful ? "true" : "false", " |\n  isSubmitted : ").concat(isSubmitted ? "true" : "false", " |\n  submitCount : ").concat(submitCount, " |\n  errors : ").concat(JSON.stringify(errors), " |\n  defaultValues : ").concat(JSON.stringify(defaultValues), " |\n  Value for this field : ").concat(typeof defaultValue === 'object' ? JSON.stringify(defaultValue) : defaultValue === null ? 'null' : defaultValue, "}\n  "), "useInputValAndError");
    var value = (0, react_hook_form_1.useWatch)({
        name: name,
        defaultValue: defaultValue,
    });
    index_1.default.info(debug, "Value : ".concat(String(value)), "useInputValAndError");
    index_1.default.info(debug, "Errors : ".concat(JSON.stringify(index_1.default.nullifyCircular(errors !== null && errors !== void 0 ? errors : {}))), "useInputValAndError");
    var error = (0, react_1.useMemo)(function () { return accessObjectByDottedName(errors, name); }, [(_c = accessObjectByDottedName(errors, name)) === null || _c === void 0 ? void 0 : _c.message, value]);
    index_1.default.info(debug, null, null, "end");
    return __assign(__assign({ value: value }, methods), { error: error, formState: {
            isLoading: isLoading,
            isSubmitSuccessful: isSubmitSuccessful,
            isSubmitted: isSubmitted,
            isSubmitting: isSubmitting,
            submitCount: submitCount,
        } });
};
exports.useInputValAndError = useInputValAndError;
//# sourceMappingURL=useInputValnError.js.map