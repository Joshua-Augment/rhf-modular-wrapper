import React from 'react'
import { LineInputProps } from '../../core'
import InputWrapper from '../../core/InputWrapper'
import { useInputValAndError } from '../../core/hook/useInputValnError'

const Line = (props: LineInputProps) => {
  const {value, setValue} = useInputValAndError(props.name)
  // const {watch, setValue} = useFormContext()
  // const _val = watch(props.name)
  // const value = useMemo(() => _val ,[_val])
  return (
    props?.type === "hidden" ?
      <input disabled={props.disabled} id={props.name} className={props?.customClasses?.inputClassName ?? ''} name={props.name} value={value !== undefined && value !== null ? value : ""} onChange={(a) => setValue(props.name, a.target.value)} placeholder={props.placeholder} type={props.type ?? 'text'} /> :
    <InputWrapper {...props}>
      <input disabled={props.disabled} id={props.name} className={props?.customClasses?.inputClassName ?? ''} name={props.name} value={value !== undefined && value !== null ? value : ""} onChange={(a) => setValue(props.name, a.target.value)} placeholder={props.placeholder} type={props.type ?? 'text'} />
    </InputWrapper>
  )
}
export default Line