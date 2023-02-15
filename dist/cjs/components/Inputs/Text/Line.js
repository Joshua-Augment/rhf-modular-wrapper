"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const InputWrapper_1 = __importDefault(require("../../core/InputWrapper"));
const Line = (props) => {
    return (react_1.default.createElement(InputWrapper_1.default, Object.assign({}, props), (IWprops) => {
        var _a, _b, _c;
        console.log("[props] - ", props);
        return react_1.default.createElement("input", { id: props.name, className: (_b = (_a = props === null || props === void 0 ? void 0 : props.customClasses) === null || _a === void 0 ? void 0 : _a.inputClassName) !== null && _b !== void 0 ? _b : '', name: props.name, value: IWprops.value, onChange: IWprops.onChange, placeholder: props.placeholder, type: (_c = props.type) !== null && _c !== void 0 ? _c : 'text' });
    }));
};
exports.default = Line;
//# sourceMappingURL=Line.js.map