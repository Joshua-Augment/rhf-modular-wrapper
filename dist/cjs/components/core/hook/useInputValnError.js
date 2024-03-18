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
var Logger_1 = __importDefault(require("../Logger"));
var useInputValAndError = function (name) {
    var _a;
    Logger_1.default.info("Name : ".concat(name), "useInputValAndError", "start");
    var _b = (0, react_hook_form_1.useFormContext)(), control = _b.control, methods = __rest(_b, ["control"]);
    Logger_1.default.info("All Values : ", JSON.stringify(methods.getValues()));
    var value = (0, react_hook_form_1.useWatch)({ name: name, defaultValue: null }); /* ?? null */
    Logger_1.default.info("Value : ".concat(String(value)), "useInputValAndError");
    // const _methods = useMemo(() => methods, []);
    var _c = (0, react_hook_form_1.useFormState)(), errors = _c.errors, isLoading = _c.isLoading, isValid = _c.isValid, disabled = _c.disabled, isSubmitSuccessful = _c.isSubmitSuccessful, isSubmitted = _c.isSubmitted, isSubmitting = _c.isSubmitting, isValidating = _c.isValidating, submitCount = _c.submitCount;
    var error = (0, react_1.useMemo)(function () { var _a; return (_a = errors[name]) !== null && _a !== void 0 ? _a : null; }, [(_a = errors === null || errors === void 0 ? void 0 : errors[name]) === null || _a === void 0 ? void 0 : _a.message, value]);
    // const isDirty = useMemo(()=> dirtyFields[name] ?? null, [dirtyFields?.[name]])
    Logger_1.default.info("Error : ".concat(error === null || error === void 0 ? void 0 : error.message), "useInputValAndError");
    Logger_1.default.info(null, null, "end");
    return __assign(__assign({ value: value, error: error }, methods), { formState: {
            isLoading: isLoading,
            isValid: isValid,
            disabled: disabled,
            isSubmitSuccessful: isSubmitSuccessful,
            isSubmitted: isSubmitted,
            isSubmitting: isSubmitting,
            isValidating: isValidating,
            submitCount: submitCount,
        } });
};
exports.useInputValAndError = useInputValAndError;
//# sourceMappingURL=useInputValnError.js.map