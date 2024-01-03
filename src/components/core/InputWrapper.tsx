import React, { useEffect, useMemo, useRef } from "react";
import InputElemWrapper from "./InputElemWrapper";
import { FormBaseInput } from "./interfaces";
import { useInputValAndError } from "./hook/useInputValnError";

const InputWrapper = (props: FormBaseInput) => {
  const firstUpdate = useRef(true)
  const {value, error, ...rest} = useInputValAndError(props.name)

  const watchCalculated = props?.calculatedField?.find !== undefined ? rest.watch(props.calculatedField.find) : null

// console.log(`For ${props.name}, error : `,rest.error)
  // On Value change
  useEffect(()=>{ if (props.defaultValue !== undefined) {
  console.log(`[Setting] ${props.name} has a defaultValue of ${props.defaultValue} [ Default Value ? ${props.defaultValue === undefined ? 'Undefined' : 'Have'}]`);
    rest.setValue(props.name, props.defaultValue);
  } },[props.defaultValue]) 
  
  useEffect(()=>{  
    // // Make sure value isnt undefined
    // if (value === undefined) {rest.setValue(props.name, null)}  
    
    // External Field
    if(props.externalStateSetter) {props.externalStateSetter(value)}
    // On Input Change
    if (props.onInputChange && !firstUpdate.current) {
      props.onInputChange(value, props.name, rest.getValues(), {...rest})
    }

    firstUpdate.current = false
  },[value])

  useEffect(()=>{ 
    // if(props.externalStateSetter) {props.externalStateSetter(watchValue ?? value)}

    // Calculated Fields
    if (props.calculatedField) {
      if (props.calculatedField.isPromise === true) {
        props.calculatedField.calculate(value,props.name,rest.getValues(props.calculatedField.find), rest.getValues())
        // .then(data => { contextSetValue(props.name, data) })
        .then(data => {
          // console.log(`[Setting] Setting value for ${props.name} by calculation (async)`)
           rest.setValue(props.name, data) 
        })
      } else {
        // console.log(`[Setting] Setting value for ${props.name} by calculation`)
        rest.setValue(props.name, props.calculatedField.calculate(value,props.name,rest.getValues(props.calculatedField.find), rest.getValues()))
      }
    }
  }, [watchCalculated])
  // const [_value, _setValue] = useState(null)
  // const methods = props.contextless === true ? {control:undefined, watch : (a:string) => null } : useFormContext();
  // const child = useMemo(()=>{
  //   const Wrapper = (A ?: any, B ?:any, children ?: any) => {
  //     if (A) {return <A>{children}</A>}
  //     if (B) {return <B>{children}</B>}
  //     return <div style={{display:'flex',flexDirection:'row'}}>{children}</div>
  //   }
  //   const WrapperElementLeft = props?.buttons?.left ? Wrapper(
  //     props?.buttons?.wrapper?.left,
  //     props?.buttons?.wrapper?.all,
  //     props?.buttons?.left? props.buttons.left(value, props.name, getValues) : null
  //   ) : null

  //   const WrapperElementRight = props?.buttons?.right ? Wrapper(
  //     props?.buttons?.wrapper?.right,
  //     props?.buttons?.wrapper?.all,      
  //     props?.buttons?.right? props.buttons.right(value, props.name, getValues) : null
  //   ) : null


  //  const childrenInjected = React.cloneElement(props.children, {...props.children?.props, disabled : props.disabled, type:props?.type??'line'})
  // // console.log(`Input ${props.name} - value : ${value}`)
  // return <InputElemWrapper {...props} disabled={props.disabled} value={value} >
  //     <>
  //       {WrapperElementLeft}
  //       {childrenInjected}
  //       {WrapperElementRight}
  //     </>
  //   </InputElemWrapper>
  // },[value, props?.options, error])

  // console.log('props - ',props)
  // const serializedProps = JSON.stringify({...props, options : props?.options ?? [], children: props.children?.props,  })  
  const childrenInjected = useMemo(()=> React.cloneElement(
    props.children, 
    {
      ...props.children?.props, 
      disabled : props.disabled, 
      type:props?.type??'line',
      onChange : (a:any) => rest.setValue(props.name, a),
      value: value,
      error: error,
      ...rest
    }), [value, error, props])
  
  const Wrapper = (A ?: any, B ?:any, children ?: any) => {
    if (A) {return <A>{children}</A>}
    if (B) {return <B>{children}</B>}
    return <div style={{display:'flex',flexDirection:'row'}}>{children}</div>
  }
  const WrapperElementLeft = props?.buttons?.left ? Wrapper(
    props?.buttons?.wrapper?.left,
    props?.buttons?.wrapper?.all,
    props?.buttons?.left? props.buttons.left(value, props.name, rest.getValues) : null
  ) : null
  const WrapperElementRight = props?.buttons?.right ? Wrapper(
    props?.buttons?.wrapper?.right,
    props?.buttons?.wrapper?.all,      
    props?.buttons?.right? props.buttons.right(value, props.name, rest.getValues) : null
  ) : null

  // console.log(`[InputWrapper - ${props.name}] - injected props`,childrenInjected.props)

  return <InputElemWrapper {...props} disabled={props.disabled} value={value} >
  <>
    {WrapperElementLeft}
    {childrenInjected}
    {WrapperElementRight}
  </>
</InputElemWrapper>
};


export default InputWrapper;
