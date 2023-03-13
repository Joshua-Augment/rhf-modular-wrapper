"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Inputs_1 = require("../Inputs");
const InputChooser = (props) => {
    const OutputComponent = () => {
        switch (props.type) {
            case 'custom':
                const Elem = props.elem;
                return react_1.default.createElement(Elem, Object.assign({}, props));
            case 'wysiwyg':
                return react_1.default.createElement(Inputs_1.WYSIWYGEditor, Object.assign({}, props));
            case 'datepicker':
                return react_1.default.createElement(Inputs_1.DatePicker, Object.assign({}, props));
            case 'select':
                return react_1.default.createElement(Inputs_1.Select, Object.assign({}, props, { options: props.options }));
            case 'select_async':
                return react_1.default.createElement(Inputs_1.AsyncSelect, Object.assign({}, props, { options: props.options, loadOptions: props.loadOptions }));
            case 'textarea':
                return react_1.default.createElement(Inputs_1.Lines, Object.assign({}, props));
            default:
                return react_1.default.createElement(Inputs_1.Line, Object.assign({}, props));
        }
    };
    return OutputComponent();
};
exports.default = InputChooser;
//# sourceMappingURL=InputChooser.js.map