"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lines = void 0;
const react_1 = __importDefault(require("react"));
const Form_1 = require("../components/core/Form");
const Line_1 = __importDefault(require("../components/Inputs/Text/Line"));
exports.default = {
    title: 'Components/CustomWrapper',
    component: Line_1.default
};
const onSubmit = (a) => new Promise((resolve, reject) => resolve(console.log('FormSubmission:', a)));
const InputWrapper = (props) => {
    return react_1.default.createElement("div", { style: { background: 'blue', textAlign: 'center' } },
        react_1.default.createElement("label", { style: { background: 'red', color: 'white' } }, props.label),
        react_1.default.createElement("div", null, props.children));
};
const Lines = () => {
    return react_1.default.createElement(Form_1.Form, { onSubmit: onSubmit, inputWrapper: InputWrapper },
        react_1.default.createElement(Line_1.default, { label: "Simple Form Input (Text)", name: "lines.text", placeholder: "Simple Form Placeholder" }),
        react_1.default.createElement(Line_1.default, { label: "Simple Form Input (Number)", name: "lines.number", placeholder: "Simple Number Placeholder", type: "number" }),
        react_1.default.createElement(Line_1.default, { label: "Simple Form Input (Email)", name: "lines.email", placeholder: "Simple Email Placeholder", type: "email" }));
};
exports.Lines = Lines;
//# sourceMappingURL=CustomWrapper.stories.js.map