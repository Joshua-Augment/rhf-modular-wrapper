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
import { useContext, useMemo } from "react";
import { useFormContext, useFormState, useWatch } from "react-hook-form";
import Logger from "../Logger/index";
import { ThemeContext } from "../Form";
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
export var useInputValAndError = function (name, directDefaultValue) {
    var _a, _b, _c;
    var debug = useContext(ThemeContext).debug;
    Logger.info(debug, "Name : ".concat(name), "useInputValAndError", "start");
    var _d = useFormContext(), control = _d.control, methods = __rest(_d, ["control"]);
    var _e = useFormState({
        name: name,
        exact: true,
    }), isLoading = _e.isLoading, errors = _e.errors, isSubmitSuccessful = _e.isSubmitSuccessful, isSubmitted = _e.isSubmitted, isSubmitting = _e.isSubmitting, submitCount = _e.submitCount, defaultValues = _e.defaultValues;
    var defaultValue = (_b = (_a = accessObjectByDottedName(defaultValues !== null && defaultValues !== void 0 ? defaultValues : {}, name)) !== null && _a !== void 0 ? _a : directDefaultValue) !== null && _b !== void 0 ? _b : null;
    // Logger.info(
    //   debug,
    //   `isLoading : ${isLoading ? "true" : "false"} | 
    // isSubmitted : ${isSubmitting ? "true" : "false"} | 
    // isSubmitSuccessful : ${isSubmitSuccessful ? "true" : "false"} |
    // isSubmitted : ${isSubmitted ? "true" : "false"} |
    // submitCount : ${submitCount} |
    // errors : ${JSON.stringify(errors)} |
    // defaultValues : ${JSON.stringify(defaultValues)} |
    // Value for this field : ${typeof defaultValue === 'object'? JSON.stringify(defaultValue) : defaultValue === null ? 'null' : defaultValue}}
    // `,
    //   "useInputValAndError"
    // );
    var value = useWatch({
        name: name,
        defaultValue: defaultValue,
    });
    Logger.info(debug, "Value : ".concat(String(value)), "useInputValAndError");
    // Logger.info(debug, `Errors : ${JSON.stringify(Logger.nullifyCircular(errors ?? {}))}`, "useInputValAndError");
    var error = useMemo(function () { return accessObjectByDottedName(errors, name); }, [(_c = accessObjectByDottedName(errors, name)) === null || _c === void 0 ? void 0 : _c.message, value]);
    Logger.info(debug, null, null, "end");
    return __assign(__assign({ value: value }, methods), { error: error, formState: {
            isLoading: isLoading,
            isSubmitSuccessful: isSubmitSuccessful,
            isSubmitted: isSubmitted,
            isSubmitting: isSubmitting,
            submitCount: submitCount,
        } });
};
//# sourceMappingURL=useInputValnError.js.map