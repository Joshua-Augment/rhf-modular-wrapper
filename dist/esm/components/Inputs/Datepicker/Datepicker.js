import React from 'react';
import InputWrapper from '../../core/InputWrapper';
import DatePickerComponent from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const DatePicker = (props) => {
    // const {value, setValue} = useInputValAndError(props.name)
    // const {watch, setValue} = useFormContext()
    // const _val = watch(props.name)
    // const val = useMemo(() => value ,[value])
    // console.log('DatePicker -  value', value)
    var _a;
    return (React.createElement(InputWrapper, Object.assign({ type: (_a = props.type) !== null && _a !== void 0 ? _a : 'datepicker' }, props, { noBorder: true }),
        React.createElement(_DatePicker, Object.assign({}, props))));
};
const _DatePicker = (props) => {
    return React.createElement(DatePickerComponent
    // {...props.register(props.name)}
    , Object.assign({ 
        // {...props.register(props.name)}
        selected: props.value, onChange: (a) => props.onChange(a) }, props.options, { id: props.id }));
};
export default DatePicker;
//# sourceMappingURL=DatePicker.js.map