"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const InputWrapper_1 = __importDefault(require("../../core/InputWrapper"));
const react_datepicker_1 = __importDefault(require("react-datepicker"));
require("react-datepicker/dist/react-datepicker.css");
const useInputValnError_1 = require("../../core/hook/useInputValnError");
const DatePicker = (props) => {
    var _a;
    const { value, setValue } = (0, useInputValnError_1.useInputValAndError)(props.name);
    // const {watch, setValue} = useFormContext()
    // const _val = watch(props.name)
    // const val = useMemo(() => value ,[value])
    // console.log('DatePicker -  value', value)
    return (react_1.default.createElement(InputWrapper_1.default, Object.assign({ type: (_a = props.type) !== null && _a !== void 0 ? _a : 'datepicker' }, props, { noBorder: true }),
        react_1.default.createElement(react_datepicker_1.default, Object.assign({ selected: value, onChange: (a) => setValue(props.name, a), id: props.id }, props.options))));
};
exports.default = DatePicker;
//# sourceMappingURL=DatePicker.js.map