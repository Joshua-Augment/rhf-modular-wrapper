"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var index_1 = __importDefault(require("../../core/InputWrapper/index"));
var react_switch_1 = __importDefault(require("react-switch"));
var Switch = function (props) {
    var _a;
    return ((0, jsx_runtime_1.jsx)(index_1.default, __assign({ type: (_a = props.type) !== null && _a !== void 0 ? _a : "switch" }, props, { id: "".concat(props.name), noBorder: true, customClasses: { wrapperClassName: "form-check" } }, { children: (0, jsx_runtime_1.jsx)(_Switch, __assign({}, props)) })));
};
var _Switch = function (props) {
    var _a, _b;
    console.log("_Switch: ".concat(props.name, " = "), props);
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "d-block ".concat(props.wrapperClass), style: __assign({ display: "flex", alignItems: "center", flexDirection: "column" }, props.wrapperStyle) }, { children: [(0, jsx_runtime_1.jsx)(react_switch_1.default, __assign({}, ((_a = props === null || props === void 0 ? void 0 : props.options) !== null && _a !== void 0 ? _a : {}), { className: props === null || props === void 0 ? void 0 : props.inputClass, onChange: function (a) { return props.onChange(a); }, checked: (_b = props.value) !== null && _b !== void 0 ? _b : false })), props.footLabel && (0, jsx_runtime_1.jsx)("div", __assign({ className: "text-muted text-center" }, { children: props.footLabel && (props.value ? props.footLabel[1] : props.footLabel[0]) }))] })));
};
exports.default = Switch;
//# sourceMappingURL=Switch.js.map