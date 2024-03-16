"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const InputWrapper_1 = __importDefault(require("../../core/InputWrapper"));
const Checkbox = (props) => {
    var _a;
    return ((0, jsx_runtime_1.jsx)(InputWrapper_1.default, Object.assign({ type: (_a = props.type) !== null && _a !== void 0 ? _a : "checkbox" }, props, { reversedLabel: true, customClasses: { wrapperClassName: "form-check" }, style: { display: "flex", alignItems: "center" } }, { children: (0, jsx_runtime_1.jsx)(_Checkbox, Object.assign({}, props)) })));
};
const _Checkbox = (props) => {
    return (0, jsx_runtime_1.jsx)("input", Object.assign({ id: props.name, type: "checkbox", checked: props.value }, props.register(props.name)));
};
exports.default = Checkbox;
//# sourceMappingURL=Checkbox.js.map