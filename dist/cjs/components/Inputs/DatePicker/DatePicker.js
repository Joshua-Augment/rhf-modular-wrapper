"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var index_1 = __importDefault(require("../../core/InputWrapper/index"));
var react_datepicker_1 = __importDefault(require("react-datepicker"));
require("react-datepicker/dist/react-datepicker.css");
var DatePicker = function (props) {
    // const {value, setValue} = useInputValAndError(props.name)
    // const {watch, setValue} = useFormContext()
    // const _val = watch(props.name)
    // const val = useMemo(() => value ,[value])
    // console.log('DatePicker -  value', value)
    var _a;
    return ((0, jsx_runtime_1.jsx)(index_1.default, __assign({ type: (_a = props.type) !== null && _a !== void 0 ? _a : 'datepicker' }, props, { noBorder: true }, { children: (0, jsx_runtime_1.jsx)(_DatePicker, __assign({}, props)) })));
};
var _DatePicker = function (props) {
    return (0, jsx_runtime_1.jsx)(react_datepicker_1.default
    // {...props.register(props.name)}
    , __assign({ 
        // {...props.register(props.name)}
        selected: props.value, onChange: function (a) { return props.onChange(a); } }, props.options, { id: props.id }));
};
exports.default = DatePicker;
//# sourceMappingURL=DatePicker.js.map