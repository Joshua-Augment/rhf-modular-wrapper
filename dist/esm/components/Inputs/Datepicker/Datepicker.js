import React from 'react';
import InputWrapper from '../../core/InputWrapper';
import DatePickerComponent from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useInputValAndError } from '../../core/hook/useInputValnError';
const DatePicker = (props) => {
    var _a;
    const { value, setValue } = useInputValAndError(props.name);
    // const {watch, setValue} = useFormContext()
    // const _val = watch(props.name)
    // const val = useMemo(() => value ,[value])
    // console.log('DatePicker -  value', value)
    return (React.createElement(InputWrapper, Object.assign({ type: (_a = props.type) !== null && _a !== void 0 ? _a : 'datepicker' }, props, { noBorder: true }),
        React.createElement(DatePickerComponent, Object.assign({ selected: value, onChange: (a) => setValue(props.name, a), id: props.id }, props.options))));
};
export default DatePicker;
//# sourceMappingURL=DatePicker.js.map