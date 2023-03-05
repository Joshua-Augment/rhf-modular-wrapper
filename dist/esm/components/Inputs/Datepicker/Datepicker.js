import React, { useEffect, useState } from 'react';
import InputWrapper from '../../core/InputWrapper';
import DatePickerComponent from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const DatePicker = (props) => {
    return (React.createElement(InputWrapper, Object.assign({}, props, { noBorder: true }), (IWProps) => {
        console.log(`[Datepickerprops] - ${props.name}`, IWProps);
        return React.createElement(DateWrapper, Object.assign({}, IWProps, { options: props.options }));
    }));
};
const DateWrapper = (props) => {
    var _a;
    const [value, setValue] = useState((_a = props.value) !== null && _a !== void 0 ? _a : new Date());
    useEffect(() => { props.onChange(value); }, [value]);
    useEffect(() => { if ((props.value && value && value.getTime() !== value.getTime()) || (props.value === null)) {
        setValue(props.value);
    } }, [props.value]);
    return React.createElement(DatePickerComponent, Object.assign({ selected: value, onChange: (a) => setValue(a), id: props.id }, props.options));
};
export default DatePicker;
//# sourceMappingURL=DatePicker.js.map