import React, { useContext } from 'react';
import Tooltip from '@mui/material/Tooltip';
import ErrorIcon from '@mui/icons-material/Error';
import InfoIcon from '@mui/icons-material/Info';
import { ThemeContext } from './Form';
const InputElemWrapper = (props) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    const Wrapper = (_b = (_a = props.inputWrapper) !== null && _a !== void 0 ? _a : useContext(ThemeContext).inputTemplate) !== null && _b !== void 0 ? _b : React.createElement("div", { style: { position: 'relative' }, className: `form-item-wrapper ${(_d = (_c = props === null || props === void 0 ? void 0 : props.customClasses) === null || _c === void 0 ? void 0 : _c.wrapperClassName) !== null && _d !== void 0 ? _d : ''}` }, props.reversedLabel === true ?
        React.createElement(React.Fragment, null,
            React.createElement("div", { className: `form-item-child-wrapper ${props.noBorder ? 'no-border' : ''}` }, props.children),
            props.noLabel !== true && React.createElement("label", { htmlFor: (_e = props.id) !== null && _e !== void 0 ? _e : props.name, className: (_g = (_f = props === null || props === void 0 ? void 0 : props.customClasses) === null || _f === void 0 ? void 0 : _f.labelClassName) !== null && _g !== void 0 ? _g : '' },
                props.noBorder !== false && React.createElement("span", null,
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
            props.noLabel !== true && React.createElement("label", { htmlFor: (_h = props.id) !== null && _h !== void 0 ? _h : props.name, className: (_k = (_j = props === null || props === void 0 ? void 0 : props.customClasses) === null || _j === void 0 ? void 0 : _j.labelClassName) !== null && _k !== void 0 ? _k : '' },
                props.noBorder !== false && React.createElement("span", null,
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
    // const WrapElem = ()=>{
    //   if (Wrapper !== null && Wrapper !== undefined) {
    //     return <Wrapper {...props} />
    //   } else {
    //     return <div style={{position: 'relative'}} className={`form-item-wrapper ${props?.customClasses?.wrapperClassName ?? ''}`} >
    //       {
    //         props.reversedLabel === true ? 
    //         <>
    //           <div className={`form-item-child-wrapper ${props.noBorder ? 'no-border':''}`}>{props.children}</div>
    //           {props.noLabel !== true && <label htmlFor={props.id ?? props.name} className={props?.customClasses?.labelClassName ?? ''}>
    //             {props.noBorder !== false && <span>{props.label} {' '}</span>}
    //             <span>{props.helperText && <Tooltip title={props.helperText}><InfoIcon style={{color:'blue',fontSize:'10px'}} /></Tooltip>} {' '}</span>
    //             <span>{props.errors && <Tooltip title={props.errors.message}><ErrorIcon style={{color:'red',fontSize:'10px'}} /></Tooltip>} {' '}</span>
    //           </label>}
    //         </> :
    //         <>             
    //           {props.noLabel !== true && <label htmlFor={props.id ?? props.name} className={props?.customClasses?.labelClassName ?? ''}>
    //             {props.noBorder !== false && <span>{props.label} {' '}</span>}
    //             <span>{props.helperText && <Tooltip title={props.helperText}><InfoIcon style={{color:'blue',fontSize:'10px'}} /></Tooltip>} {' '}</span>
    //             <span>{props.errors && <Tooltip title={props.errors.message}><ErrorIcon style={{color:'red',fontSize:'10px'}} /></Tooltip>} {' '}</span>
    //           </label>}
    //           <div className={`form-item-child-wrapper ${props.noBorder ? 'no-border':''}`}>{props.children}</div>
    //         </>
    //       }
    //     </div>
    //   }
    // }
    // return WrapElem()
    return Wrapper;
};
export default InputElemWrapper;
//# sourceMappingURL=InputElemWrapper.js.map