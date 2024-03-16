import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import InputWrapper from "../../core/InputWrapper";
import { default as SwitchInput } from "react-switch";
const Switch = (props) => {
    var _a;
    return (_jsx(InputWrapper, Object.assign({ type: (_a = props.type) !== null && _a !== void 0 ? _a : "switch" }, props, { id: `${props.name}`, noBorder: true, customClasses: { wrapperClassName: "form-check" } }, { children: _jsx(_Switch, Object.assign({}, props)) })));
};
const _Switch = (props) => {
    var _a, _b;
    console.log(`_Switch: ${props.name} = `, props);
    return (_jsxs("div", Object.assign({ className: `d-block ${props.wrapperClass}`, style: Object.assign({ display: "flex", alignItems: "center", flexDirection: "column" }, props.wrapperStyle) }, { children: [_jsx(SwitchInput, Object.assign({}, ((_a = props === null || props === void 0 ? void 0 : props.options) !== null && _a !== void 0 ? _a : {}), { className: props === null || props === void 0 ? void 0 : props.inputClass, onChange: (a) => props.onChange(a), checked: (_b = props.value) !== null && _b !== void 0 ? _b : false })), props.footLabel && _jsx("div", Object.assign({ className: "text-muted text-center" }, { children: props.footLabel && (props.value ? props.footLabel[1] : props.footLabel[0]) }))] })));
};
export default Switch;
//# sourceMappingURL=Switch.js.map