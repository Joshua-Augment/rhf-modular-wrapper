import React, { useCallback, useEffect } from 'react'
import {  InputWrapper, IYesNo } from '../../core'
import styled from "styled-components"
import { useInputValAndError } from '../../core/hook/useInputValnError'

const YesNo = (props: IYesNo) => {
  const {value, setValue} = useInputValAndError(props.name)
  
  useEffect(()=>{
    if (value === undefined || value === '') {setValue(props.name, null)}
  },[value])

  const buttonHandler = useCallback((buttonVal: any, extHandler ?: ((someVal:string)=>Promise<boolean>))=>{
    if (extHandler) {
      extHandler(value).then(a => {if (a) {setValue(props.name, a)}})
    } else {setValue(props.name, buttonVal)}
  },[value])

  const buttonGenerator = (label: string, valueOfButton : any, extHandler : any, ButtonElem : React.FunctionComponent<any> & {children: any}, color: string, key ?: string) => {
    return <ButtonElem className={props.inputClass} style={{...props.inputStyle}} active={valueOfButton === value} key={key ?? `yng-${props.name}-${valueOfButton}`} type="button" onClick={()=>buttonHandler(valueOfButton,extHandler)} bgColor={color}>
      {label}
    </ButtonElem>
  }

  return (
    <InputWrapper {...props} id={`${props.name}`} noLabel noBorder customClasses={{wrapperClassName:'form-check'}}>
      <div style={{display:'flex',width:100*(2+ (props.otherOptions ? props.otherOptions.length : 0)),...props.wrapperStyle, ...props.style}} className={`${props.className} ${props.wrapperClass}`} >
        {buttonGenerator((props.yes && props.yes.label) ?? 'Yes', props?.yes?.value ?? true,props.yes?.extHandler, props.yes?.element ?? Button,  props.yes?.color ?? 'green')}
        {buttonGenerator((props.no && props.no.label) ?? 'No', props?.no?.value ?? false,props.no?.extHandler, props.no?.element ?? Button, props.no?.color ?? 'red')}
        {
          props.otherOptions && props.otherOptions.map((option,i) => buttonGenerator(option.label ?? `Option ${i}`,option.value ?? i, option.extHandler, option.element ?? Button, option.color ?? '#22ffff4', `yn-${props.name}-eo-${i}`))
        }   
      </div>
    </InputWrapper>
  )
}

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


export default YesNo