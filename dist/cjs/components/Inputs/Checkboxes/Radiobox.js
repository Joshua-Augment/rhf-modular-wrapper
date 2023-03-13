"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const InputWrapper_1 = __importDefault(require("../../core/InputWrapper"));
const react_radio_buttons_1 = require("react-radio-buttons");
require("./Radiobox.css");
const Radiobox = (props) => {
    return (react_1.default.createElement(InputWrapper_1.default, Object.assign({}, props, { id: `${props.name}`, noLabel: true, noBorder: true, customClasses: { wrapperClassName: 'form-check' } }), (IWprops) => {
        return react_1.default.createElement(RadioWrapper, Object.assign({}, props, IWprops));
    }));
};
const RadioWrapper = (props) => {
    return react_1.default.createElement("span", { className: "rb-item-wrapper" },
        react_1.default.createElement(react_radio_buttons_1.RadioGroup, { horizontal: props.orientation === 'horizontal', onChange: props.onChange }, props.options.map((option, i) => (option.reversed ?
            react_1.default.createElement(react_radio_buttons_1.ReversedRadioButton, { rootColor: "black", key: `${props.name}-opt-${i}`, value: option.value }, option.label) :
            react_1.default.createElement(react_radio_buttons_1.RadioButton, { rootColor: "black", key: `${props.name}-opt-${i}`, value: option.value }, option.label)))));
};
exports.default = Radiobox;
//# sourceMappingURL=Radiobox.js.map