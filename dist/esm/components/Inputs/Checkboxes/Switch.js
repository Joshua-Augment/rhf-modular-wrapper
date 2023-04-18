import React, { useEffect, useState } from 'react';
import { InputWrapper } from '../../core';
import { default as SwitchInput } from "react-switch";
const Switch = (props) => {
    return (React.createElement(InputWrapper, Object.assign({}, props, { id: `${props.name}`, noBorder: true, customClasses: { wrapperClassName: 'form-check' } }), (IWprops) => {
        return React.createElement(SwitchContainer, Object.assign({}, props, IWprops));
    }));
};
const SwitchContainer = (props) => {
    const [value, setValue] = useState(false);
    useEffect(() => {
        if (value !== props.value) {
            setValue(props.value);
        }
    }, [props.value, value]);
    return React.createElement("div", { className: `d-block ${props.wrapperClass}`, style: props.wrapperStyle },
        React.createElement(SwitchInput, { className: props.inputClass, onChange: props.onChange, checked: props.value }),
        React.createElement("div", { className: 'text-muted text-center' }, props.footLabel && (value ? props.footLabel[1] : props.footLabel[0])));
};
export default Switch;
//# sourceMappingURL=Switch.js.map