"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const core_1 = require("../../core");
const react_switch_1 = __importDefault(require("react-switch"));
const react_hook_form_1 = require("react-hook-form");
const Switch = (props) => {
    var _a;
    const { watch } = (0, react_hook_form_1.useFormContext)();
    const _w = watch();
    // const {value, setValue} = useInputValAndError(props.name)
    // useEffect(()=>{ if (value === null || value === undefined || value === '') {setValue(props.name, false)} },[value])
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("p", null, JSON.stringify(_w !== null && _w !== void 0 ? _w : {})),
        react_1.default.createElement(core_1.InputWrapper, Object.assign({ type: (_a = props.type) !== null && _a !== void 0 ? _a : 'switch' }, props, { id: `${props.name}`, noBorder: true, customClasses: { wrapperClassName: 'form-check' } }),
            react_1.default.createElement(_Switch, Object.assign({}, props)))));
};
const _Switch = (props) => {
    var _a, _b;
    // console.log(`[Switch] ${props.name} (Current : ${props.value})`,props)
    return react_1.default.createElement("div", { className: `d-block ${props.wrapperClass}`, style: Object.assign({ display: 'flex', alignItems: 'center', flexDirection: 'column' }, props.wrapperStyle) },
        react_1.default.createElement(react_switch_1.default, Object.assign({}, (_a = props === null || props === void 0 ? void 0 : props.options) !== null && _a !== void 0 ? _a : {}, { className: props === null || props === void 0 ? void 0 : props.inputClass, onChange: (a) => props.onChange(a), checked: (_b = props.value) !== null && _b !== void 0 ? _b : false })),
        props.footLabel && react_1.default.createElement("div", { className: 'text-muted text-center' }, props.footLabel && (props.value ? props.footLabel[1] : props.footLabel[0])));
};
// interface ISwitchContainer extends ISwitch,IFormFrameInjector {}
// const SwitchContainer = (props:ISwitchContainer) => {
//   const [value, setValue] = useState(false)
//   useEffect(()=>{
//     if (value !== props.value) {
//       setValue(props.value)
//     }
//   },[props.value, value])
//   return <div className={`d-block ${props.wrapperClass}`} style={props.wrapperStyle}>
//     <SwitchInput className={props.inputClass} onChange={props.onChange} checked={props.value} />
//     <div className='text-muted text-center'>{props.footLabel && (value ? props.footLabel[1] : props.footLabel[0])}</div>
//   </div>
// }
exports.default = Switch;
//# sourceMappingURL=Switch.js.map