import React from "react";
import Uppy from "@uppy/core"
import {IFormFrameInjector,IUppyUploader} from "../../../../core";
import UppyDashboardInstance from "./UppyDashboardInstance";
import InputWrapper from "../../../../core/InputWrapper";

const UppyUploader = (props: IUppyUploader) => {
  const uppy = new Uppy()
  return (
  <InputWrapper noBorder {...props}>
    {
      (IWProps:IFormFrameInjector) => (<UppyDashboardInstance
        uppy={uppy}
        value={IWProps.value}
        onChange={IWProps.onChange}
        metadata={props.metadata}
        endpoint={props.endpoint}
      />)
    }
  </InputWrapper>
  );
};

export default UppyUploader;
