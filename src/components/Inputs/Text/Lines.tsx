import React from 'react'
import { IFormFrameInjector, LinesInputProps } from '../../core'
import InputWrapper from '../../core/InputWrapper'

const Line = (props: LinesInputProps) => {
  return (
    <InputWrapper {...props}>
      {
        (IWprops:IFormFrameInjector) => {
          console.log("[props] - ",props)
          return <textarea id={IWprops.name} className={IWprops?.customClasses?.inputClassName ?? ''} name={IWprops.name} value={IWprops.value} onChange={IWprops.onChange} placeholder={IWprops.placeholder} rows={props.rows ?? 3} cols={props.cols} />
        }
      }
    </InputWrapper>
  )
}

export default Line