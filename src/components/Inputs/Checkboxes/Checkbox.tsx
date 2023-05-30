import React, { useMemo } from 'react'
import { ICheckbox } from '../../core'
import InputWrapper from '../../core/InputWrapper'
import { useFormContext } from 'react-hook-form'

const Checkbox = (props: ICheckbox) => {
  const {watch, setValue} = useFormContext()
  const _val = watch(props.name)
  const val = useMemo(() => _val ,[_val])

  return (    
    <InputWrapper {...props} reversedLabel customClasses={{wrapperClassName:'form-check'}} style={{display:'flex', alignItems:'center'}}>
      <input id={props.name} type="checkbox" name={props.name} checked={val} value={val} onChange={(a) => setValue(props.name, a.target.checked)} />
    </InputWrapper>
  )
}

export default Checkbox