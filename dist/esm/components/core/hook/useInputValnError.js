import { useMemo } from "react";
import { useFormContext } from "react-hook-form";
export const useInputValAndError = (name) => {
    const methods = useFormContext();
    const highjackedSetValue = (_name, value) => {
        //console.log(`[HighJackedSetValue] Called from : ${_name} - `,value)
        methods.setValue(name, value);
    };
    const value = methods.watch(name);
    //console.log('[useInputValAndError] - ',value)
    // console.log(`[useInputValAndError - Value _val for ${name} ] : [Undefined?${_val === undefined?'Y':'N'}] [Null?${_val === null?'Y':'N'}]`,_val)
    // console.log(`[useInputValAndError - getValues in ${name} ] : `,methods.getValues())
    // const value = useMemo(()=> {
    //   if (_val === undefined) {highjackedSetValue(null)}  
    //   return _val === undefined ? null : _val
    // }, [_val])
    const { error: _error } = methods.getFieldState(name, methods.formState);
    const error = useMemo(() => Array.isArray(_error) ? undefined : _error, [_error, value]);
    return Object.assign(Object.assign({ value: value, error }, methods), { setValue: (name, value) => highjackedSetValue(name, value) });
};
//# sourceMappingURL=useInputValnError.js.map