import React, { useEffect, useMemo, useRef } from "react";
import InputElemWrapper from "./InputElemWrapper";
import { FormBaseInput } from "./interfaces";
import { Button } from "@mui/material";
import { useInputValAndError } from "./hook/useInputValnError";

const InputWrapper = (props: FormBaseInput) => {
  // const [value, setValue] = useState<any>(undefined)
  // const {getValues, watch, setValue: contextSetValue} = useFormContext() 

  // const watchValue = watch(props.name)

  const firstUpdate = useRef(true)
  const {value, setValue, getValues, watch, ...rest} = useInputValAndError(props.name)

  const watchCalculated = props?.calculatedField?.find !== undefined ? watch(props.calculatedField.find) : null

  // On Value change
  useEffect(()=>{ if (value === undefined) {setValue(props.name, null)} },[value])
  // useEffect(() => {
  //   if (watchValue === undefined) {contextSetValue(props.name,null)}
  // },[watchValue])

  // useEffect(()=> setValue(watchValue === undefined ? null : watchValue), [typeof watchValue === 'object' ? JSON.stringify(watchValue) : watchValue])

  // Set Value First if Available
  // useEffect(()=>{ if (props.defaultValue) {contextSetValue(props.name, props.defaultValue);} },[props.defaultValue]) 
  useEffect(()=>{ if (props.defaultValue) {setValue(props.name, props.defaultValue);} },[props.defaultValue]) 
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
        .then(data => { setValue(props.name, data) })
      } else {
        setValue(props.name, props.calculatedField.calculate(value,props.name,getValues(props.calculatedField.find), getValues()))
        // contextSetValue(props.name, props.calculatedField.calculate(value,getValues(props.calculatedField.find), getValues()))
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
    const WrapperElementLeft = Wrapper(props?.buttons?.wrapper?.left,props?.buttons?.wrapper?.all,props?.buttons?.left?.map((x,i) => {
      const ButtonElem: React.ComponentType<{name?: string, value?: any}>|any = x.customButton || Button; // Use customButton or a default button

     return <ButtonElem 
       key={`bl-${i}`} 
       onClick={() => x.onClick(value, props.name, getValues())}
       name={props.name} 
       value={value}
     >{x.label}</ButtonElem>
   }))

    const WrapperElementRight = Wrapper(props?.buttons?.wrapper?.right,props?.buttons?.wrapper?.all,props?.buttons?.right?.map((x,i) => {
      const ButtonElem: React.ComponentType<{name?: string, value?: any}>|any = x.customButton || Button; // Use customButton or a default button
      return <ButtonElem 
        key={`bl-${i}`} 
        onClick={() => x.onClick(value, props.name, getValues())}
        name={props.name} 
        value={value}
      >{x.label}</ButtonElem>
   }))

   const childrenInjected = React.cloneElement(props.children, {...props.children?.props, disabled : props.disabled})
  // console.log(`Input ${props.name} - value : ${value}`)
  return <InputElemWrapper {...props} disabled={props.disabled} value={value} >
      <>
        {WrapperElementLeft}
        {/* props.buttons && props.buttons.left && <WrapperElementLeft>
          {props.buttons.left.map((x,i) => {
             const ButtonElem: React.ComponentType<{name?: string, value?: any}>|any = x.customButton || Button; // Use customButton or a default button

            return <ButtonElem 
              key={`bl-${i}`} 
              onClick={(value) => x.onClick(value)}
              name={props.name} 
              value={value}
            >{x.label}</ButtonElem>
          })}
        </WrapperElementLeft> */}
        {childrenInjected}
        {/* props.buttons && props.buttons.right && <WrapperElementRight>
          {props.buttons.right.map((x,i) => {
            let ButtonElem:any = Button
            if (x.customButton) {
              ButtonElem = x.customButton
            }

            ButtonElem = React.cloneElement(ButtonElem, {...ButtonElem?.props, name: props.name, value: value, label: x.label})

            return <ButtonElem key={`bl-${i}`} onClick={(value) => x.onClick(value)}>{x.label}</ButtonElem>
          })}
        </WrapperElementRight> */}
        {WrapperElementRight}
      </>
    </InputElemWrapper>
  },[value, props?.options])
  
  

  return child

  // return (
  //   props.contextless ?
  //   // Since this does not live in a form there is no form context, as such just store the state in the wrapper itself
  //   // to maintain the input as a controlled input
  //   <InputElemWrapper
  //     {...props}
  //     value={_value}
  //     onChange={_setValue}
  // >
  //   {child &&
  //     child({
  //       ...props,
  //       value : _value,
  //       onChange : _setValue,
  //       onBlur : ()=>false,
  //       isTouched: _value !== null,
  //       isDirty: _value !== null,
  //       error : undefined,
  //       disabled : props.disabled,
  //       ref : undefined,
  //     })}
  // </InputElemWrapper> : 
  // // Control is handled by the Controller Element instead
  //   <Controller
  //     control={methods.control}
  //     name={props.name}
  //     render={({
  //       field: { onChange, onBlur, value, name, ref },
  //       fieldState: { invalid, isTouched, isDirty, error },
  //       formState,
  //     }) => (
  //       <InputElemWrapper
  //         {...props}
  //         value={value === undefined ? props.defaultValue : value}
  //         onChange={onChange}
  //         errors={error}
  //       >
  //         {child &&
  //           child({
  //             ...props,
  //             value,
  //             onChange,
  //             onBlur,
  //             isTouched,
  //             isDirty,
  //             error,
  //             disabled : props.disabled,
  //             ref,
  //           })}
  //       </InputElemWrapper>
  //     )}
  //   />
  // );
};


export default InputWrapper;
