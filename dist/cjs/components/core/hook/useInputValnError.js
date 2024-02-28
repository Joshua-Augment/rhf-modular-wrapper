"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useInputValAndError = void 0;
const react_1 = require("react");
const react_hook_form_1 = require("react-hook-form");
const Logger_1 = __importDefault(require("../Logger"));
const useInputValAndError = (name) => {
    Logger_1.default.info(`Name : ${name}`, "useInputValAndError", "start");
    const methods = (0, react_hook_form_1.useFormContext)();
    const highjackedSetValue = (_name, value) => {
        methods.setValue(_name, value);
    };
    const value = methods.watch(name);
    Logger_1.default.info(`Value : ${String(value)}`, "useInputValAndError");
    //console.log('[useInputValAndError] - ',value)
    // console.log(`[useInputValAndError - Value _val for ${name} ] : [Undefined?${_val === undefined?'Y':'N'}] [Null?${_val === null?'Y':'N'}]`,_val)
    // console.log(`[useInputValAndError - getValues in ${name} ] : `,methods.getValues())
    // const value = useMemo(()=> {
    //   if (_val === undefined) {highjackedSetValue(null)}  
    //   return _val === undefined ? null : _val
    // }, [_val])
    const { error: _error } = methods.getFieldState(name, methods.formState);
    const error = (0, react_1.useMemo)(() => Array.isArray(_error) ? undefined : _error, [_error, value]);
    Logger_1.default.info(`Error : ${error === null || error === void 0 ? void 0 : error.message}`, "useInputValAndError");
    Logger_1.default.info(null, null, 'end');
    return Object.assign(Object.assign({ value: value, error }, methods), { setValue: (name, value) => highjackedSetValue(name, value) });
};
exports.useInputValAndError = useInputValAndError;
//# sourceMappingURL=useInputValnError.js.map