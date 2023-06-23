import { useMemo } from "react";
import { useFormContext } from "react-hook-form";
export const useInputValAndError = (name) => {
    const methods = useFormContext();
    const _val = methods.watch(name);
    const value = useMemo(() => {
        if (_val === undefined) {
            methods.setValue(name, null);
        }
        return _val === undefined ? null : _val;
    }, [_val]);
    const { error: _error } = methods.getFieldState(name, methods.formState);
    const error = useMemo(() => Array.isArray(_error) ? undefined : _error, [_error, value]);
    // const error = useMemo(() => _error, [_error, _val])
    // // console.group(`useInputValError (${name})`)
    // // console.log(`value : `,value)
    // // console.log(`error : `,error)
    // // console.groupEnd()
    return Object.assign({ value, error }, methods);
};
//# sourceMappingURL=useInputValnError.js.map