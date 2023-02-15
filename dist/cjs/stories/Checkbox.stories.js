"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckboxGroupExampleVertical = exports.CheckboxGroupExample = exports.CheckboxSimple = void 0;
const react_1 = __importDefault(require("react"));
const Form_1 = require("../components/core/Form");
const Checkbox_1 = __importDefault(require("../components/Inputs/Checkboxes/Checkbox"));
const CheckboxGroup_1 = __importDefault(require("../components/Inputs/Checkboxes/CheckboxGroup"));
exports.default = {
    title: 'Components/Checkbox',
    component: Checkbox_1.default
};
const onSubmit = (a) => new Promise((resolve, reject) => resolve(console.log('FormSubmission:', a)));
const CheckboxSimple = () => {
    return react_1.default.createElement(Form_1.Form, { onSubmit: onSubmit },
        react_1.default.createElement(Checkbox_1.default, { label: "Simple Checkbox One", name: "checkbox.one" }),
        react_1.default.createElement(Checkbox_1.default, { label: "Simple Checkbox Two", name: "checkbox.two" }),
        react_1.default.createElement(Checkbox_1.default, { label: "Simple Checkbox Three", name: "checkbox.three" }));
};
exports.CheckboxSimple = CheckboxSimple;
const CheckboxGroupExample = () => {
    return react_1.default.createElement(Form_1.Form, { onSubmit: onSubmit },
        react_1.default.createElement(CheckboxGroup_1.default, { title: 'Checkbox Group with Title' },
            react_1.default.createElement(Checkbox_1.default, { label: "Simple Checkbox One", name: "checkbox.one" }),
            react_1.default.createElement(Checkbox_1.default, { label: "Simple Checkbox Two", name: "checkbox.two" }),
            react_1.default.createElement(Checkbox_1.default, { label: "Simple Checkbox Three", name: "checkbox.three" })));
};
exports.CheckboxGroupExample = CheckboxGroupExample;
const CheckboxGroupExampleVertical = () => {
    return react_1.default.createElement(Form_1.Form, { onSubmit: onSubmit },
        react_1.default.createElement(CheckboxGroup_1.default, { title: 'Checkbox Group with Title', orientation: "vertical" },
            react_1.default.createElement(Checkbox_1.default, { label: "Simple Checkbox One", name: "checkbox.one" }),
            react_1.default.createElement(Checkbox_1.default, { label: "Simple Checkbox Two", name: "checkbox.two" }),
            react_1.default.createElement(Checkbox_1.default, { label: "Simple Checkbox Three", name: "checkbox.three" })));
};
exports.CheckboxGroupExampleVertical = CheckboxGroupExampleVertical;
//# sourceMappingURL=Checkbox.stories.js.map