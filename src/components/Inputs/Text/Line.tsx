import React, { useEffect, useState } from 'react'
import { IFormFrameInjector, LineInputProps } from '../../core'
import InputWrapper from '../../core/InputWrapper'

const Line = (props: LineInputProps) => {
  return (
    <InputWrapper {...props}>
      {
        (IWprops:IFormFrameInjector) => <LineWrapper {...IWprops} {...props}  />
      }
    </InputWrapper>
  )
}

const LineWrapper = (props:any) => {
  const [value, setValue] = useState(props.value ?? props.defaultValue ??  '')
  const onChange = (a:any) => {props.onChange(a.target.value); setValue(a.target.value)}
  return <input id={props.name} className={props?.customClasses?.inputClassName ?? ''} name={props.name} value={value} onChange={onChange} placeholder={props.placeholder} type={props.type ?? 'text'} />
}
export default Line