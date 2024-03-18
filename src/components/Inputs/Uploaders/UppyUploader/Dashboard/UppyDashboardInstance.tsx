import React,{ useState } from "react";
import Uppy from "@uppy/core";
import { DashboardModal } from "@uppy/react";
import XHRUpload from "@uppy/xhr-upload";

import { FaCamera } from "react-icons/fa";

import "@uppy/core/dist/style.css";
import "@uppy/dashboard/dist/style.css";
import { BaseButtonTheme } from "../../../../core/baseStyles";

interface IUppyInstance {
  uppy: Uppy;
  endpoint: string;
  metadata?: any;
  value: any;
  onChange: any;
}

const UppyDashboardInstance = (props: IUppyInstance) => {
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
    uppy.setFileMeta(file.id, {
      ...props.metadata,
    });
  });

  uppy.on("upload-success", (file, response) => {
    const httpBody = response.body; // extracted response data
    // do something with file and response
    props.onChange([...props.value, httpBody]);
  });

  return (
    <div>
      <DashboardModal
        uppy={uppy}
        open={open}
        onRequestClose={() => setOpen(false)}
      />
      <BaseButtonTheme onClick={() => setOpen(true)}>
        <FaCamera />
      </BaseButtonTheme>
    </div>
  );
};

export default UppyDashboardInstance;
