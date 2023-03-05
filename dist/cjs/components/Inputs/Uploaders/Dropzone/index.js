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
const react_dropzone_1 = require("react-dropzone");
const fa_1 = require("react-icons/fa");
const InputWrapper_1 = __importDefault(require("../../../core/InputWrapper"));
const styled_components_1 = __importDefault(require("styled-components"));
const PreviewContainer = styled_components_1.default.div `
  width:100%;
  padding:5px;
  background-color: #dfdada;
`;
const PreviewWrapper = styled_components_1.default.div `
  width: 100%;
  padding-left:10px;
  padding-right: 10px;
  display: flex;
  justify-content:space-between;
`;
const ActionsWrapper = styled_components_1.default.div ``;
const DropzoneUploader = (props) => {
    return (react_1.default.createElement(InputWrapper_1.default, Object.assign({}, props), (IWprops) => react_1.default.createElement(DropzoneHandler, Object.assign({}, IWprops))));
};
const DropzoneHandler = (props) => {
    const { acceptedFiles, getRootProps, getInputProps } = (0, react_dropzone_1.useDropzone)();
    const [files, setFiles] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => { if (props.value !== undefined) {
        setFiles(props.value);
    } }, []);
    (0, react_1.useEffect)(() => {
        const _newFiles = acceptedFiles;
        props.onChange([...files, ..._newFiles]);
        setFiles([...files, ..._newFiles]);
    }, [JSON.stringify(acceptedFiles)]);
    // const onDropHandler = (acceptedFiles: File[],rejectedFiles: FileRejection[], dropEvent: DropEvent) => {
    //   console.group("Dropzone - onDropHandler")
    //   console.log("[onDropHandler] - Accepted files: ", acceptedFiles)
    //   console.log("[onDropHandler] - Rejected files: ", rejectedFiles)
    //   console.log("[onDropHandler] - Current files: ", props.value)
    //   console.log("[onDropHandler] - OnChange: ", props.onChange)
    //   console.log("[onDropHandler] - DropEvent: ", dropEvent)
    //   console.groupEnd()
    //   setFiles([...props.value, ...acceptedFiles])
    // }
    const handleDelete = (index) => {
        const rem = files.filter((x, i) => i !== index);
        props.onChange(rem);
        setFiles(rem);
    };
    return react_1.default.createElement("div", null,
        react_1.default.createElement("div", Object.assign({}, getRootProps()),
            react_1.default.createElement("input", Object.assign({}, getInputProps())),
            react_1.default.createElement("p", null, "Drag 'n' drop some files here, or click to select files")),
        files.length > 0 && react_1.default.createElement(PreviewContainer, null, files.map((_file, _index) => react_1.default.createElement(PreviewWrapper, { key: `${props.name}-pr-${_index}` },
            _file.name,
            " - ",
            _file.size.toFixed(0),
            " bytes",
            react_1.default.createElement(ActionsWrapper, null,
                react_1.default.createElement(fa_1.FaTrash, { onClick: () => handleDelete(_index), style: { cursor: 'pointer' } }))))));
};
exports.default = DropzoneUploader;
//# sourceMappingURL=index.js.map