"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const InputWrapper_1 = __importDefault(require("../../core/InputWrapper"));
const react_datepicker_1 = __importDefault(require("react-datepicker"));
require("react-datepicker/dist/react-datepicker.css");
const DatePicker = (props) => {
    return (react_1.default.createElement(InputWrapper_1.default, Object.assign({}, props, { noBorder: true }), (IWProps) => {
        console.log(`[Datepickerprops] - ${props.name}`, IWProps);
        return react_1.default.createElement(react_datepicker_1.default, Object.assign({ selected: IWProps.value, onChange: (a) => IWProps.onChange(a), id: props.id }, props.options));
    }));
};
exports.default = DatePicker;
//# sourceMappingURL=DatePicker.js.map