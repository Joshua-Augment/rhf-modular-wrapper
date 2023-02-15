import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import InputElemWrapper from "./InputElemWrapper";
const InputWrapper = (props) => {
    const methods = useFormContext();
    return (React.createElement(Controller, { control: methods.control, name: props.name, render: ({ field: { onChange, onBlur, value, name, ref }, fieldState: { invalid, isTouched, isDirty, error }, formState, }) => (React.createElement(InputElemWrapper, { reversedLabel: props.reversedLabel, name: props.name, errors: error, label: props.label, helperText: props.helperText, noBorder: props.noBorder, noLabel: props.noLabel, customClasses: props.customClasses }, props.children &&
            props.children(Object.assign(Object.assign({}, props), { value,
                onChange,
                onBlur,
                isTouched,
                isDirty,
                error,
                ref })))) }));
};
export default InputWrapper;
//# sourceMappingURL=InputWrapper.js.map