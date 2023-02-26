import React, {useState, useEffect} from 'react'
import { useDropzone} from 'react-dropzone'
import { FaTrash } from 'react-icons/fa'
import { IDropzoneUploader, IFormFrameInjector } from '../../../core'
import InputWrapper from '../../../core/InputWrapper'
import styled from "styled-components"

const PreviewContainer = styled.div`
  width:100%;
  padding:5px;
  background-color: #dfdada;
`
const PreviewWrapper = styled.div`
  width: 100%;
  padding-left:10px;
  padding-right: 10px;
  display: flex;
  justify-content:space-between;
`

const ActionsWrapper = styled.div``

const DropzoneUploader = (props: IDropzoneUploader) => {
  
  return (
    <InputWrapper {...props}>
      {
        (IWprops:IFormFrameInjector<File[]>) => <DropzoneHandler {...IWprops} />
      }
    </InputWrapper>
  )
}

interface IDropzoneHandler extends IFormFrameInjector<File[]> {
  disabled ?:boolean,
  accept ?: {[key:string]:string[]}
}
const DropzoneHandler = (props: IDropzoneHandler) => {
  
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
  const [files, setFiles] = useState<File[]>([])

  useEffect(()=>{ if (props.value !== undefined) {setFiles(props.value)}},[])

  useEffect(() => {
    const _newFiles=  acceptedFiles
    props.onChange([...files, ..._newFiles]); 
    setFiles([...files, ..._newFiles])
  },[JSON.stringify(acceptedFiles)])

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

  const handleDelete = (index: number) => {
    const rem = files.filter((x,i) => i !== index)
    props.onChange(rem)
    setFiles(rem)
  }

  return  <div>
  
  <div {...getRootProps()}>
    <input {...getInputProps()} />
    <p>Drag 'n' drop some files here, or click to select files</p>
  </div>
  
  {
    files.length > 0 && <PreviewContainer>
        {
          files.map((_file,_index) => <PreviewWrapper key={`${props.name}-pr-${_index}`}>
              {_file.name} - {_file.size.toFixed(0)} bytes
              <ActionsWrapper>
              <FaTrash onClick={()=>handleDelete(_index)} style={{cursor:'pointer'}} />
              </ActionsWrapper>
            </PreviewWrapper>) 
        }
      </PreviewContainer>
  }
</div>
} 

export default DropzoneUploader