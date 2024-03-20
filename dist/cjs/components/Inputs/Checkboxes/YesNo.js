"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var styled_components_1 = __importDefault(require("styled-components"));
var YesNo = function (props) {
    return ((0, jsx_runtime_1.jsx)(index_1.default, __assign({ empty: false, type: props.yesno }, props, { id: "".concat(props.name), noLabel: true, noBorder: true, customClasses: { wrapperClassName: "form-check" } }, { children: (0, jsx_runtime_1.jsx)(_YesNo, __assign({}, props)) })));
};
var _YesNo = function (props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
    var buttonHandler = function (buttonVal, extHandler) {
        if (extHandler) {
            extHandler(props.value).then(function (a) {
                if (a) {
                    props.onChange(a);
                }
            });
        }
        else {
            props.onChange(buttonVal);
        }
    };
    var buttonGenerator = function (label, valueOfButton, extHandler, ButtonElem, color, key) {
        return ((0, jsx_runtime_1.jsx)(ButtonElem, __assign({ className: props.inputClass, style: __assign({}, props.inputStyle), active: valueOfButton === props.value, type: "button", onClick: function () { return buttonHandler(valueOfButton, extHandler); }, bgColor: color }, { children: label }), key !== null && key !== void 0 ? key : "yng-".concat(props.name, "-").concat(valueOfButton)));
    };
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ style: __assign(__assign({ display: "flex", width: 100 * (2 + (props.otherOptions ? props.otherOptions.length : 0)) }, props.wrapperStyle), props.style), className: "".concat(props.className, " ").concat(props.wrapperClass) }, { children: [buttonGenerator((_a = (props.yes && props.yes.label)) !== null && _a !== void 0 ? _a : "Yes", (_c = (_b = props === null || props === void 0 ? void 0 : props.yes) === null || _b === void 0 ? void 0 : _b.value) !== null && _c !== void 0 ? _c : true, (_d = props.yes) === null || _d === void 0 ? void 0 : _d.extHandler, (_f = (_e = props.yes) === null || _e === void 0 ? void 0 : _e.element) !== null && _f !== void 0 ? _f : Button, (_h = (_g = props.yes) === null || _g === void 0 ? void 0 : _g.color) !== null && _h !== void 0 ? _h : "green"), buttonGenerator((_j = (props.no && props.no.label)) !== null && _j !== void 0 ? _j : "No", (_l = (_k = props === null || props === void 0 ? void 0 : props.no) === null || _k === void 0 ? void 0 : _k.value) !== null && _l !== void 0 ? _l : false, (_m = props.no) === null || _m === void 0 ? void 0 : _m.extHandler, (_p = (_o = props.no) === null || _o === void 0 ? void 0 : _o.element) !== null && _p !== void 0 ? _p : Button, (_r = (_q = props.no) === null || _q === void 0 ? void 0 : _q.color) !== null && _r !== void 0 ? _r : "red"), props.otherOptions &&
                props.otherOptions.map(function (option, i) {
                    var _a, _b, _c, _d;
                    return buttonGenerator((_a = option.label) !== null && _a !== void 0 ? _a : "Option ".concat(i), (_b = option.value) !== null && _b !== void 0 ? _b : i, option.extHandler, (_c = option.element) !== null && _c !== void 0 ? _c : Button, (_d = option.color) !== null && _d !== void 0 ? _d : "#22ffff4", "yn-".concat(props.name, "-eo-").concat(i));
                })] })));
};
var Button = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 10px;\n  border-radius: 5px;\n  border-color: ", ";\n  margin: 5px;\n  font-size: 1.2em;\n  background-color: ", ";\n  color: ", ";\n  width: 100%;\n  font-weight: bold;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n  box-shadow: none;\n  filter: brightness(", ");\n\n  &:hover {\n    filter: brightness(110%);\n    box-shadow: 1px 1px 10px 1px ", ";\n  }\n"], ["\n  padding: 10px;\n  border-radius: 5px;\n  border-color: ", ";\n  margin: 5px;\n  font-size: 1.2em;\n  background-color: ", ";\n  color: ", ";\n  width: 100%;\n  font-weight: bold;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n  box-shadow: none;\n  filter: brightness(", ");\n\n  &:hover {\n    filter: brightness(110%);\n    box-shadow: 1px 1px 10px 1px ", ";\n  }\n"])), function (_a) {
    var active = _a.active;
    return (active ? "black" : "transparent");
}, function (_a) {
    var bgColor = _a.bgColor, active = _a.active;
    return (active ? bgColor !== null && bgColor !== void 0 ? bgColor : "#44b5ee2" : "gainsboro");
}, function (_a) {
    var active = _a.active, bgColor = _a.bgColor;
    return (active ? "white" : bgColor !== null && bgColor !== void 0 ? bgColor : "#44b5ee2");
}, function (_a) {
    var active = _a.active;
    return (active ? "110%" : "100%");
}, function (_a) {
    var active = _a.active, bgColor = _a.bgColor;
    return (active ? bgColor !== null && bgColor !== void 0 ? bgColor : "#44b5ee2" : "#989696");
});
exports.default = YesNo;
var templateObject_1;
//# sourceMappingURL=YesNo.js.map