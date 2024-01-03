import React from 'react';
import InputWrapper from '../../core/InputWrapper';
// import { useInputValAndError } from '../../core/hook/useInputValnError'
const Line = (props) => {
    // const {value, setValue} = useInputValAndError(props.name)
    // useEffect(()=>{
    //   if (props.type === 'number' && props.value === '') {       
    //   // console.log(`[Setting] Setting value for ${props.name} in line from ${value} to ${props.type === 'number' ? 0 : ''}`)
    //     props.setValue(props.name, props.type === 'number' ? 0 : '') 
    //   }
    // },[props.value])
    var _a;
    // const handleInput = (a:any) => {
    // // console.log(`[Setting] Value changed! for ${props.name} in line from ${value} to ${a.target.value}`)
    //   setValue(props.name, a.target.value)
    // }
    return (
    // props?.type === "hidden" ?
    //   <input disabled={props.disabled} id={props.name} className={props?.customClasses?.inputClassName ?? ''} name={props.name} value={props.value !== undefined && props.value !== null ? props.value : ""} onChange={(a) => props.onChange && props.onChange(a.target.value)} placeholder={props.placeholder} type={props.type ?? 'text'} /> :
    React.createElement(InputWrapper, Object.assign({ type: (_a = props.type) !== null && _a !== void 0 ? _a : 'line' }, props),
        React.createElement(_Line, Object.assign({}, props))));
};
const _Line = (props) => {
    var _a, _b, _c;
    // const handleChange = (e:any) => {
    //   console.log(`_Line (HandleChange) - ${props.name} - props : `,e.target.value)
    //   if (props.onChange) {
    //     props.onChange(e.target.value)
    //   }
    // }
    // console.log(`_Line - ${props.name} [value : ${props.value}] props : `,props)
    return React.createElement("input", Object.assign({ disabled: props.disabled, id: props.name, className: (_b = (_a = props === null || props === void 0 ? void 0 : props.customClasses) === null || _a === void 0 ? void 0 : _a.inputClassName) !== null && _b !== void 0 ? _b : '' }, props.register(props.name), { 
        // name={props.name} 
        // value={props.value !== undefined && props.value !== null ? props.value : ""} 
        // onChange={handleChange} 
        placeholder: props.placeholder, type: (_c = props.type) !== null && _c !== void 0 ? _c : 'text' }));
};
export default Line;
//# sourceMappingURL=Line.js.map