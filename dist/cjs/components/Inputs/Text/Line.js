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
var Line = function (props) {
    var _a;
    return ((0, jsx_runtime_1.jsx)(index_1.default, __assign({ empty: '', type: (_a = props.type) !== null && _a !== void 0 ? _a : "line" }, props, { children: (0, jsx_runtime_1.jsx)(_Line, __assign({}, props)) })));
};
var _Line = function (props) {
    var _a, _b, _c;
    return ((0, jsx_runtime_1.jsx)("input", __assign({ disabled: props.disabled, id: props.name, className: (_b = (_a = props === null || props === void 0 ? void 0 : props.customClasses) === null || _a === void 0 ? void 0 : _a.inputClassName) !== null && _b !== void 0 ? _b : "" }, props.register(props.name), { placeholder: props.placeholder, type: (_c = props.type) !== null && _c !== void 0 ? _c : "text" })));
};
exports.default = Line;
//# sourceMappingURL=Line.js.map