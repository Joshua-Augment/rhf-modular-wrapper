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
const core_1 = require("../../core");
const react_switch_1 = __importDefault(require("react-switch"));
const useInputValnError_1 = require("../../core/hook/useInputValnError");
const Switch = (props) => {
    const { value, setValue } = (0, useInputValnError_1.useInputValAndError)(props.name);
    (0, react_1.useEffect)(() => { if (value === null || value === undefined || value === '') {
        setValue(props.name, false);
    } }, [value]);
    return (react_1.default.createElement(core_1.InputWrapper, Object.assign({}, props, { id: `${props.name}`, noBorder: true, customClasses: { wrapperClassName: 'form-check' } }),
        react_1.default.createElement("div", { className: `d-block ${props.wrapperClass}`, style: Object.assign({ display: 'flex', alignItems: 'center', flexDirection: 'column' }, props.wrapperStyle) },
            react_1.default.createElement(react_switch_1.default, Object.assign({ className: props.inputClass, onChange: (a) => setValue(props.name, a), checked: value }, props.options)),
            props.footLabel && react_1.default.createElement("div", { className: 'text-muted text-center' }, props.footLabel && (value ? props.footLabel[1] : props.footLabel[0])))));
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