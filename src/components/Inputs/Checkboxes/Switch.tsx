import React, { useEffect, useState } from 'react'
import { IFormFrameInjector, InputWrapper, ISwitch } from '../../core'
import {default as SwitchInput} from "react-switch";

const Switch = (props:ISwitch) => {
  return (
    <InputWrapper {...props} id={`${props.name}`} noBorder customClasses={{wrapperClassName:'form-check'}}>
      {
        (IWprops:IFormFrameInjector) => {
          return <SwitchContainer {...props} {...IWprops} />
        }
      }
    </InputWrapper>
  )
}
interface ISwitchContainer extends ISwitch,IFormFrameInjector {}

const SwitchContainer = (props:ISwitchContainer) => {
  const [value, setValue] = useState(false)

  useEffect(()=>{
    if (value !== props.value) {
      setValue(props.value)
    }
  },[props.value, value])

  return <div className={`d-block ${props.wrapperClass}`} style={props.wrapperStyle}>
    <SwitchInput className={props.inputClass} onChange={props.onChange} checked={props.value} />
    <div className='text-muted text-center'>{props.footLabel && (value ? props.footLabel[1] : props.footLabel[0])}</div>
  </div>

}

export default Switch