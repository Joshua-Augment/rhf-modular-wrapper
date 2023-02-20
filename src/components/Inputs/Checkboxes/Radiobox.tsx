import React from 'react'
import { IRadiobox, IFormFrameInjector } from '../../core'
import InputWrapper from '../../core/InputWrapper'

const Radiobox = (props: IRadiobox) => {
  return (
    <InputWrapper {...props} reversedLabel customClasses={{wrapperClassName:'form-check'}}>
      {
        (IWprops:IFormFrameInjector) => {
          console.log("[props] - ",props)
          console.log("[IWprops] - ",IWprops)
          console.log(`[checked] [${props.name}] (Vakue : ${props.value}) - ${props.value === IWprops.value}`)
          return <input id={props.name} type="radio" name={props.name} checked={props.value === IWprops.value} value={props.value} onChange={(a) => IWprops.onChange(props.value)} />
        }
      }
    </InputWrapper>
  )
}

export default Radiobox