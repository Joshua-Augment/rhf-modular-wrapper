"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useInputValAndError = void 0;
const react_1 = require("react");
const react_hook_form_1 = require("react-hook-form");
const useInputValAndError = (name) => {
    const methods = (0, react_hook_form_1.useFormContext)();
    const _val = methods.watch(name);
    const value = (0, react_1.useMemo)(() => {
        if (_val === undefined) {
            methods.setValue(name, null);
        }
        return _val === undefined ? null : _val;
    }, [_val]);
    const { error: _error } = methods.getFieldState(name, methods.formState);
    const error = (0, react_1.useMemo)(() => Array.isArray(_error) ? undefined : _error, [_error, value]);
    // const error = useMemo(() => _error, [_error, _val])
    // // console.group(`useInputValError (${name})`)
    // // console.log(`value : `,value)
    // // console.log(`error : `,error)
    // // console.groupEnd()
    return Object.assign({ value, error }, methods);
};
exports.useInputValAndError = useInputValAndError;
//# sourceMappingURL=useInputValnError.js.map