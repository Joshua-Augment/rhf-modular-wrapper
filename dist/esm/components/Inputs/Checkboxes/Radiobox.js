import React, { useEffect } from 'react';
import InputWrapper from '../../core/InputWrapper';
import { RadioGroup, RadioButton, ReversedRadioButton } from "react-radio-buttons";
import "../../styling/Radiobox.css";
import { useInputValAndError } from '../../core/hook/useInputValnError';
const Radiobox = (props) => {
    const { value, setValue } = useInputValAndError(props.name);
    // const {watch, setValue} = useFormContext()
    // const _val = watch(props.name)
    // const val = useMemo(() => _val ,[_val])
    useEffect(() => {
        if (value === undefined || value === '' || value === null) {
            setValue(props.name, props.options[0].value);
        }
    }, [value]);
    return (React.createElement(InputWrapper, Object.assign({}, props, { id: `${props.name}`, noLabel: true, noBorder: true, customClasses: { wrapperClassName: 'form-check' } }),
        React.createElement("span", { className: "rb-item-wrapper" },
            React.createElement(RadioGroup, { horizontal: props.orientation === 'horizontal', onChange: (a) => setValue(props.name, a), value: value }, props.options.map((option, i) => (option.reversed ?
                React.createElement(ReversedRadioButton, { rootColor: "black", key: `${props.name}-opt-${i}`, value: option.value }, option.label) :
                React.createElement(RadioButton, { rootColor: "black", key: `${props.name}-opt-${i}`, value: option.value }, option.label)))))));
};
export default Radiobox;
//# sourceMappingURL=Radiobox.js.map