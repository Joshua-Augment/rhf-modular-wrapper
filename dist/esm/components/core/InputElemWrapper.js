import React, { useContext, useMemo } from 'react';
import Tooltip from '@mui/material/Tooltip';
import ErrorIcon from '@mui/icons-material/Error';
import InfoIcon from '@mui/icons-material/Info';
import { ThemeContext } from './Form';
import { useInputValAndError } from './hook/useInputValnError';
const InputElemWrapper = (props) => {
    var _a, _b, _c;
    const theme = useContext(ThemeContext);
    const { value, error, setValue } = useInputValAndError(props.name);
    const Element = (_a = props.element) !== null && _a !== void 0 ? _a : (theme.elements !== null && theme.elements[props.type] !== undefined ? theme.elements[props.type] : null);
    const Wrapper = (_c = (_b = props.inputWrapper) !== null && _b !== void 0 ? _b : theme.inputTemplate) !== null && _c !== void 0 ? _c : null;
    const WrapElem = useMemo(() => {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        // // console.log(`[WrapElem] - value for ${props.name} - `,props.value)
        // console.log(`[WrapElem] - child for ${props.name} - `,props.children)
        if (Wrapper !== null && Wrapper !== undefined) {
            return React.createElement(Wrapper, Object.assign({}, props));
        }
        else {
            return React.createElement("div", { style: Object.assign({ position: 'relative' }, props.style), className: `form-item-wrapper ${(_b = (_a = props === null || props === void 0 ? void 0 : props.customClasses) === null || _a === void 0 ? void 0 : _a.wrapperClassName) !== null && _b !== void 0 ? _b : ''}` }, props.reversedLabel === true ?
                React.createElement(React.Fragment, null,
                    React.createElement("div", { className: `form-item-child-wrapper ${props.noBorder ? 'no-border' : ''}` }, props.children),
                    React.createElement("label", { htmlFor: (_c = props.id) !== null && _c !== void 0 ? _c : props.name, className: (_e = (_d = props === null || props === void 0 ? void 0 : props.customClasses) === null || _d === void 0 ? void 0 : _d.labelClassName) !== null && _e !== void 0 ? _e : '', style: { marginLeft: '5px' } },
                        props.noBorder !== false && props.noLabel !== true && React.createElement("span", null,
                            props.label,
                            " ",
                            ' '),
                        React.createElement("span", null,
                            props.helperText && React.createElement(Tooltip, { title: props.helperText },
                                React.createElement(InfoIcon, { style: { color: 'blue', fontSize: '10px' } })),
                            " ",
                            ' '),
                        React.createElement("span", null,
                            error && React.createElement(Tooltip, { title: error.message },
                                React.createElement(ErrorIcon, { style: { color: 'red', fontSize: '10px' } })),
                            " ",
                            ' '))) :
                React.createElement(React.Fragment, null,
                    React.createElement("label", { htmlFor: (_f = props.id) !== null && _f !== void 0 ? _f : props.name, className: (_h = (_g = props === null || props === void 0 ? void 0 : props.customClasses) === null || _g === void 0 ? void 0 : _g.labelClassName) !== null && _h !== void 0 ? _h : '', style: { marginRight: '5px' } },
                        props.noBorder !== false && props.noLabel !== true && React.createElement("span", null,
                            props.label,
                            " ",
                            ' '),
                        React.createElement("span", null,
                            props.helperText && React.createElement(Tooltip, { title: props.helperText },
                                React.createElement(InfoIcon, { style: { color: 'blue', fontSize: '10px' } })),
                            " ",
                            ' '),
                        React.createElement("span", null,
                            error && React.createElement(Tooltip, { title: error.message },
                                React.createElement(ErrorIcon, { style: { color: 'red', fontSize: '10px' } })),
                            " ",
                            ' ')),
                    React.createElement("div", { className: `form-item-child-wrapper ${props.noBorder ? 'no-border' : ''}` }, props.children)));
        }
    }, [value, error, props.options]);
    const clonedElement = useMemo(() => {
        if (Element !== undefined && Element !== null) {
            return React.cloneElement(React.createElement(Element, Object.assign({}, props)), Object.assign(Object.assign({}, props), { onChange: (a) => setValue(props.name, a), value: value, error: error }));
        }
        else {
            return null;
        }
    }, [value, error]);
    return clonedElement !== undefined && clonedElement !== null ? clonedElement : WrapElem;
    // return Wrapper as JSX.Element
};
export default InputElemWrapper;
//# sourceMappingURL=InputElemWrapper.js.map