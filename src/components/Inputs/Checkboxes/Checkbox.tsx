import React from 'react'
import { ICheckbox, IFormFrameInjector } from '../../core'
import InputWrapper from '../../core/InputWrapper'

const Checkbox = (props: ICheckbox) => {
  return (    
    <InputWrapper {...props} reversedLabel customClasses={{wrapperClassName:'form-check'}}>
      {
        (IWprops:IFormFrameInjector) => {
          if (IWprops.value === undefined) {IWprops.onChange(false)}
          return <input id={props.name} type="checkbox" name={props.name} value={IWprops.value} onChange={IWprops.onChange} />
        }
      }
    </InputWrapper>
  )
}

export default Checkbox