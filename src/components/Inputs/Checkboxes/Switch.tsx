import React from 'react'
import { InputWrapper, ISwitch } from '../../core'
import {default as SwitchInput} from "react-switch";
import { useFormContext } from 'react-hook-form';

const Switch = (props:ISwitch) => {
  const {watch} = useFormContext()
  const _w = watch()
  // const {value, setValue} = useInputValAndError(props.name)

  // useEffect(()=>{ if (value === null || value === undefined || value === '') {setValue(props.name, false)} },[value])

  return (
  <>
    <p>{JSON.stringify(_w ?? {})}</p>
    <InputWrapper 
      type={props.type ?? 'switch'} 
      {...props} 
      id={`${props.name}`} 
      noBorder 
      customClasses={{wrapperClassName:'form-check'}}
      >
     <_Switch {...props} /> 
    </InputWrapper>
  </>
  )
}

const _Switch = (props: any) => {
  console.log(`[Switch] ${props.name} (Current : ${props.value})`,props)
  return <div className={`d-block ${props.wrapperClass}`} style={{display:'flex',alignItems: 'center',flexDirection: 'column',...props.wrapperStyle}}>
    <SwitchInput 
      {...props?.options ?? {}} 
      className={props?.inputClass} 
      onChange={(a) => props.onChange(a)} 
      checked={props.value ?? false} 
    />
    {props.footLabel && <div className='text-muted text-center'>{props.footLabel && (props.value ? props.footLabel[1] : props.footLabel[0])}</div>}
  </div>
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