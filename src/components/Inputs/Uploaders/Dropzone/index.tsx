import React, {useState, useEffect, useMemo} from 'react'
import { useDropzone} from 'react-dropzone'
import {arrayMoveImmutable} from 'array-move';
import { FaCaretDown, FaCaretUp, FaEye, FaTrash } from 'react-icons/fa'
import { IDropzoneUploader, TDropzonePreview } from '../../../core'
import InputWrapper from '../../../core/InputWrapper'
import styled from "styled-components"
import PreviewModal from './components/PreviewModal'
import { compareArrays } from '../../../core/helpers';
import { useFormContext } from 'react-hook-form';

const DropzoneContainer = styled.div`
  /* padding:10px; */
  margin: 5px 2px;
  width:100%;
  height:100%;
  position:relative;
  background:#e0e0e0;
  border-radius: 2px;
`

const PreviewContainer = styled.div`
  /* width:100%; */
  padding:5px;
  margin:5px;
  background-color: #dfdada;
  box-sizing: border-box;
  border: 1px solid #777777;
`
const PreviewWrapper = styled.div`
  z-index:1;
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
`

const ButtonsWrapper = styled.div`
  display: flex;
  align-items:center;
  flex-direction: row;
`

const PaginationWrapper = styled.div`
  background-color : gainsboro;
  padding: 0 5px;
  margin-left: 15px;
  border-radius: 3px;
`

const ActionsWrapper = styled.div``

const DropzoneUploader = (props: IDropzoneUploader) => {
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
  const {watch, setValue} = useFormContext()
  const _val = watch(props.name)
  const val = useMemo(() => _val ,[_val])
  const [preview, setPreview] = useState<null|File>(null)
  
  useEffect(()=>{ if (props.value !== undefined && !compareArrays(val, props.value)) {
    const _files = [...props.value]
    // console.log("[useEffect] - dropzone",_files)
    setValue(props.name, _files)
  }},[props.value, val])

  useEffect(() => {
    const newFileList = Array.isArray(val) ? [...val] : []
    newFileList.push(...acceptedFiles)
    setValue(props.name, [...newFileList]); 
  },[JSON.stringify(acceptedFiles)])

  const showPreview = (index:number) => {
    // console.log(`showPreview ${index}, `,props, val)
    if (props.newWindow) {
      window.open(URL.createObjectURL(val[index]),'_blank')
    } else {
      setPreview(val[index])
    }
  }

  const handleDelete = (index: number) => {
    const rem = val.filter((x,i) => i !== index)
    setValue(props.name, rem)
  }

  const moveFile = (index: number, change: number, isRelative: boolean = true ) => {
    const newFileArr = arrayMoveImmutable(val, index, isRelative ? index + change : change)

    setValue(props.name, newFileArr)
  }

  return (<>    
    <PreviewModal file={preview} setFile={setPreview} /> 
    <InputWrapper {...props}>
      <DropzoneContainer >
        <div  style={{width: '100%', height: '100%', position:'relative', display:'flex',alignItems:'center',justifyContent: 'center'}} >
          <div {...getRootProps()} style={{width: '100%', height: '100%', position:'relative', textAlign: 'center'}}>
            <input {...getInputProps()} />
            <p>{props.containerCaption ?? "Drag 'n' drop some files here, or click to select files"}</p>
          </div>
        </div>
        
        {
          val && val.length > 0 && <PreviewViewer {...props} files={val} showPreview={showPreview} moveFile={moveFile} handleDelete={handleDelete} />
        }
      </DropzoneContainer>
    </InputWrapper>
  </>
  )
}



// const DropzoneHandler = (props: IDropzoneHandler) => {
  
//   const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
//   const [files, setFiles] = useState<File[]>([])
//   const [preview, setPreview] = useState<null|File>(null)

//   useEffect(()=>{ if (props.value !== undefined && !compareArrays(files, props.value)) {
//     const _files = [...props.value]
//     // console.log("[useEffect] - dropzone",_files)
//     setFiles(_files)

//     props.onChange(_files)
//   }},[props.value, files])

//   useEffect(() => {
//     const _newFiles=  acceptedFiles
//     props.onChange([...files, ..._newFiles]); 
//     setFiles([...files, ..._newFiles])
//   },[JSON.stringify(acceptedFiles)])

//   const showPreview = (index:number) => {
//     if (props.newWindow) {
//       window.open(URL.createObjectURL(files[index]),'_blank')
//     } else {
//       setPreview(files[index])
//     }
//   }

//   const handleDelete = (index: number) => {
//     const rem = files.filter((x,i) => i !== index)
//     props.onChange(rem)
//     setFiles(rem)
//   }

//   const moveFile = (index: number, change: number, isRelative: boolean = true ) => {
//     const newFileArr = arrayMoveImmutable(files, index, isRelative ? index + change : change)

//     setFiles(newFileArr)
//     props.onChange(newFileArr)
//   }

//   return  <DropzoneContainer>
//   <PreviewModal file={preview} setFile={setPreview} /> 
//   <div {...getRootProps()}>
//     <input {...getInputProps()} />
//     <p>{props.containerCaption ?? "Drag 'n' drop some files here, or click to select files"}</p>
//   </div>
  
//   {
//     files.length > 0 && <PreviewViewer {...props} files={files} showPreview={showPreview} moveFile={moveFile} handleDelete={handleDelete} />
//   }
// </DropzoneContainer>
// } 

const PreviewViewer = (props: IDropzoneUploader & TDropzonePreview ) => {
  const Preview = props.previewBox
  return props.previewBox && Preview !== undefined ? 
    <Preview {...props} files={props.files}  /> : (
      <PreviewContainer>
        {
          props.files.map((_file,_index) => <PreviewWrapper key={`${props.name}-pr-${_index}`}>
            <ButtonsWrapper>
              {_file.type.split("/")[0] === "image" && <img style={{marginRight:'5px'}} height={34} width={'auto'} src={URL.createObjectURL(_file)} alt={_file.name} />}
              {_file.name} - {_file.size.toFixed(0)} bytes
            </ButtonsWrapper>
            <ButtonsWrapper>
              <ActionsWrapper>
                <FaEye title="View" onClick={()=>props.showPreview(_index)} style={{margin: '0 10px', cursor:'pointer'}} />
                <FaTrash title="Remove" onClick={()=>props.handleDelete(_index)} style={{margin: '0 10px', cursor:'pointer'}} />
              </ActionsWrapper>
              <PaginationWrapper>
                <FaCaretUp title="Move Up" onClick={()=>props.moveFile(_index,-1)} style={{color: _index === 0 ? 'gainsboro' : 'black', pointerEvents : _index === 0 ? 'none' : 'all', cursor: 'pointer'}} />
                <FaCaretDown title="Move Down" onClick={()=>props.moveFile(_index,1)} style={{color: _index >= props.files.length - 1 ? 'gainsboro' : 'black', pointerEvents : _index >= props.files.length - 1 ? 'none' : 'all', cursor: 'pointer'}} />
              </PaginationWrapper>
            </ButtonsWrapper>
          </PreviewWrapper>) 
        }
      </PreviewContainer>
    )

}

export default DropzoneUploader