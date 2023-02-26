import React, { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { FaTrash } from 'react-icons/fa';
import InputWrapper from '../../../core/InputWrapper';
const DropzoneUploader = (props) => {
    return (React.createElement(InputWrapper, Object.assign({}, props), (IWprops) => React.createElement(DropzoneHandler, Object.assign({}, IWprops))));
};
const DropzoneHandler = (props) => {
    const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
    const [files, setFiles] = useState([]);
    useEffect(() => { if (props.value !== undefined) {
        setFiles(props.value);
    } }, []);
    useEffect(() => { props.onChange([...files, ...acceptedFiles]); setFiles([...files, ...acceptedFiles]); }, [JSON.stringify(acceptedFiles)]);
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
    return React.createElement("div", null,
        React.createElement("div", Object.assign({}, getRootProps()),
            React.createElement("input", Object.assign({}, getInputProps())),
            React.createElement("p", null, "Drag 'n' drop some files here, or click to select files")),
        files.length > 0 && React.createElement("ul", null, React.createElement("ol", null, files.map((_file, _index) => React.createElement("li", { key: `${props.name}-pr-${_index}` },
            _file.name,
            " - ",
            _file.size,
            " ",
            React.createElement(FaTrash, { onClick: () => handleDelete(_index), style: { cursor: 'pointer' } }))))));
};
export default DropzoneUploader;
//# sourceMappingURL=index.js.map