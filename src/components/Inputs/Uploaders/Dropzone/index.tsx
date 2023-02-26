import React, {useState, useEffect} from 'react'
import Dropzone, {FileRejection, DropEvent, useDropzone} from 'react-dropzone'
import { FaTrash } from 'react-icons/fa'
import { IDropzoneUploader, IFormFrameInjector } from '../../../core'
import InputWrapper from '../../../core/InputWrapper'

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

  useEffect(() => {props.onChange([...files, ...acceptedFiles]); setFiles([...files, ...acceptedFiles])},[JSON.stringify(acceptedFiles)])

  const onDropHandler = (acceptedFiles: File[],rejectedFiles: FileRejection[], dropEvent: DropEvent) => {
    console.group("Dropzone - onDropHandler")
    console.log("[onDropHandler] - Accepted files: ", acceptedFiles)
    console.log("[onDropHandler] - Rejected files: ", rejectedFiles)
    console.log("[onDropHandler] - Current files: ", props.value)
    console.log("[onDropHandler] - OnChange: ", props.onChange)
    console.log("[onDropHandler] - DropEvent: ", dropEvent)
    console.groupEnd()
    setFiles([...props.value, ...acceptedFiles])
  }

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
    files.length > 0 && <ul>
      {
      <ol>
        {
          files.map((_file,_index) => <li key={`${props.name}-pr-${_index}`}>{_file.name} - {_file.size} <FaTrash onClick={()=>handleDelete(_index)} style={{cursor:'pointer'}} /></li>) 
        }
      </ol>
  }
    </ul>
  }
</div>
} 

export default DropzoneUploader