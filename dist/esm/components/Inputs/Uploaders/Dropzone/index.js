import React from 'react';
import Dropzone from 'react-dropzone';
import { FaTrash } from 'react-icons/fa';
import InputWrapper from '../../../core/InputWrapper';
const DropzoneUploader = (props) => {
    return (React.createElement(InputWrapper, Object.assign({}, props), (IWprops) => React.createElement(DropzoneHandler, Object.assign({}, IWprops))));
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
    return React.createElement("div", null,
        React.createElement(Dropzone, { disabled: props.disabled, accept: props.accept, onDrop: (accept, reject, dropEvent) => onDropHandler(accept, reject, props.onChange, props.value, dropEvent) }, ({ getRootProps, getInputProps }) => (React.createElement("div", Object.assign({}, getRootProps()),
            React.createElement("input", Object.assign({}, getInputProps())),
            React.createElement("p", null, "Drag 'n' drop some files here, or click to select files")))),
        props.value &&
            React.createElement("ol", null, props.value.map((_file, _index) => React.createElement("li", { key: `${props.name}-pr-${_index}` },
                _file.name,
                " - ",
                _file.size,
                " ",
                React.createElement(FaTrash, { onClick: () => props.onChange(props.value.filter((x, i) => i !== _index)), style: { cursor: 'pointer' } })))));
};
export default DropzoneUploader;
//# sourceMappingURL=index.js.map