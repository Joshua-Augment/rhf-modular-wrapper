"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const InputWrapper_1 = __importDefault(require("../../core/InputWrapper"));
const react_datepicker_1 = __importDefault(require("react-datepicker"));
require("react-datepicker/dist/react-datepicker.css");
const DatePicker = (props) => {
    return (react_1.default.createElement(InputWrapper_1.default, Object.assign({}, props, { noBorder: true }), (IWProps) => {
        console.log(`[Datepickerprops] - ${props.name}`, IWProps);
        return react_1.default.createElement(DateWrapper, Object.assign({}, IWProps, { options: props.options }));
    }));
};
const DateWrapper = (props) => {
    var _a;
    const [value, setValue] = (0, react_1.useState)((_a = props.value) !== null && _a !== void 0 ? _a : new Date());
    (0, react_1.useEffect)(() => { props.onChange(value); }, [value]);
    (0, react_1.useEffect)(() => { if ((props.value && value && value.getTime() !== value.getTime()) || (props.value === null)) {
        setValue(props.value);
    } }, [props.value]);
    return react_1.default.createElement(react_datepicker_1.default, Object.assign({ selected: value, onChange: (a) => setValue(a), id: props.id }, props.options));
};
exports.default = DatePicker;
//# sourceMappingURL=DatePicker.js.map