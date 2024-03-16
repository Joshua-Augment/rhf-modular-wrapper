import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const CheckboxGroup = (props) => {
    var _a;
    const orientation = (_a = props.orientation) !== null && _a !== void 0 ? _a : 'horizontal';
    return (_jsxs("div", { children: [props.title && _jsx("div", Object.assign({ className: "form-label" }, { children: props.title })), _jsx("div", Object.assign({ className: `checkbox-group ${orientation === 'horizontal' ? 'f-row' : 'f-col'}` }, { children: props.children }))] }));
};
export default CheckboxGroup;
//# sourceMappingURL=CheckboxGroup.js.map