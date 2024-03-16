"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const InputWrapper_1 = __importDefault(require("../../core/InputWrapper"));
const react_switch_1 = __importDefault(require("react-switch"));
const Switch = (props) => {
    var _a;
    return ((0, jsx_runtime_1.jsx)(InputWrapper_1.default, Object.assign({ type: (_a = props.type) !== null && _a !== void 0 ? _a : "switch" }, props, { id: `${props.name}`, noBorder: true, customClasses: { wrapperClassName: "form-check" } }, { children: (0, jsx_runtime_1.jsx)(_Switch, Object.assign({}, props)) })));
};
const _Switch = (props) => {
    var _a, _b;
    console.log(`_Switch: ${props.name} = `, props);
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: `d-block ${props.wrapperClass}`, style: Object.assign({ display: "flex", alignItems: "center", flexDirection: "column" }, props.wrapperStyle) }, { children: [(0, jsx_runtime_1.jsx)(react_switch_1.default, Object.assign({}, ((_a = props === null || props === void 0 ? void 0 : props.options) !== null && _a !== void 0 ? _a : {}), { className: props === null || props === void 0 ? void 0 : props.inputClass, onChange: (a) => props.onChange(a), checked: (_b = props.value) !== null && _b !== void 0 ? _b : false })), props.footLabel && (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "text-muted text-center" }, { children: props.footLabel && (props.value ? props.footLabel[1] : props.footLabel[0]) }))] })));
};
exports.default = Switch;
//# sourceMappingURL=Switch.js.map