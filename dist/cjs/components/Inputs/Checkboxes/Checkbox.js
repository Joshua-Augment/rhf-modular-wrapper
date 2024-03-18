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
var Checkbox = function (props) {
    var _a;
    return ((0, jsx_runtime_1.jsx)(index_1.default, __assign({ type: (_a = props.type) !== null && _a !== void 0 ? _a : "checkbox" }, props, { reversedLabel: true, customClasses: { wrapperClassName: "form-check" }, style: { display: "flex", alignItems: "center" } }, { children: (0, jsx_runtime_1.jsx)(_Checkbox, __assign({}, props)) })));
};
var _Checkbox = function (props) {
    return (0, jsx_runtime_1.jsx)("input", __assign({ id: props.name, type: "checkbox", checked: props.value }, props.register(props.name)));
};
exports.default = Checkbox;
//# sourceMappingURL=Checkbox.js.map