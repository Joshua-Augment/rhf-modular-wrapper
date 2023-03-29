import React from 'react'
import { DatePicker, Select,AsyncSelect, WYSIWYGEditor, Line, Lines, YesNo, Checkbox, Radiobox } from '../Inputs'
import { TListItems } from './interfaces/lists'

const InputChooser = (props: TListItems) => {
  const OutputComponent = ()=>{
      switch(props.type) {
        case 'custom':
          const Elem = props.elem
          return <Elem {...props} />
        case 'yesno':
          return <YesNo {...props}/>
        case "checkbox":
          return <Checkbox {...props} />
        case "radiobox":
          return <Radiobox options={props.options} {...props} />
        case 'wysiwyg':
          return <WYSIWYGEditor {...props}/>
        case 'datepicker':
          return <DatePicker {...props}/>
        case 'select':
          return <Select {...props} options={props.options}/>
        case 'select_async':
          return <AsyncSelect {...props} options={props.options} loadOptions={props.loadOptions} />
        case 'textarea':
          return <Lines {...props}/>
        default:
          return <Line {...props}/>
    }
  }

  return OutputComponent()
}

export default InputChooser