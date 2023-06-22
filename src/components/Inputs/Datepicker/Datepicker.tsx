import React from 'react'
import { IDatePicker,  } from '../../core'
import InputWrapper from '../../core/InputWrapper'
import DatePickerComponent from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useInputValAndError } from '../../core/hook/useInputValnError';


const DatePicker = (props: IDatePicker) => {
  
  const {value, setValue} = useInputValAndError(props.name)
  // const {watch, setValue} = useFormContext()
  // const _val = watch(props.name)
  // const val = useMemo(() => value ,[value])
  // console.log('DatePicker -  value', value)

  return (
    <InputWrapper {...props} noBorder>
      <DatePickerComponent selected={value} onChange={(a)=>setValue(props.name, a)} id={props.id} {...props.options}/>
    </InputWrapper>
  )
}


export default DatePicker