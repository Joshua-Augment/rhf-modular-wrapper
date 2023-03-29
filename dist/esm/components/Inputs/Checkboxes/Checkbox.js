import React from 'react';
import InputWrapper from '../../core/InputWrapper';
const Checkbox = (props) => {
    return (React.createElement(InputWrapper, Object.assign({}, props, { reversedLabel: true, customClasses: { wrapperClassName: 'form-check' } }), (IWprops) => {
        if (IWprops.value === undefined) {
            IWprops.onChange(false);
        }
        return React.createElement(CheckBoxWrapper, Object.assign({}, props, IWprops));
    }));
};
const CheckBoxWrapper = (props) => {
    // useEffect(()=>{
    //   if (props)
    // },[props.value])
    return React.createElement("input", { id: props.name, type: "checkbox", name: props.name, checked: props.value, value: props.value, onChange: props.onChange });
};
export default Checkbox;
//# sourceMappingURL=Checkbox.js.map