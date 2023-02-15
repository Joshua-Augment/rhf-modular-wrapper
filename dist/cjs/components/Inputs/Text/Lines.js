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
        return react_1.default.createElement("textarea", { id: IWprops.name, className: (_b = (_a = IWprops === null || IWprops === void 0 ? void 0 : IWprops.customClasses) === null || _a === void 0 ? void 0 : _a.inputClassName) !== null && _b !== void 0 ? _b : '', name: IWprops.name, value: IWprops.value, onChange: IWprops.onChange, placeholder: IWprops.placeholder, rows: (_c = props.rows) !== null && _c !== void 0 ? _c : 3, cols: props.cols });
    }));
};
exports.default = Line;
//# sourceMappingURL=Lines.js.map