var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import InputWrapper from '../../core/InputWrapper/index';
import DatePickerComponent from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
var DatePicker = function (props) {
    var _a;
    return (_jsx(InputWrapper, __assign({ empty: new Date(), type: (_a = props.type) !== null && _a !== void 0 ? _a : 'datepicker' }, props, { noBorder: true }, { children: _jsx(_DatePicker, __assign({}, props)) })));
};
var _DatePicker = function (props) {
    return _jsx(DatePickerComponent
    // {...props.register(props.name)}
    , __assign({ 
        // {...props.register(props.name)}
        selected: props.value, value: props.value, onChange: function (a) { return props.onChange(a); } }, props.options, { id: props.id }));
};
export default DatePicker;
//# sourceMappingURL=DatePicker.js.map