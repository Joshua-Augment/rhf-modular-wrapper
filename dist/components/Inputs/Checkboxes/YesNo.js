import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import InputWrapper from "../../core/InputWrapper";
import styled from "styled-components";
const YesNo = (props) => {
    return (_jsx(InputWrapper, Object.assign({ type: props.yesno }, props, { id: `${props.name}`, noLabel: true, noBorder: true, customClasses: { wrapperClassName: 'form-check' } }, { children: _jsx(_YesNo, Object.assign({}, props)) })));
};
const _YesNo = (props) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
    const buttonHandler = (buttonVal, extHandler) => {
        if (extHandler) {
            extHandler(props.value).then(a => { if (a) {
                props.onChange(a);
            } });
        }
        else {
            props.onChange(buttonVal);
        }
    };
    const buttonGenerator = (label, valueOfButton, extHandler, ButtonElem, color, key) => {
        return _jsx(ButtonElem, Object.assign({ className: props.inputClass, style: Object.assign({}, props.inputStyle), active: valueOfButton === props.value, type: "button", onClick: () => buttonHandler(valueOfButton, extHandler), bgColor: color }, { children: label }), key !== null && key !== void 0 ? key : `yng-${props.name}-${valueOfButton}`);
    };
    return _jsxs("div", Object.assign({ style: Object.assign(Object.assign({ display: 'flex', width: 100 * (2 + (props.otherOptions ? props.otherOptions.length : 0)) }, props.wrapperStyle), props.style), className: `${props.className} ${props.wrapperClass}` }, { children: [buttonGenerator((_a = (props.yes && props.yes.label)) !== null && _a !== void 0 ? _a : 'Yes', (_c = (_b = props === null || props === void 0 ? void 0 : props.yes) === null || _b === void 0 ? void 0 : _b.value) !== null && _c !== void 0 ? _c : true, (_d = props.yes) === null || _d === void 0 ? void 0 : _d.extHandler, (_f = (_e = props.yes) === null || _e === void 0 ? void 0 : _e.element) !== null && _f !== void 0 ? _f : Button, (_h = (_g = props.yes) === null || _g === void 0 ? void 0 : _g.color) !== null && _h !== void 0 ? _h : 'green'), buttonGenerator((_j = (props.no && props.no.label)) !== null && _j !== void 0 ? _j : 'No', (_l = (_k = props === null || props === void 0 ? void 0 : props.no) === null || _k === void 0 ? void 0 : _k.value) !== null && _l !== void 0 ? _l : false, (_m = props.no) === null || _m === void 0 ? void 0 : _m.extHandler, (_p = (_o = props.no) === null || _o === void 0 ? void 0 : _o.element) !== null && _p !== void 0 ? _p : Button, (_r = (_q = props.no) === null || _q === void 0 ? void 0 : _q.color) !== null && _r !== void 0 ? _r : 'red'), props.otherOptions && props.otherOptions.map((option, i) => { var _a, _b, _c, _d; return buttonGenerator((_a = option.label) !== null && _a !== void 0 ? _a : `Option ${i}`, (_b = option.value) !== null && _b !== void 0 ? _b : i, option.extHandler, (_c = option.element) !== null && _c !== void 0 ? _c : Button, (_d = option.color) !== null && _d !== void 0 ? _d : '#22ffff4', `yn-${props.name}-eo-${i}`); })] }));
};
const Button = styled.button `
  padding: 10px;
  border-radius: 5px;
  border-color: ${({ active }) => active ? 'black' : 'transparent'};
  margin: 5px;
  font-size: 1.2em;
  background-color: ${({ bgColor, active }) => active ? (bgColor !== null && bgColor !== void 0 ? bgColor : '#44b5ee2') : 'gainsboro'};
  color: ${({ active, bgColor }) => active ? 'white' : (bgColor !== null && bgColor !== void 0 ? bgColor : '#44b5ee2')};;
  width:100%;
  font-weight: bold;
  cursor: pointer;
  transition : all 0.3s ease-in-out;
  box-shadow: none;
  filter: brightness(${({ active }) => active ? '110%' : '100%'});

  &:hover {
    filter : brightness(110%);    
    box-shadow: 1px 1px 10px 1px ${({ active, bgColor }) => active ? (bgColor !== null && bgColor !== void 0 ? bgColor : '#44b5ee2') : '#989696'};
  }
`;
export default YesNo;
//# sourceMappingURL=YesNo.js.map