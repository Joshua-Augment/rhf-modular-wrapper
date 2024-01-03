import React, { useEffect } from 'react'
import { IRadiobox } from '../../core'
import InputWrapper from '../../core/InputWrapper'
import { RadioGroup, RadioButton, ReversedRadioButton } from "react-radio-buttons"
import "../../styling/Radiobox.css"
// import { useInputValAndError } from '../../core/hook/useInputValnError'

const Radiobox = (props: IRadiobox) => {
  // const {watch, setValue} = useFormContext()
  // const _val = watch(props.name)
  // const val = useMemo(() => _val ,[_val])

  

  return (
    <InputWrapper type={props.type ?? 'radiobox'} {...props} id={`${props.name}`} noLabel noBorder customClasses={{wrapperClassName:'form-check'}}>
      <_Radiobox {...props} /> 
    </InputWrapper>
  )
}

const _Radiobox = (props: any) => {
  // console.log('[_Radiobox] - props  ',props)
  useEffect(()=> {
    // console.log('[_Radiobox] - props useEffect ', props)
    if (props.value === undefined || props.value === '' || props.value === null) {
      props.onChange(props.options[0].value)
    }
  },[props.value])

  return <span className="rb-item-wrapper">
    <RadioGroup horizontal={props.orientation === 'horizontal'} onChange={(a:any) => props.onChange(a)} value={props.value}>
    {
      props.options.map((option,i) => (option.reversed ? 
        <ReversedRadioButton rootColor="black" key={`${props.name}-opt-${i}`} value={option.value}>{option.label}</ReversedRadioButton> :
        <RadioButton rootColor="black" key={`${props.name}-opt-${i}`} value={option.value}>{option.label}</RadioButton>)
      )
    }
    </RadioGroup>
</span>
}



export default Radiobox