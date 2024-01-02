"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useInputValAndError = void 0;
const react_1 = require("react");
const react_hook_form_1 = require("react-hook-form");
const useInputValAndError = (name) => {
    const methods = (0, react_hook_form_1.useFormContext)();
    const highjackedSetValue = (value) => {
        console.log(`[HighJackedSetValue] ${name} - `, value);
        methods.setValue(name, value);
    };
    const _val = methods.watch(name);
    // console.log(`[useInputValAndError - Value _val for ${name} ] : [Undefined?${_val === undefined?'Y':'N'}] [Null?${_val === null?'Y':'N'}]`,_val)
    // console.log(`[useInputValAndError - getValues in ${name} ] : `,methods.getValues())
    // const value = useMemo(()=> {
    //   if (_val === undefined) {highjackedSetValue(null)}  
    //   return _val === undefined ? null : _val
    // }, [_val])
    const { error: _error } = methods.getFieldState(name, methods.formState);
    const error = (0, react_1.useMemo)(() => Array.isArray(_error) ? undefined : _error, [_error, _val]);
    return Object.assign(Object.assign({ value: _val, error }, methods), { setValue: (name, value) => highjackedSetValue(value) });
};
exports.useInputValAndError = useInputValAndError;
//# sourceMappingURL=useInputValnError.js.map