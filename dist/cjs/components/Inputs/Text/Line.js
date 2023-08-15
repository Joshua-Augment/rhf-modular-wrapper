"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const InputWrapper_1 = __importDefault(require("../../core/InputWrapper"));
const useInputValnError_1 = require("../../core/hook/useInputValnError");
const Line = (props) => {
    var _a, _b, _c, _d, _e, _f, _g;
    const { value, setValue } = (0, useInputValnError_1.useInputValAndError)(props.name);
    // console.log(`Line - ${props.name} - ${value}`)
    (0, react_1.useEffect)(() => {
        if (props.type === 'number' && value === '') {
            // console.log(`[Setting] Setting value for ${props.name} in line from ${value} to ${props.type === 'number' ? 0 : ''}`)
            setValue(props.name, props.type === 'number' ? 0 : '');
        }
    }, [value]);
    const handleInput = (a) => {
        // console.log(`[Setting] Value changed! for ${props.name} in line from ${value} to ${a.target.value}`)
        setValue(props.name, a.target.value);
    };
    return ((props === null || props === void 0 ? void 0 : props.type) === "hidden" ?
        react_1.default.createElement("input", { disabled: props.disabled, id: props.name, className: (_b = (_a = props === null || props === void 0 ? void 0 : props.customClasses) === null || _a === void 0 ? void 0 : _a.inputClassName) !== null && _b !== void 0 ? _b : '', name: props.name, value: value !== undefined && value !== null ? value : "", onChange: (a) => handleInput(a), placeholder: props.placeholder, type: (_c = props.type) !== null && _c !== void 0 ? _c : 'text' }) :
        react_1.default.createElement(InputWrapper_1.default, Object.assign({ type: (_d = props.type) !== null && _d !== void 0 ? _d : 'line' }, props),
            react_1.default.createElement("input", { disabled: props.disabled, id: props.name, className: (_f = (_e = props === null || props === void 0 ? void 0 : props.customClasses) === null || _e === void 0 ? void 0 : _e.inputClassName) !== null && _f !== void 0 ? _f : '', name: props.name, value: value !== undefined && value !== null ? value : "", onChange: (a) => handleInput(a), placeholder: props.placeholder, type: (_g = props.type) !== null && _g !== void 0 ? _g : 'text' })));
};
exports.default = Line;
//# sourceMappingURL=Line.js.map