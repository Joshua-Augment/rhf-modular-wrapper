import  React,{ useContext } from "react";
import { FormBaseInput } from "../../interfaces/index";
import { ThemeContext } from "../../Form";
import Logger from "../../Logger/index";
import InputInnerWrapper from "./components/InputInnerWrapper";

const InputWrapperv2 = (props: FormBaseInput) => {
  const {debug} = useContext(ThemeContext)
  Logger.info(debug, `Value - ${typeof props.value === 'object' ? JSON.stringify(props.value) : props.value}`, `${props.name} - InputWrapperv2`, "start");
  Logger.info(debug, props, `${props.name} - InputWrapperv2`);

  const {inputTemplate, elements} = useContext(ThemeContext);  

  
  return <InputInnerWrapper {...props} inputWrapper={props.inputWrapper ??  inputTemplate ?? undefined} inputElement={elements?.[(props?.type ?? 'line')] ?? null} >{props.children}</InputInnerWrapper>;
};

export default InputWrapperv2;
