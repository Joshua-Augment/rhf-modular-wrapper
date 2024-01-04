var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useContext } from 'react';
import Tooltip from '@mui/material/Tooltip';
import ErrorIcon from '@mui/icons-material/Error';
import InfoIcon from '@mui/icons-material/Info';
import { ThemeContext } from './Form';
import { useInputValAndError } from './hook/useInputValnError';
const InputElemWrapper = (props) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    const _l = useInputValAndError(props.name), { value, error } = _l, rest = __rest(_l, ["value", "error"]);
    const theme = useContext(ThemeContext);
    // const Element = props.element ?? 
    //   (theme.elements !== null && theme.elements[props.type] !== undefined ? theme.elements[props.type] : null) 
    const Wrapper = (_b = (_a = props.inputWrapper) !== null && _a !== void 0 ? _a : theme.inputTemplate) !== null && _b !== void 0 ? _b : null;
    const WrapElem = Wrapper !== null && Wrapper !== undefined ?
        React.createElement(Wrapper, Object.assign({}, props, { value: value }, rest)) :
        React.createElement("div", { style: Object.assign({ position: 'relative' }, props.style), className: `form-item-wrapper ${(_d = (_c = props === null || props === void 0 ? void 0 : props.customClasses) === null || _c === void 0 ? void 0 : _c.wrapperClassName) !== null && _d !== void 0 ? _d : ''}` }, props.reversedLabel === true ?
            React.createElement(React.Fragment, null,
                React.createElement("div", { className: `form-item-child-wrapper ${props.noBorder ? 'no-border' : ''}` }, props.children),
                React.createElement("label", { htmlFor: (_e = props.id) !== null && _e !== void 0 ? _e : props.name, className: (_g = (_f = props === null || props === void 0 ? void 0 : props.customClasses) === null || _f === void 0 ? void 0 : _f.labelClassName) !== null && _g !== void 0 ? _g : '', style: { marginLeft: '5px' } },
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
                React.createElement("label", { htmlFor: (_h = props.id) !== null && _h !== void 0 ? _h : props.name, className: (_k = (_j = props === null || props === void 0 ? void 0 : props.customClasses) === null || _j === void 0 ? void 0 : _j.labelClassName) !== null && _k !== void 0 ? _k : '', style: { marginRight: '5px' } },
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
    // const WrapElem = useMemo(()=>{
    //   // // console.log(`[WrapElem] - value for ${props.name} - `,props.value)
    //   // console.log(`[WrapElem] - child for ${props.name} - `,props.children)
    //   if (Wrapper !== null && Wrapper !== undefined) {
    //     return <Wrapper {...props} />
    //   } else {
    //     return <div style={{position: 'relative', ...props.style}} className={`form-item-wrapper ${props?.customClasses?.wrapperClassName ?? ''}`} >
    //       {
    //         props.reversedLabel === true ? 
    //         <>
    //           <div className={`form-item-child-wrapper ${props.noBorder ? 'no-border':''}`}>{props.children}</div>
    //           {<label htmlFor={props.id ?? props.name} className={props?.customClasses?.labelClassName ?? ''} style={{marginLeft:'5px'}}>
    //             {props.noBorder !== false && props.noLabel !== true && <span>{props.label} {' '}</span>}
    //             <span>{props.helperText && <Tooltip title={props.helperText}><InfoIcon style={{color:'blue',fontSize:'10px'}} /></Tooltip>} {' '}</span>
    //             <span>{error && <Tooltip title={error.message}><ErrorIcon style={{color:'red',fontSize:'10px'}} /></Tooltip>} {' '}</span>
    //           </label>}
    //         </> :
    //         <>             
    //           {<label htmlFor={props.id ?? props.name} className={props?.customClasses?.labelClassName ?? ''} style={{marginRight:'5px'}}>
    //             {props.noBorder !== false && props.noLabel !== true && <span>{props.label} {' '}</span>}
    //             <span>{props.helperText && <Tooltip title={props.helperText}><InfoIcon style={{color:'blue',fontSize:'10px'}} /></Tooltip>} {' '}</span>
    //             <span>{error && <Tooltip title={error.message}><ErrorIcon style={{color:'red',fontSize:'10px'}} /></Tooltip>} {' '}</span>
    //           </label>}
    //           <div className={`form-item-child-wrapper ${props.noBorder ? 'no-border':''}`}>{props.children}</div>
    //         </>
    //       }
    //     </div>
    //   }
    // },[value, error, props.options])
    // const clonedElement =  useMemo(()=>{
    //   if (Element !== undefined && Element !== null) {
    //     return React.cloneElement(<Element {...props} /> as any, {...props, onChange: (a:any) => setValue(props.name, a), value : value, error: error})
    //   } else {return null}
    // },[value, error])
    /* const clonedElement = Element !== undefined && Element !== null ?
      React.cloneElement(<Element {...props} /> as any, {
        ...props,
        children: null,
        onChange: (a:any) => rest.setValue('InputElemWrapper - clonedElement ', a),
        ...rest,
        source : 'InputElemWrapper',
        value : value,
        error: error
      }) :
      null */
    return WrapElem;
    /* return Element !== undefined && Element !== null ?
      <Controller
        name={props.name}
        control={rest.control}
        render={({field,formState}) => React.cloneElement(
          <Element {...props} /> as any,
          {
            ...props,
            ...rest,
            children: null,
            onChange: field.onChange,
            value : field.value,
            name: field.name,
            source : 'InputElemWrapper',
            error: formState.errors?.[field.name]
          })}
      />
    : WrapElem */
    // return Wrapper as JSX.Element
};
export default React.memo(InputElemWrapper);
//# sourceMappingURL=InputElemWrapper.js.map