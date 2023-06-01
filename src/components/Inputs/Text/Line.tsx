import React, { useMemo } from 'react'
import { LineInputProps } from '../../core'
import {useFormContext} from "react-hook-form"
import InputWrapper from '../../core/InputWrapper'

const Line = (props: LineInputProps) => {
  const {watch, setValue} = useFormContext()
  const _val = watch(props.name)
  const val = useMemo(() => _val ,[_val])
  return (
    props?.type === "hidden" ?
      <input disabled={props.disabled} id={props.name} className={props?.customClasses?.inputClassName ?? ''} name={props.name} value={val === undefined ? "" : val} onChange={(a) => setValue(props.name, a.target.value)} placeholder={props.placeholder} type={props.type ?? 'text'} /> :
    <InputWrapper {...props}>
      <input disabled={props.disabled} id={props.name} className={props?.customClasses?.inputClassName ?? ''} name={props.name} value={val === undefined ? "" : val} onChange={(a) => setValue(props.name, a.target.value)} placeholder={props.placeholder} type={props.type ?? 'text'} />
    </InputWrapper>
  )
}
export default Line