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
const react_hook_form_1 = require("react-hook-form");
const InputElemWrapper_1 = __importDefault(require("./InputElemWrapper"));
const InputWrapper = (props) => {
    const [_value, _setValue] = (0, react_1.useState)(null);
    const methods = props.contextless === true ? { control: undefined } : (0, react_hook_form_1.useFormContext)();
    return (props.contextless ?
        // Since this does not live in a form there is no form context, as such just store the state in the wrapper itself
        // to maintain the input as a controlled input
        react_1.default.createElement(InputElemWrapper_1.default, { value: _value, onChange: _setValue, id: props.id, name: props.name, reversedLabel: props.reversedLabel, errors: undefined, label: props.label, helperText: props.helperText, noBorder: props.noBorder, noLabel: props.noLabel, customClasses: props.customClasses }, props.children &&
            props.children(Object.assign(Object.assign({}, props), { value: _value, onChange: _setValue, onBlur: () => false, isTouched: _value !== null, isDirty: _value !== null, error: undefined, disabled: props.disabled, ref: undefined }))) :
        // Control is handled by the Controller Element instead
        react_1.default.createElement(react_hook_form_1.Controller, { control: methods.control, name: props.name, render: ({ field: { onChange, onBlur, value, name, ref }, fieldState: { invalid, isTouched, isDirty, error }, formState, }) => (react_1.default.createElement(InputElemWrapper_1.default, { value: value, onChange: onChange, id: props.id, name: props.name, reversedLabel: props.reversedLabel, errors: error, label: props.label, helperText: props.helperText, noBorder: props.noBorder, noLabel: props.noLabel, customClasses: props.customClasses }, props.children &&
                props.children(Object.assign(Object.assign({}, props), { value,
                    onChange,
                    onBlur,
                    isTouched,
                    isDirty,
                    error, disabled: props.disabled, ref })))) }));
};
exports.default = InputWrapper;
//# sourceMappingURL=InputWrapper.js.map