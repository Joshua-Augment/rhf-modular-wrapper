import React, { useState } from "react";
import { DashboardModal } from "@uppy/react";
import XHRUpload from "@uppy/xhr-upload";
import { FaCamera } from "react-icons/fa";
import "@uppy/core/dist/style.css";
import "@uppy/dashboard/dist/style.css";
import { BaseButtonTheme } from "../../../../core/baseStyles";
const UppyDashboardInstance = (props) => {
    const [open, setOpen] = useState(false);
    const uppy = props.uppy.use(XHRUpload, {
        id: `rhf-wrapper-dashboard-${new Date().getTime()}`,
        endpoint: props.endpoint,
        formData: true,
        fieldName: "files",
    });
    // const uppy = useUppy(() => {
    //   return new Uppy()
    //     .use(XHRUpload, { endpoint: props.endpoint, formData : true,  fieldName: 'files'  })
    // })
    uppy.on("file-added", (file) => {
        uppy.setFileMeta(file.id, Object.assign({}, props.metadata));
    });
    uppy.on("upload-success", (file, response) => {
        const httpBody = response.body; // extracted response data
        // do something with file and response
        props.onChange([...props.value, httpBody]);
    });
    return (React.createElement("div", null,
        React.createElement(DashboardModal, { uppy: uppy, open: open, onRequestClose: () => setOpen(false) }),
        React.createElement(BaseButtonTheme, { onClick: () => setOpen(true) },
            React.createElement(FaCamera, null))));
};
export default UppyDashboardInstance;
//# sourceMappingURL=UppyDashboardInstance.js.map