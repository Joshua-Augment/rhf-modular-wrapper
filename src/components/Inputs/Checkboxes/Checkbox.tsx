import React from 'react'
import { ICheckbox, IFormFrameInjector } from '../../core'
import InputWrapper from '../../core/InputWrapper'

const Checkbox = (props: ICheckbox) => {
  return (    
    <InputWrapper {...props} reversedLabel customClasses={{wrapperClassName:'form-check'}}>
      {
        (IWprops:IFormFrameInjector) => {
          if (IWprops.value === undefined) {IWprops.onChange(false)}
          return <CheckBoxWrapper  {...props} {...IWprops}/>
        }
      }
    </InputWrapper>
  )
}

const CheckBoxWrapper = (props:any) => {

  // useEffect(()=>{
  //   if (props)
  // },[props.value])

  return <input id={props.name} type="checkbox" name={props.name} checked={props.value} value={props.value} onChange={props.onChange} />
}

export default Checkbox