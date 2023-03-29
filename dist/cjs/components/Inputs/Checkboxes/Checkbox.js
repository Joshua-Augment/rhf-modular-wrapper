"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const InputWrapper_1 = __importDefault(require("../../core/InputWrapper"));
const Checkbox = (props) => {
    return (react_1.default.createElement(InputWrapper_1.default, Object.assign({}, props, { reversedLabel: true, customClasses: { wrapperClassName: 'form-check' } }), (IWprops) => {
        if (IWprops.value === undefined) {
            IWprops.onChange(false);
        }
        return react_1.default.createElement(CheckBoxWrapper, Object.assign({}, props, IWprops));
    }));
};
const CheckBoxWrapper = (props) => {
    // useEffect(()=>{
    //   if (props)
    // },[props.value])
    return react_1.default.createElement("input", { id: props.name, type: "checkbox", name: props.name, checked: props.value, value: props.value, onChange: props.onChange });
};
exports.default = Checkbox;
//# sourceMappingURL=Checkbox.js.map