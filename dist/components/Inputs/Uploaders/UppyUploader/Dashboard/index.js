import { jsx as _jsx } from "react/jsx-runtime";
import { useMemo } from "react";
import Uppy from "@uppy/core";
import UppyDashboardInstance from "./UppyDashboardInstance";
import InputWrapper from "../../../../core/InputWrapper";
import { useFormContext } from "react-hook-form";
const UppyDashboardUploader = (props) => {
    const uppy = new Uppy();
    const { watch, setValue } = useFormContext();
    const _val = watch(props.name);
    const val = useMemo(() => _val, [_val]);
    return (_jsx(InputWrapper, Object.assign({ noBorder: true }, props, { children: _jsx(UppyDashboardInstance, { uppy: uppy, value: val, onChange: (a) => setValue(props.name, a), metadata: props.metadata, endpoint: props.endpoint }) })));
};
export default UppyDashboardUploader;
//# sourceMappingURL=index.js.map