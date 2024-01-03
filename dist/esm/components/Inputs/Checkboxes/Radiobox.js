import React, { useEffect } from 'react';
import InputWrapper from '../../core/InputWrapper';
import { RadioGroup, RadioButton, ReversedRadioButton } from "react-radio-buttons";
import "../../styling/Radiobox.css";
// import { useInputValAndError } from '../../core/hook/useInputValnError'
const Radiobox = (props) => {
    // const {watch, setValue} = useFormContext()
    // const _val = watch(props.name)
    // const val = useMemo(() => _val ,[_val])
    var _a;
    return (React.createElement(InputWrapper, Object.assign({ type: (_a = props.type) !== null && _a !== void 0 ? _a : 'radiobox' }, props, { id: `${props.name}`, noLabel: true, noBorder: true, customClasses: { wrapperClassName: 'form-check' } }),
        React.createElement(_Radiobox, Object.assign({}, props))));
};
const _Radiobox = (props) => {
    // console.log('[_Radiobox] - props  ',props)
    useEffect(() => {
        // console.log('[_Radiobox] - props useEffect ', props)
        if (props.value === undefined || props.value === '' || props.value === null) {
            props.onChange(props.options[0].value);
        }
    }, [props.value]);
    return React.createElement("span", { className: "rb-item-wrapper" },
        React.createElement(RadioGroup, { horizontal: props.orientation === 'horizontal', onChange: (a) => props.onChange(a), value: props.value }, props.options.map((option, i) => (option.reversed ?
            React.createElement(ReversedRadioButton, { rootColor: "black", key: `${props.name}-opt-${i}`, value: option.value }, option.label) :
            React.createElement(RadioButton, { rootColor: "black", key: `${props.name}-opt-${i}`, value: option.value }, option.label)))));
};
export default Radiobox;
//# sourceMappingURL=Radiobox.js.map