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
const core_1 = require("../../core");
const styled_components_1 = __importDefault(require("styled-components"));
const YesNo = (props) => {
    return (react_1.default.createElement(core_1.InputWrapper, Object.assign({}, props, { id: `${props.name}`, noLabel: true, noBorder: true, customClasses: { wrapperClassName: 'form-check' } }), (IWprops) => {
        return react_1.default.createElement(RadioWrapper, Object.assign({}, props, IWprops));
    }));
};
const Button = styled_components_1.default.button `
  padding: 10px;
  border-radius: 5px;
  border-color: ${({ active }) => active ? 'black' : 'transparent'};
  margin: 5px;
  background-color: ${({ bgColor }) => bgColor !== null && bgColor !== void 0 ? bgColor : '#44b5ee2'};
  color: ${({ active }) => active ? 'black' : 'white'};;
  width:100%;
  cursor: pointer;
  transition : all 0.3s ease-in-out;
  box-shadow: none;
  filter: brightness(${({ active }) => active ? '110%' : '100%'});

  &:hover {
    filter : brightness(110%);    
    box-shadow: 1px 1px 10px 1px #989696;
  }
`;
const RadioWrapper = (props) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
    const [value, setValue] = (0, react_1.useState)(undefined);
    const buttonHandler = (0, react_1.useCallback)((val, extHandler) => {
        if (extHandler) {
            extHandler(val).then(a => { if (a) {
                props.onChange(val);
                setValue(val);
            } });
        }
        else {
            props.onChange(val);
            setValue(val);
        }
    }, []);
    const buttonGenerator = (label, valueOfButton, extHandler, ButtonElem, color, key) => {
        return react_1.default.createElement(ButtonElem, { className: props.inputClass, style: Object.assign({}, props.inputStyle), active: valueOfButton === value, key: key !== null && key !== void 0 ? key : `yng-${props.name}-${valueOfButton}`, type: "button", onClick: () => buttonHandler(valueOfButton, extHandler), bgColor: color }, label);
    };
    return react_1.default.createElement("div", { style: Object.assign(Object.assign({ display: 'flex', width: 100 * (2 + (props.otherOptions ? props.otherOptions.length : 0)) }, props.wrapperStyle), props.style), className: `${props.className} ${props.wrapperClass}` },
        buttonGenerator((_a = (props.yes && props.yes.label)) !== null && _a !== void 0 ? _a : 'Yes', (_c = (_b = props === null || props === void 0 ? void 0 : props.yes) === null || _b === void 0 ? void 0 : _b.value) !== null && _c !== void 0 ? _c : true, (_d = props.yes) === null || _d === void 0 ? void 0 : _d.extHandler, (_f = (_e = props.yes) === null || _e === void 0 ? void 0 : _e.element) !== null && _f !== void 0 ? _f : Button, (_h = (_g = props.yes) === null || _g === void 0 ? void 0 : _g.color) !== null && _h !== void 0 ? _h : 'green'),
        buttonGenerator((_j = (props.no && props.no.label)) !== null && _j !== void 0 ? _j : 'No', (_l = (_k = props === null || props === void 0 ? void 0 : props.no) === null || _k === void 0 ? void 0 : _k.value) !== null && _l !== void 0 ? _l : false, (_m = props.no) === null || _m === void 0 ? void 0 : _m.extHandler, (_p = (_o = props.no) === null || _o === void 0 ? void 0 : _o.element) !== null && _p !== void 0 ? _p : Button, (_r = (_q = props.no) === null || _q === void 0 ? void 0 : _q.color) !== null && _r !== void 0 ? _r : 'red'),
        props.otherOptions && props.otherOptions.map((option, i) => { var _a, _b, _c, _d; return buttonGenerator((_a = option.label) !== null && _a !== void 0 ? _a : `Option ${i}`, (_b = option.value) !== null && _b !== void 0 ? _b : i, option.extHandler, (_c = option.element) !== null && _c !== void 0 ? _c : Button, (_d = option.color) !== null && _d !== void 0 ? _d : '#22ffff4', `yn-${props.name}-eo-${i}`); }));
};
exports.default = YesNo;
//# sourceMappingURL=YesNo.js.map