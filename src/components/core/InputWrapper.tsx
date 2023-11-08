import React, { useEffect, useMemo, useRef } from "react";
import InputElemWrapper from "./InputElemWrapper";
import { FormBaseInput } from "./interfaces";
import { useInputValAndError } from "./hook/useInputValnError";

const InputWrapper = (props: FormBaseInput) => {
  const firstUpdate = useRef(true)
  const {value, error, setValue, getValues, watch, ...rest} = useInputValAndError(props.name)

  const watchCalculated = props?.calculatedField?.find !== undefined ? watch(props.calculatedField.find) : null

// console.log(`For ${props.name}, error : `,rest.error)
  // On Value change
  useEffect(()=>{ if (props.defaultValue !== undefined) {
  // console.log(`[Setting] ${props.name} has a defaultValue of ${props.defaultValue} [${props.defaultValue === undefined ? 'Undefined' : 'Have'}]`);
    setValue(props.name, props.defaultValue);
  } },[props.defaultValue]) 
  
  useEffect(()=>{    
    // External Field
    if(props.externalStateSetter) {props.externalStateSetter(value)}
    // On Input Change
    if (props.onInputChange && !firstUpdate.current) {
      props.onInputChange(value, props.name, getValues(), {...rest, getValues, watch, setValue})
    }

    firstUpdate.current = false
  },[value])
  useEffect(()=>{ 
    // if(props.externalStateSetter) {props.externalStateSetter(watchValue ?? value)}

    // Calculated Fields
    if (props.calculatedField) {
      if (props.calculatedField.isPromise === true) {
        props.calculatedField.calculate(value,props.name,getValues(props.calculatedField.find), getValues())
        // .then(data => { contextSetValue(props.name, data) })
        .then(data => {
        // console.log(`[Setting] Setting value for ${props.name} by calculation (async)`)
           setValue(props.name, data) 
        })
      } else {
      // console.log(`[Setting] Setting value for ${props.name} by calculation`)
        setValue(props.name, props.calculatedField.calculate(value,props.name,getValues(props.calculatedField.find), getValues()))
      }
    }
  }, [watchCalculated])
  // const [_value, _setValue] = useState(null)
  // const methods = props.contextless === true ? {control:undefined, watch : (a:string) => null } : useFormContext();
  const child = useMemo(()=>{
    const Wrapper = (A ?: any, B ?:any, children ?: any) => {
      if (A) {return <A>{children}</A>}
      if (B) {return <B>{children}</B>}
      return <div style={{display:'flex',flexDirection:'row'}}>{children}</div>
    }
    const WrapperElementLeft = props?.buttons?.left ? Wrapper(
      props?.buttons?.wrapper?.left,
      props?.buttons?.wrapper?.all,
      props?.buttons?.left? props.buttons.left(value, props.name, getValues) : null
    ) : null

    const WrapperElementRight = props?.buttons?.right ? Wrapper(
      props?.buttons?.wrapper?.right,
      props?.buttons?.wrapper?.all,      
      props?.buttons?.right? props.buttons.right(value, props.name, getValues) : null
    ) : null


   const childrenInjected = React.cloneElement(props.children, {...props.children?.props, disabled : props.disabled, type:props?.type??'line'})
  // console.log(`Input ${props.name} - value : ${value}`)
  return <InputElemWrapper {...props} disabled={props.disabled} value={value} >
      <>
        {WrapperElementLeft}
        {childrenInjected}
        {WrapperElementRight}
      </>
    </InputElemWrapper>
  },[value, props?.options, error])
  
  

  return child
};


export default InputWrapper;
