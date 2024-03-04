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
    var _a, _b;
    Logger.info(`Name : ${name}`, "useInputValAndError", "start");
    const methods = useFormContext();
    const value = (_a = useWatch({ name: name, defaultValue: null })) !== null && _a !== void 0 ? _a : null;
    Logger.info(`Value : ${String(value)}`, "useInputValAndError");
    const _methods = useMemo(() => methods, []);
    // const value = useMemo(()=> {
    //   if (_val === undefined) {highjackedSetValue(null)}  
    //   return _val === undefined ? null : _val
    // }, [_val])
    const _c = useFormState(), { errors } = _c, allFormStates = __rest(_c, ["errors"]);
    const error = useMemo(() => { var _a; return (_a = errors[name]) !== null && _a !== void 0 ? _a : null; }, [(_b = errors === null || errors === void 0 ? void 0 : errors[name]) === null || _b === void 0 ? void 0 : _b.message, value]);
    console.log(errors);
    Logger.info(`Error : ${error === null || error === void 0 ? void 0 : error.message}`, "useInputValAndError");
    Logger.info(null, null, 'end');
    return Object.assign(Object.assign({ value: value, error }, _methods), { formState: Object.assign({ errors }, allFormStates) });
};
//# sourceMappingURL=useInputValnError.js.map