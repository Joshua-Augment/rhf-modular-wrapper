import React, { useEffect } from 'react'
import { LineInputProps } from '../../core'
import InputWrapper from '../../core/InputWrapper'
import { useInputValAndError } from '../../core/hook/useInputValnError'

const Line = (props: LineInputProps) => {
  const {value, setValue} = useInputValAndError(props.name)
// console.log(`Line - ${props.name} - ${value}`)
  useEffect(()=>{
    if (props.type === 'number' && value === '') {       
    // console.log(`[Setting] Setting value for ${props.name} in line from ${value} to ${props.type === 'number' ? 0 : ''}`)
      setValue(props.name, props.type === 'number' ? 0 : '') 
    }
  },[value])

  const handleInput = (a:any) => {
  // console.log(`[Setting] Value changed! for ${props.name} in line from ${value} to ${a.target.value}`)
    setValue(props.name, a.target.value)
  }
  return (
    props?.type === "hidden" ?
      <input disabled={props.disabled} id={props.name} className={props?.customClasses?.inputClassName ?? ''} name={props.name} value={value !== undefined && value !== null ? value : ""} onChange={(a) => handleInput(a)} placeholder={props.placeholder} type={props.type ?? 'text'} /> :
    <InputWrapper {...props}>
      <input disabled={props.disabled} id={props.name} className={props?.customClasses?.inputClassName ?? ''} name={props.name} value={value !== undefined && value !== null ? value : ""} onChange={(a) => handleInput(a)} placeholder={props.placeholder} type={props.type ?? 'text'} />
    </InputWrapper>
  )
}
export default Line