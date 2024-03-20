import React, { useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { arrayMoveImmutable } from "array-move";
import { FaCaretDown, FaCaretUp, FaEye, FaTrash } from "react-icons/fa";
import { IDropzoneUploader, TDropzonePreview } from "../../../core/index";
import InputWrapper from "../../../core/InputWrapper/index";
import styled from "styled-components";
import { compareArrays } from "../../../core/helpers";

const DropzoneContainer = styled.div`
  /* padding:10px; */
  margin: 5px 2px;
  width: 100%;
  height: 100%;
  position: relative;
  background: #e0e0e0;
  border-radius: 2px;
`;

const PreviewContainer = styled.div`
  /* width:100%; */
  padding: 5px;
  margin: 5px;
  background-color: #dfdada;
  box-sizing: border-box;
  border: 1px solid #777777;
`;
const PreviewWrapper = styled.div`
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

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

const PaginationWrapper = styled.div`
  background-color: gainsboro;
  padding: 0 5px;
  margin-left: 15px;
  border-radius: 3px;
`;

const ActionsWrapper = styled.div``;

const DropzoneUploader = (props: IDropzoneUploader) => {
  return (
    <InputWrapper empty={[]} {...props}>
      <DropzoneHandler {...props} />
    </InputWrapper>
  );
};

const DropzoneHandler = (props: any) => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  // const [preview, setPreview] = useState<null | File>(null);

  useEffect(() => {
    if (props.value !== undefined && !compareArrays(props.value, props.value)) {
      const _files = [...props.value];
      // console.log("[useEffect] - dropzone",_files)
      // setValue(props.name, _files)
      props.onChange(_files);
    }
  }, [props.value]);

  useEffect(() => {
    const newFileList = Array.isArray(props.value) ? [...props.value] : [];
    newFileList.push(...acceptedFiles);
    props.onChange([...newFileList]);
  }, [JSON.stringify(acceptedFiles)]);

  const showPreview = (index: number) => {
    // console.log(`showPreview ${index}, `,props, val)
    window.open(URL.createObjectURL(props.value[index]), "_blank");
    // if (props.newWindow) {
    // } else {
    //   setPreview(props.value[index]);
    // }
  };

  const handleDelete = (index: number) => {
    const rem = props.value.filter((x: File, i: number) => i !== index);
    props.onChange(rem);
  };

  const moveFile = (index: number, change: number, isRelative: boolean = true) => {
    const newFileArr = arrayMoveImmutable(props.value, index, isRelative ? index + change : change);

    props.onChange(newFileArr);
  };

  return (
    <DropzoneContainer>
      <div style={{ width: "100%", height: "100%", position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div {...getRootProps()} style={{ width: "100%", height: "100%", position: "relative", textAlign: "center" }}>
          <input {...getInputProps()} />
          <p>{props.containerCaption ?? "Drag 'n' drop some files here, or click to select files"}</p>
        </div>
      </div>

      {props.value && props.value.length > 0 && (
        <PreviewViewer {...props} files={props.value} showPreview={showPreview} moveFile={moveFile} handleDelete={handleDelete} />
      )}
    </DropzoneContainer>
  );
};

const PreviewViewer = (props: IDropzoneUploader & TDropzonePreview) => {
  const Preview = props.previewBox;
  return props.previewBox && Preview !== undefined ? (
    <Preview {...props} files={props.files} />
  ) : (
    <PreviewContainer>
      {props.files.map((_file, _index) => (
        <PreviewWrapper key={`${props.name}-pr-${_index}`}>
          <ButtonsWrapper>
            {_file.type.split("/")[0] === "image" && (
              <img style={{ marginRight: "5px" }} height={34} width={"auto"} src={URL.createObjectURL(_file)} alt={_file.name} />
            )}
            {_file.name} - {_file.size.toFixed(0)} bytes
          </ButtonsWrapper>
          <ButtonsWrapper>
            <ActionsWrapper>
              <FaEye title="View" onClick={() => props.showPreview(_index)} style={{ margin: "0 10px", cursor: "pointer" }} />
              <FaTrash title="Remove" onClick={() => props.handleDelete(_index)} style={{ margin: "0 10px", cursor: "pointer" }} />
            </ActionsWrapper>
            <PaginationWrapper>
              <FaCaretUp
                title="Move Up"
                onClick={() => props.moveFile(_index, -1)}
                style={{ color: _index === 0 ? "gainsboro" : "black", pointerEvents: _index === 0 ? "none" : "all", cursor: "pointer" }}
              />
              <FaCaretDown
                title="Move Down"
                onClick={() => props.moveFile(_index, 1)}
                style={{
                  color: _index >= props.files.length - 1 ? "gainsboro" : "black",
                  pointerEvents: _index >= props.files.length - 1 ? "none" : "all",
                  cursor: "pointer",
                }}
              />
            </PaginationWrapper>
          </ButtonsWrapper>
        </PreviewWrapper>
      ))}
    </PreviewContainer>
  );
};

export default DropzoneUploader;
