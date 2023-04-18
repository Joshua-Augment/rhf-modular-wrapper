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
const Switch = (props) => {
    return (react_1.default.createElement(core_1.InputWrapper, Object.assign({}, props, { id: `${props.name}`, noBorder: true, customClasses: { wrapperClassName: 'form-check' } }), (IWprops) => {
        return react_1.default.createElement(SwitchContainer, Object.assign({}, props, IWprops));
    }));
};
const SwitchContainer = (props) => {
    const [value, setValue] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        if (value !== props.value) {
            setValue(props.value);
        }
    }, [props.value, value]);
    return react_1.default.createElement("div", { className: `d-block ${props.wrapperClass}`, style: props.wrapperStyle },
        react_1.default.createElement(react_switch_1.default, { className: props.inputClass, onChange: props.onChange, checked: props.value }),
        react_1.default.createElement("div", { className: 'text-muted text-center' }, props.footLabel && (value ? props.footLabel[1] : props.footLabel[0])));
};
exports.default = Switch;
//# sourceMappingURL=Switch.js.map