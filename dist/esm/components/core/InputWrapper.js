import React, { useEffect, useMemo, useState } from "react";
import { useFormContext } from "react-hook-form";
import InputElemWrapper from "./InputElemWrapper";
const InputWrapper = (props) => {
    const [value, setValue] = useState(undefined);
    const { getValues, watch, setValue: contextSetValue } = useFormContext();
    const watchValue = watch(props.name);
    useEffect(() => setValue(watchValue), [typeof watchValue === 'object' ? JSON.stringify(watchValue) : watchValue]);
    // Set Value First if Available
    useEffect(() => { if (props.defaultValue) {
        contextSetValue(props.name, props.defaultValue);
    } }, [props.defaultValue]);
    useEffect(() => {
        // External Field
        if (props.externalStateSetter) {
            props.externalStateSetter(watchValue !== null && watchValue !== void 0 ? watchValue : value);
        }
        // Calculated Fields
        if (props.calculatedField) {
            contextSetValue(props.name, props.calculatedField.calculate(value, getValues(props.calculatedField.find), getValues()));
        }
    }, [value]);
    // const [_value, _setValue] = useState(null)
    // const methods = props.contextless === true ? {control:undefined, watch : (a:string) => null } : useFormContext();
    const child = useMemo(() => {
        return React.createElement(InputElemWrapper, Object.assign({}, props, { value: value }), props.children);
    }, [value, props === null || props === void 0 ? void 0 : props.options]);
    return child;
    // return (
    //   props.contextless ?
    //   // Since this does not live in a form there is no form context, as such just store the state in the wrapper itself
    //   // to maintain the input as a controlled input
    //   <InputElemWrapper
    //     {...props}
    //     value={_value}
    //     onChange={_setValue}
    // >
    //   {child &&
    //     child({
    //       ...props,
    //       value : _value,
    //       onChange : _setValue,
    //       onBlur : ()=>false,
    //       isTouched: _value !== null,
    //       isDirty: _value !== null,
    //       error : undefined,
    //       disabled : props.disabled,
    //       ref : undefined,
    //     })}
    // </InputElemWrapper> : 
    // // Control is handled by the Controller Element instead
    //   <Controller
    //     control={methods.control}
    //     name={props.name}
    //     render={({
    //       field: { onChange, onBlur, value, name, ref },
    //       fieldState: { invalid, isTouched, isDirty, error },
    //       formState,
    //     }) => (
    //       <InputElemWrapper
    //         {...props}
    //         value={value === undefined ? props.defaultValue : value}
    //         onChange={onChange}
    //         errors={error}
    //       >
    //         {child &&
    //           child({
    //             ...props,
    //             value,
    //             onChange,
    //             onBlur,
    //             isTouched,
    //             isDirty,
    //             error,
    //             disabled : props.disabled,
    //             ref,
    //           })}
    //       </InputElemWrapper>
    //     )}
    //   />
    // );
};
export default InputWrapper;
//# sourceMappingURL=InputWrapper.js.map