import React, { useEffect } from 'react'
import { InputWrapper, ISwitch } from '../../core'
import {default as SwitchInput} from "react-switch";
import { useInputValAndError } from '../../core/hook/useInputValnError';

const Switch = (props:ISwitch) => {
  const {value, setValue} = useInputValAndError(props.name)

  useEffect(()=>{ if (value === null || value === undefined || value === '') {setValue(props.name, false)} },[value])

  return (
    <InputWrapper type={props.type ?? 'switch'} {...props} id={`${props.name}`} noBorder customClasses={{wrapperClassName:'form-check'}}>
      <div className={`d-block ${props.wrapperClass}`} style={{display:'flex',alignItems: 'center',flexDirection: 'column',...props.wrapperStyle}}>
        <SwitchInput className={props.inputClass} onChange={(a) => setValue(props.name, a)} checked={value} {...props.options} />
        {props.footLabel && <div className='text-muted text-center'>{props.footLabel && (value ? props.footLabel[1] : props.footLabel[0])}</div>}
      </div>
    </InputWrapper>
  )
}
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

export default Switch