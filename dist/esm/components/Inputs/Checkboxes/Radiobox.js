import React from 'react';
import InputWrapper from '../../core/InputWrapper';
import { RadioGroup, RadioButton, ReversedRadioButton } from "react-radio-buttons";
import "./Radiobox.css";
const Radiobox = (props) => {
    return (React.createElement(InputWrapper, Object.assign({}, props, { id: `${props.name}`, noLabel: true, noBorder: true, customClasses: { wrapperClassName: 'form-check' } }), (IWprops) => {
        return React.createElement(RadioWrapper, Object.assign({}, props, IWprops));
    }));
};
const RadioWrapper = (props) => {
    return React.createElement("span", { className: "rb-item-wrapper" },
        React.createElement(RadioGroup, { horizontal: props.orientation === 'horizontal', onChange: props.onChange }, props.options.map((option, i) => (option.reversed ?
            React.createElement(ReversedRadioButton, { rootColor: "black", key: `${props.name}-opt-${i}`, value: option.value }, option.label) :
            React.createElement(RadioButton, { rootColor: "black", key: `${props.name}-opt-${i}`, value: option.value }, option.label)))));
};
export default Radiobox;
//# sourceMappingURL=Radiobox.js.map