import React from "react";
import { IDatePicker,  } from '../../core/index'
import InputWrapper from '../../core/InputWrapper/index'
import DatePickerComponent from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const DatePicker = (props: IDatePicker) => {
  
  return (
    <InputWrapper empty={new Date()} type={props.type ?? 'datepicker'} {...props} noBorder>
      <_DatePicker {...props} />
    </InputWrapper>
  )
}

const _DatePicker = (props: any) => {
  return <DatePickerComponent 
    // {...props.register(props.name)}
    selected={props.value} 
    value={props.value}
    onChange={(a)=>props.onChange(a)} 
    {...props.options}
    id={props.id} 
  />
}


export default DatePicker