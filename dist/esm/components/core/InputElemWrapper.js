import React, { useContext, useMemo } from 'react';
import Tooltip from '@mui/material/Tooltip';
import ErrorIcon from '@mui/icons-material/Error';
import InfoIcon from '@mui/icons-material/Info';
import { ThemeContext } from './Form';
const InputElemWrapper = (props) => {
    var _a, _b;
    const Wrapper = (_b = (_a = props.inputWrapper) !== null && _a !== void 0 ? _a : useContext(ThemeContext).inputTemplate) !== null && _b !== void 0 ? _b : null;
    // <div style={{position: 'relative'}} className={`form-item-wrapper ${props?.customClasses?.wrapperClassName ?? ''}`} >
    //     {
    //       props.reversedLabel === true ? 
    //       <>
    //         <div className={`form-item-child-wrapper ${props.noBorder ? 'no-border':''}`}>{props.children}</div>
    //         {props.noLabel !== true && <label htmlFor={props.id ?? props.name} className={props?.customClasses?.labelClassName ?? ''}>
    //           {props.noBorder !== false && <span>{props.label} {' '}</span>}
    //           <span>{props.helperText && <Tooltip title={props.helperText}><InfoIcon style={{color:'blue',fontSize:'10px'}} /></Tooltip>} {' '}</span>
    //           <span>{props.errors && <Tooltip title={props.errors.message}><ErrorIcon style={{color:'red',fontSize:'10px'}} /></Tooltip>} {' '}</span>
    //         </label>}
    //       </> :
    //       <>             
    //         {props.noLabel !== true && <label htmlFor={props.id ?? props.name} className={props?.customClasses?.labelClassName ?? ''}>
    //           {props.noBorder !== false && <span>{props.label} {' '}</span>}
    //           <span>{props.helperText && <Tooltip title={props.helperText}><InfoIcon style={{color:'blue',fontSize:'10px'}} /></Tooltip>} {' '}</span>
    //           <span>{props.errors && <Tooltip title={props.errors.message}><ErrorIcon style={{color:'red',fontSize:'10px'}} /></Tooltip>} {' '}</span>
    //         </label>}
    //         <div className={`form-item-child-wrapper ${props.noBorder ? 'no-border':''}`}>{props.children}</div>
    //       </>
    //     }
    //   </div>
    const WrapElem = useMemo(() => {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        console.log(`[WrapElem] - value for ${props.name} - `, props.value);
        console.log(`[WrapElem] - child for ${props.name} - `, props.children);
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
                            props.errors && React.createElement(Tooltip, { title: props.errors.message },
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
                            props.errors && React.createElement(Tooltip, { title: props.errors.message },
                                React.createElement(ErrorIcon, { style: { color: 'red', fontSize: '10px' } })),
                            " ",
                            ' ')),
                    React.createElement("div", { className: `form-item-child-wrapper ${props.noBorder ? 'no-border' : ''}` }, props.children)));
        }
    }, [props.value, props.options]);
    return WrapElem;
    // return Wrapper as JSX.Element
};
export default InputElemWrapper;
//# sourceMappingURL=InputElemWrapper.js.map