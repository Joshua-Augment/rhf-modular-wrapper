"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const InputWrapper_1 = __importDefault(require("../../core/InputWrapper"));
const Logger_1 = __importDefault(require("../../core/Logger"));
// import { useInputValAndError } from '../../core/hook/useInputValnError'
const Line = (props) => {
    var _a;
    return (
    // props?.type === "hidden" ?
    //   <input disabled={props.disabled} id={props.name} className={props?.customClasses?.inputClassName ?? ''} name={props.name} value={props.value !== undefined && props.value !== null ? props.value : ""} onChange={(a) => props.onChange && props.onChange(a.target.value)} placeholder={props.placeholder} type={props.type ?? 'text'} /> :
    react_1.default.createElement(InputWrapper_1.default, Object.assign({ type: (_a = props.type) !== null && _a !== void 0 ? _a : "line" }, props),
        react_1.default.createElement(_Line, Object.assign({}, props))));
};
const _Line = (props) => {
    var _a, _b, _c;
    Logger_1.default.info(props, "Line", "start");
    Logger_1.default.info(null, null, "end");
    return (react_1.default.createElement("input", Object.assign({ disabled: props.disabled, id: props.name, className: (_b = (_a = props === null || props === void 0 ? void 0 : props.customClasses) === null || _a === void 0 ? void 0 : _a.inputClassName) !== null && _b !== void 0 ? _b : "" }, props.register(props.name), { placeholder: props.placeholder, type: (_c = props.type) !== null && _c !== void 0 ? _c : "text" })));
};
exports.default = Line;
//# sourceMappingURL=Line.js.map