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
import { useMemo } from "react";
import { useFormContext, useFormState, useWatch } from "react-hook-form";
import Logger from "../Logger/index";
export var useInputValAndError = function (name, directDefaultValue) {
    var _a;
    Logger.info("Name : ".concat(name), "useInputValAndError", "start");
    var _b = useFormContext(), control = _b.control, methods = __rest(_b, ["control"]);
    Logger.info("All Values : ".concat(JSON.stringify(methods.getValues())), "useInputValAndError");
    var _c = useFormState(), errors = _c.errors, isLoading = _c.isLoading, isValid = _c.isValid, disabled = _c.disabled, isSubmitSuccessful = _c.isSubmitSuccessful, isSubmitted = _c.isSubmitted, isSubmitting = _c.isSubmitting, isValidating = _c.isValidating, submitCount = _c.submitCount, defaultValues = _c.defaultValues;
    var value = useWatch({
        name: name,
        defaultValue: defaultValues && name in defaultValues ? defaultValues === null || defaultValues === void 0 ? void 0 : defaultValues[name] : directDefaultValue !== null && directDefaultValue !== void 0 ? directDefaultValue : null
    }); /* ?? null */
    Logger.info("Value : ".concat(String(value)), "useInputValAndError");
    // const _methods = useMemo(() => methods, []);
    var error = useMemo(function () { var _a; return (_a = errors[name]) !== null && _a !== void 0 ? _a : null; }, [(_a = errors === null || errors === void 0 ? void 0 : errors[name]) === null || _a === void 0 ? void 0 : _a.message, value]);
    // const isDirty = useMemo(()=> dirtyFields[name] ?? null, [dirtyFields?.[name]])
    Logger.info("Error : ".concat(error === null || error === void 0 ? void 0 : error.message), "useInputValAndError");
    Logger.info(null, null, "end");
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
//# sourceMappingURL=useInputValnError.js.map