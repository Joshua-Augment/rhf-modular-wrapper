"use strict";
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
const react_1 = require("react");
const react_hook_form_1 = require("react-hook-form");
const Logger_1 = __importDefault(require("../Logger"));
const useInputValAndError = (name) => {
    var _a, _b;
    Logger_1.default.info(`Name : ${name}`, "useInputValAndError", "start");
    const methods = (0, react_hook_form_1.useFormContext)();
    const value = (_a = (0, react_hook_form_1.useWatch)({ name: name, defaultValue: null })) !== null && _a !== void 0 ? _a : null;
    Logger_1.default.info(`Value : ${String(value)}`, "useInputValAndError");
    const _methods = (0, react_1.useMemo)(() => methods, []);
    // const value = useMemo(()=> {
    //   if (_val === undefined) {highjackedSetValue(null)}  
    //   return _val === undefined ? null : _val
    // }, [_val])
    const _c = (0, react_hook_form_1.useFormState)(), { errors } = _c, allFormStates = __rest(_c, ["errors"]);
    const error = (0, react_1.useMemo)(() => { var _a; return (_a = errors[name]) !== null && _a !== void 0 ? _a : null; }, [(_b = errors === null || errors === void 0 ? void 0 : errors[name]) === null || _b === void 0 ? void 0 : _b.message, value]);
    console.log(errors);
    Logger_1.default.info(`Error : ${error === null || error === void 0 ? void 0 : error.message}`, "useInputValAndError");
    Logger_1.default.info(null, null, 'end');
    return Object.assign(Object.assign({ value: value, error }, _methods), { formState: Object.assign({ errors }, allFormStates) });
};
exports.useInputValAndError = useInputValAndError;
//# sourceMappingURL=useInputValnError.js.map