import React from 'react'
import { IFormFrameInjector, LineInputProps } from '../../core'
import InputWrapper from '../../core/InputWrapper'

const Line = (props: LineInputProps) => {
  return (
    <InputWrapper {...props}>
      {
        (IWprops:IFormFrameInjector) => <input id={props.name} className={props?.customClasses?.inputClassName ?? ''} name={props.name} value={IWprops.value} onChange={IWprops.onChange} placeholder={props.placeholder} type={props.type ?? 'text'} />
      }
    </InputWrapper>
  )
}

export default Line