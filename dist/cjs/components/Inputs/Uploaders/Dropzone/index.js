"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_dropzone_1 = __importDefault(require("react-dropzone"));
const fa_1 = require("react-icons/fa");
const InputWrapper_1 = __importDefault(require("../../../core/InputWrapper"));
const DropzoneUploader = (props) => {
    return (react_1.default.createElement(InputWrapper_1.default, Object.assign({}, props), (IWprops) => react_1.default.createElement(DropzoneHandler, Object.assign({}, IWprops))));
};
const DropzoneHandler = (props) => {
    const onDropHandler = (acceptedFiles, rejectedFiles, onChange, value, dropEvent) => {
        console.group("Dropzone - onDropHandler");
        console.log("[onDropHandler] - Accepted files: ", acceptedFiles);
        console.log("[onDropHandler] - Rejected files: ", rejectedFiles);
        console.log("[onDropHandler] - Current files: ", value);
        console.log("[onDropHandler] - OnChange: ", onChange);
        console.log("[onDropHandler] - DropEvent: ", dropEvent);
        console.groupEnd();
        onChange(acceptedFiles);
    };
    return react_1.default.createElement("div", null,
        react_1.default.createElement(react_dropzone_1.default, { disabled: props.disabled, accept: props.accept, onDrop: (accept, reject, dropEvent) => onDropHandler(accept, reject, props.onChange, props.value, dropEvent) }, ({ getRootProps, getInputProps }) => (react_1.default.createElement("div", Object.assign({}, getRootProps()),
            react_1.default.createElement("input", Object.assign({}, getInputProps())),
            react_1.default.createElement("p", null, "Drag 'n' drop some files here, or click to select files")))),
        props.value &&
            react_1.default.createElement("ol", null, props.value.map((_file, _index) => react_1.default.createElement("li", { key: `${props.name}-pr-${_index}` },
                _file.name,
                " - ",
                _file.size,
                " ",
                react_1.default.createElement(fa_1.FaTrash, { onClick: () => props.onChange(props.value.filter((x, i) => i !== _index)), style: { cursor: 'pointer' } })))));
};
exports.default = DropzoneUploader;
//# sourceMappingURL=index.js.map