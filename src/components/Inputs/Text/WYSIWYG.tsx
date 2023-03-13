import React from "react";
import { IFormFrameInjector, ILines } from "../../core";
import InputWrapper from "../../core/InputWrapper";
import LexicalEditor from "./Lexical/LexicalEditor";

const WYSIWYG = (props: ILines) => {
  return (
    <InputWrapper {...props}>
      {(IWprops: IFormFrameInjector) => {
        console.log("[props] - ", IWprops);
        return <LexicalEditor {...IWprops} theme={props.theme} />;
      }}
    </InputWrapper>
  );
};

export default WYSIWYG;
