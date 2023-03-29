import React, { useCallback, useEffect, useState } from 'react'
import { IFormFrameInjector, InputWrapper, IYesNo } from '../../core'
import styled from "styled-components"

const YesNo = (props: IYesNo) => {
  
  return (
    <InputWrapper {...props} id={`${props.name}`} noLabel noBorder customClasses={{wrapperClassName:'form-check'}}>
      {
        (IWprops:IFormFrameInjector) => {
          return <RadioWrapper {...props} {...IWprops} />
        }
      }
    </InputWrapper>
  )
}

interface IRadioWrapper extends IYesNo, IFormFrameInjector<any> {}

const Button = styled.button`
  padding: 10px;
  border-radius: 5px;
  border-color: ${({active}) => active ? 'black' : 'transparent'};
  margin: 5px;
  background-color: ${({bgColor}) => bgColor ?? '#44b5ee2'};
  color: ${({active}) => active ? 'black' : 'white'};;
  width:100%;
  cursor: pointer;
  transition : all 0.3s ease-in-out;
  box-shadow: none;
  filter: brightness(${({active}) => active ? '110%' : '100%'});

  &:hover {
    filter : brightness(110%);    
    box-shadow: 1px 1px 10px 1px #989696;
  }
`

const RadioWrapper = (props : IRadioWrapper) => { 
  const [value, setValue] = useState<any>(undefined)

  useEffect(()=>{
    if (props.value !== undefined && props.value !== value) {
      const isYes = props.yes?.value ? props.value  === props.yes.value : props.value

      buttonHandler(props.value, isYes ? props.yes?.extHandler : props.no?.extHandler)
    }
  },[props.value,value])

  const buttonHandler = useCallback((val: any, extHandler ?: ((val:string)=>Promise<boolean>))=>{
    if (extHandler) {
      extHandler(val).then(a => {if (a) {props.onChange(val); setValue(val)}})
    } else {props.onChange(val); setValue(val)}
  },[])

  const buttonGenerator = (label: string, valueOfButton : any, extHandler : any, ButtonElem : React.FunctionComponent<any> & {children: any}, color: string, key ?: string) => {
    return <ButtonElem className={props.inputClass} style={{...props.inputStyle}} active={valueOfButton === value} key={key ?? `yng-${props.name}-${valueOfButton}`} type="button" onClick={()=>buttonHandler(valueOfButton,extHandler)} bgColor={color}>
      {label}
    </ButtonElem>
  }

  return <div style={{display:'flex',width:100*(2+ (props.otherOptions ? props.otherOptions.length : 0)),...props.wrapperStyle, ...props.style}} className={`${props.className} ${props.wrapperClass}`} >
    {buttonGenerator((props.yes && props.yes.label) ?? 'Yes', props?.yes?.value ?? true,props.yes?.extHandler, props.yes?.element ?? Button,  props.yes?.color ?? 'green')}
    {buttonGenerator((props.no && props.no.label) ?? 'No', props?.no?.value ?? false,props.no?.extHandler, props.no?.element ?? Button, props.no?.color ?? 'red')}
    {
      props.otherOptions && props.otherOptions.map((option,i) => buttonGenerator(option.label ?? `Option ${i}`,option.value ?? i, option.extHandler, option.element ?? Button, option.color ?? '#22ffff4', `yn-${props.name}-eo-${i}`))
    }   
  </div>
}



export default YesNo