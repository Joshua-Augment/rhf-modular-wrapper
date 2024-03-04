import React from 'react'
import { LineInputProps } from '../../core'
import InputWrapper from '../../core/InputWrapper'
import Logger from '../../core/Logger'
// import { useInputValAndError } from '../../core/hook/useInputValnError'

const Line = (props: LineInputProps) => {
  // const {value, setValue} = useInputValAndError(props.name)
  // useEffect(()=>{
  //   if (props.type === 'number' && props.value === '') {       
  //   // console.log(`[Setting] Setting value for ${props.name} in line from ${value} to ${props.type === 'number' ? 0 : ''}`)
  //     props.setValue(props.name, props.type === 'number' ? 0 : '') 
  //   }
  // },[props.value])

  // const handleInput = (a:any) => {
  // // console.log(`[Setting] Value changed! for ${props.name} in line from ${value} to ${a.target.value}`)
  //   setValue(props.name, a.target.value)
  // }
  return (
    // props?.type === "hidden" ?
    //   <input disabled={props.disabled} id={props.name} className={props?.customClasses?.inputClassName ?? ''} name={props.name} value={props.value !== undefined && props.value !== null ? props.value : ""} onChange={(a) => props.onChange && props.onChange(a.target.value)} placeholder={props.placeholder} type={props.type ?? 'text'} /> :
    <InputWrapper type={props.type ?? 'line'} {...props}>
      <_Line {...props} />
    </InputWrapper>
  )
}

const _Line = (props: any) => {
  Logger.info(props,'Line','start')
  Logger.info(null,null,'end')
  return <input 
    disabled={props.disabled} 
    id={props.name} 
    className={props?.customClasses?.inputClassName ?? ''} 
    {...props.register(props.name)}
    // name={props.name} 
    // value={props.value !== undefined && props.value !== null ? props.value : ""} 
    // onChange={handleChange} 
    placeholder={props.placeholder} 
    type={props.type ?? 'text'} 
  />
}

export default Line