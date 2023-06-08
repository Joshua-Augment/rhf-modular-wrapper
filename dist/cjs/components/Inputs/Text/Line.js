"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const InputWrapper_1 = __importDefault(require("../../core/InputWrapper"));
const useInputValnError_1 = require("../../core/hook/useInputValnError");
const Line = (props) => {
    var _a, _b, _c, _d, _e, _f;
    const { value, setValue } = (0, useInputValnError_1.useInputValAndError)(props.name);
    // const {watch, setValue} = useFormContext()
    // const _val = watch(props.name)
    // const value = useMemo(() => _val ,[_val])
    return ((props === null || props === void 0 ? void 0 : props.type) === "hidden" ?
        react_1.default.createElement("input", { disabled: props.disabled, id: props.name, className: (_b = (_a = props === null || props === void 0 ? void 0 : props.customClasses) === null || _a === void 0 ? void 0 : _a.inputClassName) !== null && _b !== void 0 ? _b : '', name: props.name, value: value === undefined ? "" : value, onChange: (a) => setValue(props.name, a.target.value), placeholder: props.placeholder, type: (_c = props.type) !== null && _c !== void 0 ? _c : 'text' }) :
        react_1.default.createElement(InputWrapper_1.default, Object.assign({}, props),
            react_1.default.createElement("input", { disabled: props.disabled, id: props.name, className: (_e = (_d = props === null || props === void 0 ? void 0 : props.customClasses) === null || _d === void 0 ? void 0 : _d.inputClassName) !== null && _e !== void 0 ? _e : '', name: props.name, value: value === undefined ? "" : value, onChange: (a) => setValue(props.name, a.target.value), placeholder: props.placeholder, type: (_f = props.type) !== null && _f !== void 0 ? _f : 'text' })));
};
exports.default = Line;
//# sourceMappingURL=Line.js.map