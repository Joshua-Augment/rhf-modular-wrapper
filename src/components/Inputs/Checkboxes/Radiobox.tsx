import React, { useMemo } from 'react'
import { IRadiobox } from '../../core'
import InputWrapper from '../../core/InputWrapper'
import { RadioGroup, RadioButton, ReversedRadioButton } from "react-radio-buttons"
import "../../styling/Radiobox.css"
import { useFormContext } from 'react-hook-form'

const Radiobox = (props: IRadiobox) => {
  const {watch, setValue} = useFormContext()
  const _val = watch(props.name)
  const val = useMemo(() => _val ,[_val])

  return (
    <InputWrapper {...props} id={`${props.name}`} noLabel noBorder customClasses={{wrapperClassName:'form-check'}}>
      <span className="rb-item-wrapper">
        <RadioGroup horizontal={props.orientation === 'horizontal'} onChange={(a:any) => setValue(props.name,a)} value={val}>
        {
          props.options.map((option,i) => (option.reversed ? 
            <ReversedRadioButton rootColor="black" key={`${props.name}-opt-${i}`} value={option.value}>{option.label}</ReversedRadioButton> :
            <RadioButton rootColor="black" key={`${props.name}-opt-${i}`} value={option.value}>{option.label}</RadioButton>)
          )
        }
        </RadioGroup>
      </span>
    </InputWrapper>
  )
}




export default Radiobox