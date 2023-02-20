import React from 'react';
import InputWrapper from '../../core/InputWrapper';
const Radiobox = (props) => {
    return (React.createElement(InputWrapper, Object.assign({}, props, { reversedLabel: true, customClasses: { wrapperClassName: 'form-check' } }), (IWprops) => {
        console.log("[props] - ", props);
        console.log("[IWprops] - ", IWprops);
        console.log(`[checked] [${props.name}] (Vakue : ${props.value}) - ${props.value === IWprops.value}`);
        return React.createElement("input", { id: props.name, type: "radio", name: props.name, checked: props.value === IWprops.value, value: props.value, onChange: (a) => IWprops.onChange(props.value) });
    }));
};
export default Radiobox;
//# sourceMappingURL=Radiobox.js.map