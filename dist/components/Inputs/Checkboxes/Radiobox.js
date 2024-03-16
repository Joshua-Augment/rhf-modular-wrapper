import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useEffect } from "react";
import InputWrapper from "../../core/InputWrapper";
import "../../styling/Radiobox.css";
const Radiobox = (props) => {
    var _a;
    return (_jsx(InputWrapper, Object.assign({ type: (_a = props.type) !== null && _a !== void 0 ? _a : "radiobox" }, props, { id: `${props.name}`, noBorder: true }, { children: _jsx(_Radiobox, Object.assign({}, props)) })));
};
const _Radiobox = (props) => {
    useEffect(() => {
        if (props.value === undefined || props.value === "" || props.value === null) {
            props.onChange(props.options[0].value);
        }
    }, [props.value]);
    return (_jsx("div", Object.assign({ className: `radio-button-group` }, { children: props.options.map((option, i) => option.reversed ? (_jsxs(React.Fragment, { children: [_jsx("input", { type: "radio", id: `${props.name}-${option.value}`, name: props.name, value: option.value }), _jsx("br", {}), _jsx("label", Object.assign({ htmlFor: `${props.name}-${option.value}` }, { children: option.label }))] }, `rhf-${props.name}-rb-${option.value}`)) : (_jsxs(React.Fragment, { children: [_jsx("label", Object.assign({ htmlFor: `${props.name}-${option.value}` }, { children: option.label })), _jsx("br", {}), _jsx("input", { type: "radio", id: `${props.name}-${option.value}`, name: props.name, value: option.value })] }, `rhf-${props.name}-rb-${option.value}`))) })));
};
export default Radiobox;
//# sourceMappingURL=Radiobox.js.map