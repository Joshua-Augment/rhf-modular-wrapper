import React from 'react'
import { ICheckbox } from '../../core'
import InputWrapper from '../../core/InputWrapper'
// import { useInputValAndError } from '../../core/hook/useInputValnError'

const Checkbox = (props: ICheckbox) => {
  // const {value, setValue} = useInputValAndError(props.name)

  // const {watch, setValue} = useFormContext()
  // const _val = watch(props.name)
  // const val = useMemo(() => _val ,[_val])

  return (    
    <InputWrapper type={props.type ?? 'checkbox'} {...props} reversedLabel customClasses={{wrapperClassName:'form-check'}} style={{display:'flex', alignItems:'center'}}>
      <_Checkbox {...props} />
    </InputWrapper>
  )
}

const _Checkbox = (props: any) => {
  // useEffect(()=>{ if (props.value === undefined || props.value === null || props.value === '') { props.onChange( false) } },[props.value])

  return <input id={props.name} type="checkbox" name={props.name} checked={props.value} value={props.value} onChange={(a) => props.onChange(a.target.checked)} />
}

export default Checkbox