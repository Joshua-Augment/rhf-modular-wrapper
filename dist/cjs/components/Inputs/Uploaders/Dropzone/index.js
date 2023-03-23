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
const array_move_1 = require("array-move");
const fa_1 = require("react-icons/fa");
const InputWrapper_1 = __importDefault(require("../../../core/InputWrapper"));
const styled_components_1 = __importDefault(require("styled-components"));
const PreviewModal_1 = __importDefault(require("./components/PreviewModal"));
const PreviewContainer = styled_components_1.default.div `
  width:100%;
  padding:5px;
  background-color: #dfdada;
  box-sizing: border-box;
  border: 1px solid #777777;
`;
const PreviewWrapper = styled_components_1.default.div `
  width: 100%;
  display: flex;
  justify-content:space-between;
  align-items: center;
  box-sizing: border-box;
  margin : 5px 1px;
  padding : 5px 10px;

  &:not(:last-child) {
    border-bottom: 1px solid #adadad;
  }
`;
const ButtonsWrapper = styled_components_1.default.div `
  display: flex;
  align-items:center;
  flex-direction: row;
`;
const PaginationWrapper = styled_components_1.default.div `
  background-color : gainsboro;
  padding: 0 5px;
  margin-left: 15px;
  border-radius: 3px;
`;
const ActionsWrapper = styled_components_1.default.div ``;
const DropzoneUploader = (props) => {
    return (react_1.default.createElement(InputWrapper_1.default, Object.assign({}, props), (IWprops) => react_1.default.createElement(DropzoneHandler, Object.assign({}, props, IWprops))));
};
const DropzoneHandler = (props) => {
    var _a;
    const { acceptedFiles, getRootProps, getInputProps } = (0, react_dropzone_1.useDropzone)();
    const [files, setFiles] = (0, react_1.useState)([]);
    const [preview, setPreview] = (0, react_1.useState)(null);
    (0, react_1.useEffect)(() => { if (props.value !== undefined) {
        setFiles(props.value);
    } }, []);
    (0, react_1.useEffect)(() => {
        const _newFiles = acceptedFiles;
        props.onChange([...files, ..._newFiles]);
        setFiles([...files, ..._newFiles]);
    }, [JSON.stringify(acceptedFiles)]);
    const showPreview = (index) => {
        if (props.newWindow) {
        }
        else {
            setPreview(files[index]);
        }
    };
    const handleDelete = (index) => {
        const rem = files.filter((x, i) => i !== index);
        props.onChange(rem);
        setFiles(rem);
    };
    const moveFile = (index, change, isRelative = true) => {
        const newFileArr = (0, array_move_1.arrayMoveImmutable)(files, index, isRelative ? index + change : change);
        setFiles(newFileArr);
        props.onChange(newFileArr);
    };
    return react_1.default.createElement("div", null,
        react_1.default.createElement(PreviewModal_1.default, { file: preview, setFile: setPreview }),
        react_1.default.createElement("div", Object.assign({}, getRootProps()),
            react_1.default.createElement("input", Object.assign({}, getInputProps())),
            react_1.default.createElement("p", null, (_a = props.containerCaption) !== null && _a !== void 0 ? _a : "Drag 'n' drop some files here, or click to select files")),
        files.length > 0 && react_1.default.createElement(PreviewViewer, Object.assign({}, props, { files: files, showPreview: showPreview, moveFile: moveFile, handleDelete: handleDelete })));
};
const PreviewViewer = (props) => {
    const Preview = props.previewBox;
    return props.previewBox && Preview !== undefined ?
        react_1.default.createElement(Preview, Object.assign({}, props, { files: props.files })) : (react_1.default.createElement(PreviewContainer, null, props.files.map((_file, _index) => react_1.default.createElement(PreviewWrapper, { key: `${props.name}-pr-${_index}` },
        react_1.default.createElement(ButtonsWrapper, null,
            _file.type.split("/")[0] === "image" && react_1.default.createElement("img", { style: { marginRight: '5px' }, height: 34, width: 'auto', src: URL.createObjectURL(_file), alt: _file.name }),
            _file.name,
            " - ",
            _file.size.toFixed(0),
            " bytes"),
        react_1.default.createElement(ButtonsWrapper, null,
            react_1.default.createElement(ActionsWrapper, null,
                react_1.default.createElement(fa_1.FaEye, { title: "View", onClick: () => props.showPreview(_index), style: { margin: '0 10px', cursor: 'pointer' } }),
                react_1.default.createElement(fa_1.FaTrash, { title: "Remove", onClick: () => props.handleDelete(_index), style: { margin: '0 10px', cursor: 'pointer' } })),
            react_1.default.createElement(PaginationWrapper, null,
                react_1.default.createElement(fa_1.FaCaretUp, { title: "Move Up", onClick: () => props.moveFile(_index, -1), style: { color: _index === 0 ? 'gainsboro' : 'black', pointerEvents: _index === 0 ? 'none' : 'all', cursor: 'pointer' } }),
                react_1.default.createElement(fa_1.FaCaretDown, { title: "Move Down", onClick: () => props.moveFile(_index, 1), style: { color: _index >= props.files.length - 1 ? 'gainsboro' : 'black', pointerEvents: _index >= props.files.length - 1 ? 'none' : 'all', cursor: 'pointer' } })))))));
};
exports.default = DropzoneUploader;
//# sourceMappingURL=index.js.map