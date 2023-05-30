import React, { useMemo } from 'react';
import { InputWrapper } from '../../core';
import { default as SwitchInput } from "react-switch";
import { useFormContext } from 'react-hook-form';
const Switch = (props) => {
    const { watch, setValue } = useFormContext();
    const _val = watch(props.name);
    const val = useMemo(() => _val, [_val]);
    return (React.createElement(InputWrapper, Object.assign({}, props, { id: `${props.name}`, noBorder: true, customClasses: { wrapperClassName: 'form-check' } }),
        React.createElement("div", { className: `d-block ${props.wrapperClass}`, style: Object.assign({ display: 'flex', alignItems: 'center', flexDirection: 'column' }, props.wrapperStyle) },
            React.createElement(SwitchInput, Object.assign({ className: props.inputClass, onChange: (a) => setValue(props.name, a), checked: val }, props.options)),
            props.footLabel && React.createElement("div", { className: 'text-muted text-center' }, props.footLabel && (val ? props.footLabel[1] : props.footLabel[0])))));
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