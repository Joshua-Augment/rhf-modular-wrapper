import React, { useMemo } from 'react'
import { IDatePicker,  } from '../../core'
import InputWrapper from '../../core/InputWrapper'
import DatePickerComponent from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useFormContext } from 'react-hook-form';


const DatePicker = (props: IDatePicker) => {
  
  const {watch, setValue} = useFormContext()
  const _val = watch(props.name)
  const val = useMemo(() => _val ,[_val])


  return (
    <InputWrapper {...props} noBorder>
      <DatePickerComponent selected={val} onChange={(a)=>setValue(props.name, a)} id={props.id} {...props.options}/>
    </InputWrapper>
  )
}


export default DatePicker