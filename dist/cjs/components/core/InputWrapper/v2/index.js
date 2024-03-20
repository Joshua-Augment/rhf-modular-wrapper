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
var react_1 = require("react");
var Form_1 = require("../../Form");
var index_1 = __importDefault(require("../../Logger/index"));
var InputInnerWrapper_1 = __importDefault(require("./components/InputInnerWrapper"));
var InputWrapperv2 = function (props) {
    var _a, _b, _c, _d;
    var debug = (0, react_1.useContext)(Form_1.ThemeContext).debug;
    index_1.default.info(debug, "Value - ".concat(typeof props.value === 'object' ? JSON.stringify(props.value) : props.value), "".concat(props.name, " - InputWrapperv2"), "start");
    index_1.default.info(debug, props, "".concat(props.name, " - InputWrapperv2"));
    var _e = (0, react_1.useContext)(Form_1.ThemeContext), inputTemplate = _e.inputTemplate, elements = _e.elements;
    return (0, jsx_runtime_1.jsx)(InputInnerWrapper_1.default, __assign({}, props, { inputWrapper: (_b = (_a = props.inputWrapper) !== null && _a !== void 0 ? _a : inputTemplate) !== null && _b !== void 0 ? _b : undefined, inputElement: (_d = elements === null || elements === void 0 ? void 0 : elements[((_c = props === null || props === void 0 ? void 0 : props.type) !== null && _c !== void 0 ? _c : 'line')]) !== null && _d !== void 0 ? _d : null }, { children: props.children }));
};
exports.default = InputWrapperv2;
//# sourceMappingURL=index.js.map