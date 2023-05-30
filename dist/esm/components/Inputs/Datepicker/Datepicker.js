import React, { useMemo } from 'react';
import InputWrapper from '../../core/InputWrapper';
import DatePickerComponent from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useFormContext } from 'react-hook-form';
const DatePicker = (props) => {
    const { watch, setValue } = useFormContext();
    const _val = watch(props.name);
    const val = useMemo(() => _val, [_val]);
    return (React.createElement(InputWrapper, Object.assign({}, props, { noBorder: true }),
        React.createElement(DatePickerComponent, Object.assign({ selected: val, onChange: (a) => setValue(props.name, a), id: props.id }, props.options))));
};
export default DatePicker;
//# sourceMappingURL=DatePicker.js.map