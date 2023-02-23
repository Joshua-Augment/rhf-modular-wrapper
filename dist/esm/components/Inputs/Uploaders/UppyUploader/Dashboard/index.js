import React from "react";
import Uppy from "@uppy/core";
import UppyDashboardInstance from "./UppyDashboardInstance";
import InputWrapper from "../../../../core/InputWrapper";
const UppyUploader = (props) => {
    const uppy = new Uppy();
    return (React.createElement(InputWrapper, Object.assign({ noBorder: true }, props), (IWProps) => (React.createElement(UppyDashboardInstance, { uppy: uppy, value: IWProps.value, onChange: IWProps.onChange, metadata: props.metadata, endpoint: props.endpoint }))));
};
export default UppyUploader;
//# sourceMappingURL=index.js.map