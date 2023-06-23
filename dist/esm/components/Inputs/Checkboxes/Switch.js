import React, { useEffect } from 'react';
import { InputWrapper } from '../../core';
import { default as SwitchInput } from "react-switch";
import { useInputValAndError } from '../../core/hook/useInputValnError';
const Switch = (props) => {
    const { value, setValue } = useInputValAndError(props.name);
    useEffect(() => { if (value === null || value === undefined || value === '') {
        setValue(props.name, false);
    } }, [value]);
    return (React.createElement(InputWrapper, Object.assign({}, props, { id: `${props.name}`, noBorder: true, customClasses: { wrapperClassName: 'form-check' } }),
        React.createElement("div", { className: `d-block ${props.wrapperClass}`, style: Object.assign({ display: 'flex', alignItems: 'center', flexDirection: 'column' }, props.wrapperStyle) },
            React.createElement(SwitchInput, Object.assign({ className: props.inputClass, onChange: (a) => setValue(props.name, a), checked: value }, props.options)),
            props.footLabel && React.createElement("div", { className: 'text-muted text-center' }, props.footLabel && (value ? props.footLabel[1] : props.footLabel[0])))));
};
// interface ISwitchContainer extends ISwitch,IFormFrameInjector {}
// const SwitchContainer = (props:ISwitchContainer) => {
//   const [value, setValue] = useState(false)
//   useEffect(()=>{
//     if (value !== props.value) {
//       setValue(props.value)
//     }
//   },[props.value, value])
//   return <div className={`d-block ${props.wrapperClass}`} style={props.wrapperStyle}>
//     <SwitchInput className={props.inputClass} onChange={props.onChange} checked={props.value} />
//     <div className='text-muted text-center'>{props.footLabel && (value ? props.footLabel[1] : props.footLabel[0])}</div>
//   </div>
// }
export default Switch;
//# sourceMappingURL=Switch.js.map