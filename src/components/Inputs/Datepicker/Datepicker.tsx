import React from 'react'
import { IDatePicker, IFormFrameInjector } from '../../core'
import InputWrapper from '../../core/InputWrapper'
import DatePickerComponent from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const DatePicker = (props: IDatePicker) => {
  return (
    <InputWrapper {...props} noBorder>
      {
        (IWProps:IFormFrameInjector) => {
          console.log(`[Datepickerprops] - ${props.name}`,IWProps)
          return <DatePickerComponent selected={IWProps.value} onChange={(a)=>IWProps.onChange(a)} id={props.id} {...props.options}/>
        }
      }
    </InputWrapper>
  )
}

export default DatePicker