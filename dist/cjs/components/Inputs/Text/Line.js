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
const Line = (props) => {
    return (react_1.default.createElement(InputWrapper_1.default, Object.assign({}, props), (IWprops) => react_1.default.createElement(LineWrapper, Object.assign({}, IWprops, props))));
};
const LineWrapper = (props) => {
    var _a, _b, _c, _d, _e;
    const [value, setValue] = (0, react_1.useState)((_b = (_a = props.value) !== null && _a !== void 0 ? _a : props.defaultValue) !== null && _b !== void 0 ? _b : '');
    const onChange = (a) => { props.onChange(a.target.value); setValue(a.target.value); };
    return react_1.default.createElement("input", { id: props.name, className: (_d = (_c = props === null || props === void 0 ? void 0 : props.customClasses) === null || _c === void 0 ? void 0 : _c.inputClassName) !== null && _d !== void 0 ? _d : '', name: props.name, value: value, onChange: onChange, placeholder: props.placeholder, type: (_e = props.type) !== null && _e !== void 0 ? _e : 'text' });
};
exports.default = Line;
//# sourceMappingURL=Line.js.map