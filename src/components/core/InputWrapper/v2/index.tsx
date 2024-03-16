import  { useContext } from "react";
import { FormBaseInput } from "../../interfaces";
import { ThemeContext } from "../../Form";
import Logger from "../../Logger";
import InputInnerWrapper from "./components/InputInnerWrapper";

const InputWrapperv2 = (props: FormBaseInput) => {
  Logger.info(`Value - ${typeof props.value === 'object' ? JSON.stringify(props.value) : props.value}`, `${props.name} - InputWrapperv2`, "start");
  Logger.info(props, `${props.name} - InputWrapperv2`);

  const {inputTemplate, elements} = useContext(ThemeContext);  

  
  return <InputInnerWrapper {...props} inputWrapper={props.inputWrapper ??  inputTemplate ?? undefined} inputElement={elements?.[(props?.type ?? 'line')] ?? null} >{props.children}</InputInnerWrapper>;
};

export default InputWrapperv2;
