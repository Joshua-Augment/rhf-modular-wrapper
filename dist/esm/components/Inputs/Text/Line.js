import React from "react";
import InputWrapper from "../../core/InputWrapper";
import Logger from "../../core/Logger";
// import { useInputValAndError } from '../../core/hook/useInputValnError'
const Line = (props) => {
    var _a;
    return (
    // props?.type === "hidden" ?
    //   <input disabled={props.disabled} id={props.name} className={props?.customClasses?.inputClassName ?? ''} name={props.name} value={props.value !== undefined && props.value !== null ? props.value : ""} onChange={(a) => props.onChange && props.onChange(a.target.value)} placeholder={props.placeholder} type={props.type ?? 'text'} /> :
    React.createElement(InputWrapper, Object.assign({ type: (_a = props.type) !== null && _a !== void 0 ? _a : "line" }, props),
        React.createElement(_Line, Object.assign({}, props))));
};
const _Line = (props) => {
    var _a, _b, _c;
    Logger.info(props, "Line", "start");
    Logger.info(null, null, "end");
    return (React.createElement("input", Object.assign({ disabled: props.disabled, id: props.name, className: (_b = (_a = props === null || props === void 0 ? void 0 : props.customClasses) === null || _a === void 0 ? void 0 : _a.inputClassName) !== null && _b !== void 0 ? _b : "" }, props.register(props.name), { placeholder: props.placeholder, type: (_c = props.type) !== null && _c !== void 0 ? _c : "text" })));
};
export default Line;
//# sourceMappingURL=Line.js.map