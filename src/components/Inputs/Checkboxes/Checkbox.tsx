import React, { useEffect } from 'react'
import { ICheckbox } from '../../core'
import InputWrapper from '../../core/InputWrapper'
import { useInputValAndError } from '../../core/hook/useInputValnError'

const Checkbox = (props: ICheckbox) => {
  const {value, setValue} = useInputValAndError(props.name)

  useEffect(()=>{ if (value === undefined || value === null || value === '') { setValue(props.name, false) } },[value])
  // const {watch, setValue} = useFormContext()
  // const _val = watch(props.name)
  // const val = useMemo(() => _val ,[_val])

  return (    
    <InputWrapper type={props.type ?? 'checkbox'} {...props} reversedLabel customClasses={{wrapperClassName:'form-check'}} style={{display:'flex', alignItems:'center'}}>
      <input id={props.name} type="checkbox" name={props.name} checked={value} value={value} onChange={(a) => setValue(props.name, a.target.checked)} />
    </InputWrapper>
  )
}

export default Checkbox