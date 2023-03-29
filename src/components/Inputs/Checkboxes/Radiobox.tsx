import React, { useEffect, useState } from 'react'
import { IRadiobox, IFormFrameInjector } from '../../core'
import InputWrapper from '../../core/InputWrapper'
import { RadioGroup, RadioButton, ReversedRadioButton } from "react-radio-buttons"
import "../../styling/Radiobox.css"

const Radiobox = (props: IRadiobox) => {
  
  return (
    <InputWrapper {...props} id={`${props.name}`} noLabel noBorder customClasses={{wrapperClassName:'form-check'}}>
      {
        (IWprops:IFormFrameInjector) => {
          return <RadioWrapper {...props} {...IWprops} />
        }
      }
    </InputWrapper>
  )
}

interface IRadioWrapper extends IRadiobox, IFormFrameInjector<string> {}

const RadioWrapper = (props : IRadioWrapper) => {

  const [value, setValue]  = useState("")

  useEffect(()=>{ if (value !== props?.value) {setValue(props?.value)} },[value, props.value])

  return <span className="rb-item-wrapper">
    <RadioGroup horizontal={props.orientation === 'horizontal'} onChange={props.onChange} value={value}>
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