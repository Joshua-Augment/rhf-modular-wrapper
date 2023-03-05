import React, { useState } from "react";
import { useFormContext, Controller } from "react-hook-form";
import InputElemWrapper from "./InputElemWrapper";
const InputWrapper = (props) => {
    const [_value, _setValue] = useState(null);
    const methods = props.contextless === true ? { control: undefined } : useFormContext();
    return (props.contextless ?
        // Since this does not live in a form there is no form context, as such just store the state in the wrapper itself
        // to maintain the input as a controlled input
        React.createElement(InputElemWrapper, Object.assign({}, props, { value: _value, onChange: _setValue }), props.children &&
            props.children(Object.assign(Object.assign({}, props), { value: _value, onChange: _setValue, onBlur: () => false, isTouched: _value !== null, isDirty: _value !== null, error: undefined, disabled: props.disabled, ref: undefined }))) :
        // Control is handled by the Controller Element instead
        React.createElement(Controller, { control: methods.control, name: props.name, render: ({ field: { onChange, onBlur, value, name, ref }, fieldState: { invalid, isTouched, isDirty, error }, formState, }) => (React.createElement(InputElemWrapper, Object.assign({}, props, { value: value, onChange: onChange, errors: error }), props.children &&
                props.children(Object.assign(Object.assign({}, props), { value,
                    onChange,
                    onBlur,
                    isTouched,
                    isDirty,
                    error, disabled: props.disabled, ref })))) }));
};
export default InputWrapper;
//# sourceMappingURL=InputWrapper.js.map