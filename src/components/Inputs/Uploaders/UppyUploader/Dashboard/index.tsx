import React from "react";
import Uppy from "@uppy/core";
import { IUppyUploader } from "../../../../core/index";
import UppyDashboardInstance from "./UppyDashboardInstance";
import InputWrapper from "../../../../core/InputWrapper/index";

const UppyDashboardUploader = (props: IUppyUploader) => {
  return (
    <InputWrapper empty={[]} noBorder {...props}>
      <UppyElement {...props} />
    </InputWrapper>
  );
};

const UppyElement = (props: any) => {
  const uppy = new Uppy();

  return (
    <UppyDashboardInstance
      uppy={uppy}
      value={props.value}
      onChange={(a: any) => props.onChange(a)}
      metadata={props.metadata}
      endpoint={props.endpoint}
    />
  );
};

export default UppyDashboardUploader;
