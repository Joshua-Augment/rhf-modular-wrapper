import React, { useEffect, useState } from 'react'
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
          return <DateWrapper {...IWProps} options={props.options} />
        }
      }
    </InputWrapper>
  )
}

interface IDateWrapper extends IFormFrameInjector<Date|null> {
  options: any
}
const DateWrapper = (props: IDateWrapper) => {
  const [value, setValue] = useState<Date|null>(props.value ?? new Date())

  useEffect(()=>{props.onChange(value)},[value])
  useEffect(()=>{if ((props.value && value && value.getTime() !== value.getTime()) || (props.value === null) ) {setValue(props.value)} },[props.value])

  return <DatePickerComponent selected={value} onChange={(a)=>setValue(a)} id={props.id} {...props.options}/>
}

export default DatePicker