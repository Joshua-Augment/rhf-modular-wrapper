import React, { useContext } from "react";
import { FormBaseInput } from "../../interfaces";
import { ThemeContext } from "../../Form";
import Logger from "../../Logger";
import InputInnerWrapper from "./components/InputInnerWrapper";

const InputWrapperv2 = (props: FormBaseInput) => {
  Logger.info(``, `${props.name} - InputWrapperv2`, "start");
  Logger.info(props, `${props.name} - InputWrapperv2`);

  const {buttonTemplate, elements} = useContext(ThemeContext);  

  
  return <InputInnerWrapper {...props} inputWrapper={props.inputTemplate ?? buttonTemplate ?? props.inputWrapper ?? undefined} inputElement={elements?.[(props?.type ?? 'line')] ?? null} >{props.children}</InputInnerWrapper>;
};

export default InputWrapperv2;
