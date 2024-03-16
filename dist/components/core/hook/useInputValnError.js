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
import Logger from "../Logger";
export const useInputValAndError = (name) => {
    var _a;
    Logger.info(`Name : ${name}`, "useInputValAndError", "start");
    const _b = useFormContext(), { control } = _b, methods = __rest(_b, ["control"]);
    Logger.info(`All Values : `, JSON.stringify(methods.getValues()));
    const value = useWatch({ name: name, defaultValue: null }); /* ?? null */
    Logger.info(`Value : ${String(value)}`, "useInputValAndError");
    // const _methods = useMemo(() => methods, []);
    const { errors, isLoading, isValid, disabled, isSubmitSuccessful, isSubmitted, isSubmitting, isValidating, submitCount } = useFormState();
    const error = useMemo(() => { var _a; return (_a = errors[name]) !== null && _a !== void 0 ? _a : null; }, [(_a = errors === null || errors === void 0 ? void 0 : errors[name]) === null || _a === void 0 ? void 0 : _a.message, value]);
    // const isDirty = useMemo(()=> dirtyFields[name] ?? null, [dirtyFields?.[name]])
    Logger.info(`Error : ${error === null || error === void 0 ? void 0 : error.message}`, "useInputValAndError");
    Logger.info(null, null, "end");
    return Object.assign(Object.assign({ value: value, error }, methods), { formState: {
            isLoading,
            isValid,
            disabled,
            isSubmitSuccessful,
            isSubmitted,
            isSubmitting,
            isValidating,
            submitCount,
        } });
};
//# sourceMappingURL=useInputValnError.js.map