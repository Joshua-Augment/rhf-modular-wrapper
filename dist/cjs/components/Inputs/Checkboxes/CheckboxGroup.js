"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const CheckboxGroup = (props) => {
    var _a;
    const orientation = (_a = props.orientation) !== null && _a !== void 0 ? _a : 'horizontal';
    return (react_1.default.createElement("div", null,
        props.title && react_1.default.createElement("div", { className: "form-label" }, props.title),
        react_1.default.createElement("div", { className: `checkbox-group ${orientation === 'horizontal' ? 'f-row' : 'f-col'}` }, props.children)));
};
exports.default = CheckboxGroup;
//# sourceMappingURL=CheckboxGroup.js.map