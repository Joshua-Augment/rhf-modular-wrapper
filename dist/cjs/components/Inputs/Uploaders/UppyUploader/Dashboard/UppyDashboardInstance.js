"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_2 = require("@uppy/react");
const xhr_upload_1 = __importDefault(require("@uppy/xhr-upload"));
const fa_1 = require("react-icons/fa");
require("@uppy/core/dist/style.css");
require("@uppy/dashboard/dist/style.css");
const baseStyles_1 = require("../../../../core/baseStyles");
const UppyDashboardInstance = (props) => {
    const [open, setOpen] = (0, react_1.useState)(false);
    const uppy = props.uppy.use(xhr_upload_1.default, {
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
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(react_2.DashboardModal, { uppy: uppy, open: open, onRequestClose: () => setOpen(false) }), (0, jsx_runtime_1.jsx)(baseStyles_1.BaseButtonTheme, Object.assign({ onClick: () => setOpen(true) }, { children: (0, jsx_runtime_1.jsx)(fa_1.FaCamera, {}) }))] }));
};
exports.default = UppyDashboardInstance;
//# sourceMappingURL=UppyDashboardInstance.js.map