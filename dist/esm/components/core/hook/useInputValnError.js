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
    var _a, _b;
    var debug = useContext(ThemeContext).debug;
    Logger.info(debug, "Name : ".concat(name), "useInputValAndError", "start");
    var _c = useFormContext(), control = _c.control, methods = __rest(_c, ["control"]);
    var _d = useFormState({
    // name: name,
    }), isLoading = _d.isLoading, errors = _d.errors, isSubmitSuccessful = _d.isSubmitSuccessful, isSubmitted = _d.isSubmitted, isSubmitting = _d.isSubmitting, submitCount = _d.submitCount, defaultValues = _d.defaultValues;
    var value = useWatch({
        name: name,
        defaultValue: (_a = accessObjectByDottedName(defaultValues !== null && defaultValues !== void 0 ? defaultValues : {}, name)) !== null && _a !== void 0 ? _a : (directDefaultValue !== null && directDefaultValue !== void 0 ? directDefaultValue : null),
        // defaultValue: defaultValues && name in defaultValues ? defaultValues?.[name] : directDefaultValue ?? null
    }); /* ?? null */
    Logger.info(debug, "Value : ".concat(String(value)), "useInputValAndError");
    Logger.info(debug, "Errors : ".concat(JSON.stringify(Logger.nullifyCircular(errors !== null && errors !== void 0 ? errors : {}))), "useInputValAndError");
    // const _methods = useMemo(() => methods, []);
    var error = useMemo(function () { return accessObjectByDottedName(errors, name); }, [(_b = accessObjectByDottedName(errors, name)) === null || _b === void 0 ? void 0 : _b.message, value]);
    // const isDirty = useMemo(()=> dirtyFields[name] ?? null, [dirtyFields?.[name]])
    // Logger.info(`Error : ${error?.message}`, "useInputValAndError");
    Logger.info(debug, null, null, "end");
    return __assign(__assign({ value: value }, methods), { error: error, formState: {
            isLoading: isLoading,
            // isValid,
            // disabled,
            isSubmitSuccessful: isSubmitSuccessful,
            isSubmitted: isSubmitted,
            isSubmitting: isSubmitting,
            // isValidating,
            submitCount: submitCount,
        } });
};
//# sourceMappingURL=useInputValnError.js.map