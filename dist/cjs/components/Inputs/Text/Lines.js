"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const InputWrapper_1 = __importDefault(require("../../core/InputWrapper"));
const Lines = (props) => {
    var _a;
    return ((0, jsx_runtime_1.jsx)(InputWrapper_1.default, Object.assign({ type: (_a = props.type) !== null && _a !== void 0 ? _a : "lines" }, props, { children: (0, jsx_runtime_1.jsx)(_Lines, Object.assign({}, props)) })));
};
const _Lines = (props) => {
    var _a, _b, _c;
    return ((0, jsx_runtime_1.jsx)("textarea", Object.assign({ id: props.name, className: (_b = (_a = props === null || props === void 0 ? void 0 : props.customClasses) === null || _a === void 0 ? void 0 : _a.inputClassName) !== null && _b !== void 0 ? _b : "" }, props.register(props.name), { placeholder: props.placeholder, rows: (_c = props.rows) !== null && _c !== void 0 ? _c : 3, cols: props.cols })));
};
exports.default = Lines;
//# sourceMappingURL=Lines.js.map