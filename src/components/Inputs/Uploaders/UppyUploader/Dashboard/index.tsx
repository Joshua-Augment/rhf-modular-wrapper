import { useMemo } from "react";
import Uppy from "@uppy/core"
import {IUppyUploader} from "../../../../core";
import UppyDashboardInstance from "./UppyDashboardInstance";
import InputWrapper from "../../../../core/InputWrapper";
import { useFormContext } from "react-hook-form";

const UppyDashboardUploader = (props: IUppyUploader) => {
  const uppy = new Uppy()
  const {watch, setValue} = useFormContext()
  const _val = watch(props.name)
  const val = useMemo(()=>_val,[_val])
  return (
  <InputWrapper noBorder {...props}>
    <UppyDashboardInstance
        uppy={uppy}
        value={val}
        onChange={(a:any) => setValue(props.name, a)}
        metadata={props.metadata}
        endpoint={props.endpoint}
      />
  </InputWrapper>
  );
};

export default UppyDashboardUploader;
