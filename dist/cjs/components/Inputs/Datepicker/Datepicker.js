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
    // const {value, setValue} = useInputValAndError(props.name)
    // const {watch, setValue} = useFormContext()
    // const _val = watch(props.name)
    // const val = useMemo(() => value ,[value])
    // console.log('DatePicker -  value', value)
    var _a;
    return (react_1.default.createElement(InputWrapper_1.default, Object.assign({ type: (_a = props.type) !== null && _a !== void 0 ? _a : 'datepicker' }, props, { noBorder: true }),
        react_1.default.createElement(_DatePicker, Object.assign({}, props))));
};
const _DatePicker = (props) => {
    return react_1.default.createElement(react_datepicker_1.default
    // {...props.register(props.name)}
    , Object.assign({ 
        // {...props.register(props.name)}
        selected: props.value, onChange: (a) => props.onChange(a) }, props.options, { id: props.id }));
};
exports.default = DatePicker;
//# sourceMappingURL=DatePicker.js.map