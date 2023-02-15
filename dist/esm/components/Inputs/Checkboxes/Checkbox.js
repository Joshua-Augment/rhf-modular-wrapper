import React from 'react';
import InputWrapper from '../../core/InputWrapper';
const Checkbox = (props) => {
    return (React.createElement(InputWrapper, Object.assign({}, props, { reversedLabel: true, customClasses: { wrapperClassName: 'form-check' } }), (IWprops) => {
        console.log("[props] - ", props);
        return React.createElement("input", { id: props.name, type: "checkbox", name: props.name, value: IWprops.value, onChange: IWprops.onChange });
    }));
};
export default Checkbox;
//# sourceMappingURL=Checkbox.js.map