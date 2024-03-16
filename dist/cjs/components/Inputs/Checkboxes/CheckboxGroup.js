"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const CheckboxGroup = (props) => {
    var _a;
    const orientation = (_a = props.orientation) !== null && _a !== void 0 ? _a : 'horizontal';
    return ((0, jsx_runtime_1.jsxs)("div", { children: [props.title && (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "form-label" }, { children: props.title })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: `checkbox-group ${orientation === 'horizontal' ? 'f-row' : 'f-col'}` }, { children: props.children }))] }));
};
exports.default = CheckboxGroup;
//# sourceMappingURL=CheckboxGroup.js.map