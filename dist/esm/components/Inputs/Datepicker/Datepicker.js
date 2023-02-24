import React from 'react';
import InputWrapper from '../../core/InputWrapper';
import DatePickerComponent from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const DatePicker = (props) => {
    return (React.createElement(InputWrapper, Object.assign({}, props, { noBorder: true }), (IWProps) => {
        console.log(`[Datepickerprops] - ${props.name}`, IWProps);
        return React.createElement(DatePickerComponent, Object.assign({ selected: IWProps.value, onChange: (a) => IWProps.onChange(a), id: props.id }, props.options));
    }));
};
export default DatePicker;
//# sourceMappingURL=DatePicker.js.map