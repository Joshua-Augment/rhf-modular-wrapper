import React, { useMemo, useState } from "react";
import { useFormContext, Controller } from "react-hook-form";
import InputElemWrapper from "./InputElemWrapper";
const InputWrapper = (props) => {
    let x = 0;
    const [_value, _setValue] = useState(null);
    const methods = props.contextless === true ? { control: undefined, watch: (a) => null } : useFormContext();
    const child = useMemo(() => { console.log(`Rerendering ${props.name}....X:${x}, value : ${methods.watch(props.name)}`); x++; return props.children; }, [_value, methods.watch(props.name), props.children]);
    return (props.contextless ?
        // Since this does not live in a form there is no form context, as such just store the state in the wrapper itself
        // to maintain the input as a controlled input
        React.createElement(InputElemWrapper, Object.assign({}, props, { value: _value, onChange: _setValue }), child &&
            child(Object.assign(Object.assign({}, props), { value: _value, onChange: _setValue, onBlur: () => false, isTouched: _value !== null, isDirty: _value !== null, error: undefined, disabled: props.disabled, ref: undefined }))) :
        // Control is handled by the Controller Element instead
        React.createElement(Controller, { control: methods.control, name: props.name, render: ({ field: { onChange, onBlur, value, name, ref }, fieldState: { invalid, isTouched, isDirty, error }, formState, }) => (React.createElement(InputElemWrapper, Object.assign({}, props, { value: value === undefined ? props.defaultValue : value, onChange: onChange, errors: error }), child &&
                child(Object.assign(Object.assign({}, props), { value,
                    onChange,
                    onBlur,
                    isTouched,
                    isDirty,
                    error, disabled: props.disabled, ref })))) }));
};
export default InputWrapper;
//# sourceMappingURL=InputWrapper.js.map