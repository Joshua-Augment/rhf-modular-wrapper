"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const InputWrapper_1 = __importDefault(require("../../core/InputWrapper"));
// import { useInputValAndError } from '../../core/hook/useInputValnError'
const Checkbox = (props) => {
    // const {value, setValue} = useInputValAndError(props.name)
    var _a;
    // const {watch, setValue} = useFormContext()
    // const _val = watch(props.name)
    // const val = useMemo(() => _val ,[_val])
    return (react_1.default.createElement(InputWrapper_1.default, Object.assign({ type: (_a = props.type) !== null && _a !== void 0 ? _a : 'checkbox' }, props, { reversedLabel: true, customClasses: { wrapperClassName: 'form-check' }, style: { display: 'flex', alignItems: 'center' } }),
        react_1.default.createElement(_Checkbox, Object.assign({}, props))));
};
const _Checkbox = (props) => {
    // console.log(`[_Checkbox] Name : ${props.name} - `, props)
    // useEffect(()=>{ if (props.value === undefined || props.value === null || props.value === '') { props.onChange( false) } },[props.value])
    return react_1.default.createElement("input", Object.assign({ id: props.name, type: "checkbox", checked: props.value }, props.register(props.name)));
};
exports.default = Checkbox;
//# sourceMappingURL=Checkbox.js.map