import React, { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { arrayMoveImmutable } from 'array-move';
import { FaCaretDown, FaCaretUp, FaEye, FaTrash } from 'react-icons/fa';
import InputWrapper from '../../../core/InputWrapper';
import styled from "styled-components";
import PreviewModal from './components/PreviewModal';
const PreviewContainer = styled.div `
  width:100%;
  padding:5px;
  background-color: #dfdada;
  box-sizing: border-box;
  border: 1px solid #777777;
`;
const PreviewWrapper = styled.div `
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
const ButtonsWrapper = styled.div `
  display: flex;
  align-items:center;
  flex-direction: row;
`;
const PaginationWrapper = styled.div `
  background-color : gainsboro;
  padding: 0 5px;
  margin-left: 15px;
  border-radius: 3px;
`;
const ActionsWrapper = styled.div ``;
const DropzoneUploader = (props) => {
    return (React.createElement(InputWrapper, Object.assign({}, props), (IWprops) => React.createElement(DropzoneHandler, Object.assign({}, props, IWprops))));
};
const DropzoneHandler = (props) => {
    var _a;
    const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
    const [files, setFiles] = useState([]);
    const [preview, setPreview] = useState(null);
    useEffect(() => { if (props.value !== undefined) {
        setFiles(props.value);
    } }, []);
    useEffect(() => {
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
        const newFileArr = arrayMoveImmutable(files, index, isRelative ? index + change : change);
        setFiles(newFileArr);
        props.onChange(newFileArr);
    };
    return React.createElement("div", null,
        React.createElement(PreviewModal, { file: preview, setFile: setPreview }),
        React.createElement("div", Object.assign({}, getRootProps()),
            React.createElement("input", Object.assign({}, getInputProps())),
            React.createElement("p", null, (_a = props.containerCaption) !== null && _a !== void 0 ? _a : "Drag 'n' drop some files here, or click to select files")),
        files.length > 0 && React.createElement(PreviewViewer, Object.assign({}, props, { files: files, showPreview: showPreview, moveFile: moveFile, handleDelete: handleDelete })));
};
const PreviewViewer = (props) => {
    const Preview = props.previewBox;
    return props.previewBox && Preview !== undefined ?
        React.createElement(Preview, Object.assign({}, props, { files: props.files })) : (React.createElement(PreviewContainer, null, props.files.map((_file, _index) => React.createElement(PreviewWrapper, { key: `${props.name}-pr-${_index}` },
        React.createElement(ButtonsWrapper, null,
            _file.type.split("/")[0] === "image" && React.createElement("img", { style: { marginRight: '5px' }, height: 34, width: 'auto', src: URL.createObjectURL(_file), alt: _file.name }),
            _file.name,
            " - ",
            _file.size.toFixed(0),
            " bytes"),
        React.createElement(ButtonsWrapper, null,
            React.createElement(ActionsWrapper, null,
                React.createElement(FaEye, { title: "View", onClick: () => props.showPreview(_index), style: { margin: '0 10px', cursor: 'pointer' } }),
                React.createElement(FaTrash, { title: "Remove", onClick: () => props.handleDelete(_index), style: { margin: '0 10px', cursor: 'pointer' } })),
            React.createElement(PaginationWrapper, null,
                React.createElement(FaCaretUp, { title: "Move Up", onClick: () => props.moveFile(_index, -1), style: { color: _index === 0 ? 'gainsboro' : 'black', pointerEvents: _index === 0 ? 'none' : 'all', cursor: 'pointer' } }),
                React.createElement(FaCaretDown, { title: "Move Down", onClick: () => props.moveFile(_index, 1), style: { color: _index >= props.files.length - 1 ? 'gainsboro' : 'black', pointerEvents: _index >= props.files.length - 1 ? 'none' : 'all', cursor: 'pointer' } })))))));
};
export default DropzoneUploader;
//# sourceMappingURL=index.js.map