"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
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
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(react_2.DashboardModal, { uppy: uppy, open: open, onRequestClose: () => setOpen(false) }),
        react_1.default.createElement(baseStyles_1.BaseButtonTheme, { onClick: () => setOpen(true) },
            react_1.default.createElement(fa_1.FaCamera, null))));
};
exports.default = UppyDashboardInstance;
//# sourceMappingURL=UppyDashboardInstance.js.map