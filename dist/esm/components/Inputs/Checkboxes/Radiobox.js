import React, { useEffect, useState } from 'react';
import InputWrapper from '../../core/InputWrapper';
import { RadioGroup, RadioButton, ReversedRadioButton } from "react-radio-buttons";
import "../../styling/Radiobox.css";
const Radiobox = (props) => {
    return (React.createElement(InputWrapper, Object.assign({}, props, { id: `${props.name}`, noLabel: true, noBorder: true, customClasses: { wrapperClassName: 'form-check' } }), (IWprops) => {
        return React.createElement(RadioWrapper, Object.assign({}, props, IWprops));
    }));
};
const RadioWrapper = (props) => {
    const [value, setValue] = useState("");
    useEffect(() => { if (value !== (props === null || props === void 0 ? void 0 : props.value)) {
        setValue(props === null || props === void 0 ? void 0 : props.value);
    } }, [value, props.value]);
    return React.createElement("span", { className: "rb-item-wrapper" },
        React.createElement(RadioGroup, { horizontal: props.orientation === 'horizontal', onChange: props.onChange, value: value }, props.options.map((option, i) => (option.reversed ?
            React.createElement(ReversedRadioButton, { rootColor: "black", key: `${props.name}-opt-${i}`, value: option.value }, option.label) :
            React.createElement(RadioButton, { rootColor: "black", key: `${props.name}-opt-${i}`, value: option.value }, option.label)))));
};
export default Radiobox;
//# sourceMappingURL=Radiobox.js.map