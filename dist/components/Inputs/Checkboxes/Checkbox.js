import { jsx as _jsx } from "react/jsx-runtime";
import InputWrapper from "../../core/InputWrapper";
const Checkbox = (props) => {
    var _a;
    return (_jsx(InputWrapper, Object.assign({ type: (_a = props.type) !== null && _a !== void 0 ? _a : "checkbox" }, props, { reversedLabel: true, customClasses: { wrapperClassName: "form-check" }, style: { display: "flex", alignItems: "center" } }, { children: _jsx(_Checkbox, Object.assign({}, props)) })));
};
const _Checkbox = (props) => {
    return _jsx("input", Object.assign({ id: props.name, type: "checkbox", checked: props.value }, props.register(props.name)));
};
export default Checkbox;
//# sourceMappingURL=Checkbox.js.map