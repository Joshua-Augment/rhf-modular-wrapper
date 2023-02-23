"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const InputWrapper_1 = __importDefault(require("../../core/InputWrapper"));
const Radiobox = (props) => {
    return (react_1.default.createElement(InputWrapper_1.default, Object.assign({}, props, { id: `${props.name}-${props.value}`, reversedLabel: true, customClasses: { wrapperClassName: 'form-check' } }), (IWprops) => {
        console.log("[props] - ", props);
        console.log("[IWprops] - ", IWprops);
        console.log(`[checked] [${props.name}] (Value : ${props.value}) - ${props.value === IWprops.value}`);
        return react_1.default.createElement("input", { id: `${props.name}-${props.value}`, type: "radio", name: props.name, checked: props.value === IWprops.value, value: props.value, onChange: (a) => IWprops.onChange(props.value) });
    }));
};
exports.default = Radiobox;
//# sourceMappingURL=Radiobox.js.map