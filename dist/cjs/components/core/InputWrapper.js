"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_hook_form_1 = require("react-hook-form");
const InputElemWrapper_1 = __importDefault(require("./InputElemWrapper"));
const InputWrapper = (props) => {
    const methods = (0, react_hook_form_1.useFormContext)();
    return (react_1.default.createElement(react_hook_form_1.Controller, { control: methods.control, name: props.name, render: ({ field: { onChange, onBlur, value, name, ref }, fieldState: { invalid, isTouched, isDirty, error }, formState, }) => (react_1.default.createElement(InputElemWrapper_1.default, { reversedLabel: props.reversedLabel, name: props.name, errors: error, label: props.label, helperText: props.helperText, noBorder: props.noBorder, noLabel: props.noLabel, customClasses: props.customClasses }, props.children &&
            props.children(Object.assign(Object.assign({}, props), { value,
                onChange,
                onBlur,
                isTouched,
                isDirty,
                error,
                ref })))) }));
};
exports.default = InputWrapper;
//# sourceMappingURL=InputWrapper.js.map