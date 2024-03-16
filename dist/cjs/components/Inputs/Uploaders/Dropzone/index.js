"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_dropzone_1 = require("react-dropzone");
const array_move_1 = require("array-move");
const fa_1 = require("react-icons/fa");
const InputWrapper_1 = __importDefault(require("../../../core/InputWrapper"));
const styled_components_1 = __importDefault(require("styled-components"));
const helpers_1 = require("../../../core/helpers");
const DropzoneContainer = styled_components_1.default.div `
  /* padding:10px; */
  margin: 5px 2px;
  width: 100%;
  height: 100%;
  position: relative;
  background: #e0e0e0;
  border-radius: 2px;
`;
const PreviewContainer = styled_components_1.default.div `
  /* width:100%; */
  padding: 5px;
  margin: 5px;
  background-color: #dfdada;
  box-sizing: border-box;
  border: 1px solid #777777;
`;
const PreviewWrapper = styled_components_1.default.div `
  z-index: 1;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  margin: 5px 1px;
  padding: 5px 10px;

  &:not(:last-child) {
    border-bottom: 1px solid #adadad;
  }
`;
const ButtonsWrapper = styled_components_1.default.div `
  display: flex;
  align-items: center;
  flex-direction: row;
`;
const PaginationWrapper = styled_components_1.default.div `
  background-color: gainsboro;
  padding: 0 5px;
  margin-left: 15px;
  border-radius: 3px;
`;
const ActionsWrapper = styled_components_1.default.div ``;
const DropzoneUploader = (props) => {
    return (0, jsx_runtime_1.jsx)(InputWrapper_1.default, Object.assign({}, props, { children: (0, jsx_runtime_1.jsx)(DropzoneHandler, Object.assign({}, props)) }));
};
const DropzoneHandler = (props) => {
    var _a;
    const { acceptedFiles, getRootProps, getInputProps } = (0, react_dropzone_1.useDropzone)();
    // const [preview, setPreview] = useState<null | File>(null);
    (0, react_1.useEffect)(() => {
        if (props.value !== undefined && !(0, helpers_1.compareArrays)(props.value, props.value)) {
            const _files = [...props.value];
            // console.log("[useEffect] - dropzone",_files)
            // setValue(props.name, _files)
            props.onChange(_files);
        }
    }, [props.value]);
    (0, react_1.useEffect)(() => {
        const newFileList = Array.isArray(props.value) ? [...props.value] : [];
        newFileList.push(...acceptedFiles);
        props.onChange([...newFileList]);
    }, [JSON.stringify(acceptedFiles)]);
    const showPreview = (index) => {
        // console.log(`showPreview ${index}, `,props, val)
        window.open(URL.createObjectURL(props.value[index]), "_blank");
        // if (props.newWindow) {
        // } else {
        //   setPreview(props.value[index]);
        // }
    };
    const handleDelete = (index) => {
        const rem = props.value.filter((x, i) => i !== index);
        props.onChange(rem);
    };
    const moveFile = (index, change, isRelative = true) => {
        const newFileArr = (0, array_move_1.arrayMoveImmutable)(props.value, index, isRelative ? index + change : change);
        props.onChange(newFileArr);
    };
    return ((0, jsx_runtime_1.jsxs)(DropzoneContainer, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ style: { width: "100%", height: "100%", position: "relative", display: "flex", alignItems: "center", justifyContent: "center" } }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({}, getRootProps(), { style: { width: "100%", height: "100%", position: "relative", textAlign: "center" } }, { children: [(0, jsx_runtime_1.jsx)("input", Object.assign({}, getInputProps())), (0, jsx_runtime_1.jsx)("p", { children: (_a = props.containerCaption) !== null && _a !== void 0 ? _a : "Drag 'n' drop some files here, or click to select files" })] })) })), props.value && props.value.length > 0 && (0, jsx_runtime_1.jsx)(PreviewViewer, Object.assign({}, props, { files: props.value, showPreview: showPreview, moveFile: moveFile, handleDelete: handleDelete }))] }));
};
const PreviewViewer = (props) => {
    const Preview = props.previewBox;
    return props.previewBox && Preview !== undefined ? ((0, jsx_runtime_1.jsx)(Preview, Object.assign({}, props, { files: props.files }))) : ((0, jsx_runtime_1.jsx)(PreviewContainer, { children: props.files.map((_file, _index) => ((0, jsx_runtime_1.jsxs)(PreviewWrapper, { children: [(0, jsx_runtime_1.jsxs)(ButtonsWrapper, { children: [_file.type.split("/")[0] === "image" && ((0, jsx_runtime_1.jsx)("img", { style: { marginRight: "5px" }, height: 34, width: "auto", src: URL.createObjectURL(_file), alt: _file.name })), _file.name, " - ", _file.size.toFixed(0), " bytes"] }), (0, jsx_runtime_1.jsxs)(ButtonsWrapper, { children: [(0, jsx_runtime_1.jsxs)(ActionsWrapper, { children: [(0, jsx_runtime_1.jsx)(fa_1.FaEye, { title: "View", onClick: () => props.showPreview(_index), style: { margin: "0 10px", cursor: "pointer" } }), (0, jsx_runtime_1.jsx)(fa_1.FaTrash, { title: "Remove", onClick: () => props.handleDelete(_index), style: { margin: "0 10px", cursor: "pointer" } })] }), (0, jsx_runtime_1.jsxs)(PaginationWrapper, { children: [(0, jsx_runtime_1.jsx)(fa_1.FaCaretUp, { title: "Move Up", onClick: () => props.moveFile(_index, -1), style: { color: _index === 0 ? "gainsboro" : "black", pointerEvents: _index === 0 ? "none" : "all", cursor: "pointer" } }), (0, jsx_runtime_1.jsx)(fa_1.FaCaretDown, { title: "Move Down", onClick: () => props.moveFile(_index, 1), style: {
                                        color: _index >= props.files.length - 1 ? "gainsboro" : "black",
                                        pointerEvents: _index >= props.files.length - 1 ? "none" : "all",
                                        cursor: "pointer",
                                    } })] })] })] }, `${props.name}-pr-${_index}`))) }));
};
exports.default = DropzoneUploader;
//# sourceMappingURL=index.js.map