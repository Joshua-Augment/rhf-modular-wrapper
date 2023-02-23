import React from 'react'
import Dropzone, {FileRejection, DropEvent} from 'react-dropzone'
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

  const onDropHandler = (acceptedFiles: File[],rejectedFiles: FileRejection[], onChange:Function, value:File[], dropEvent: DropEvent) => {
    console.group("Dropzone - onDropHandler")
    console.log("[onDropHandler] - Accepted files: ", acceptedFiles)
    console.log("[onDropHandler] - Rejected files: ", rejectedFiles)
    console.log("[onDropHandler] - Current files: ", value)
    console.log("[onDropHandler] - OnChange: ", onChange)
    console.log("[onDropHandler] - DropEvent: ", dropEvent)
    console.groupEnd()
    onChange(acceptedFiles)
  }

  return  <div>
  <Dropzone
    disabled={props.disabled}
    accept={props.accept}
    onDrop={(accept, reject,dropEvent) => onDropHandler(accept,reject,props.onChange,props.value,dropEvent)}
  >          
  {({getRootProps, getInputProps}) => (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <p>Drag 'n' drop some files here, or click to select files</p>
    </div>
  )}
</Dropzone>
  {
    props.value &&
    <ol>
      {
        props.value.map((_file,_index) => <li key={`${props.name}-pr-${_index}`}>{_file.name} - {_file.size} <FaTrash onClick={()=>props.onChange(props.value.filter((x,i) => i !== _index))} style={{cursor:'pointer'}} /></li>) 
      }
    </ol>
  }
</div>
} 

export default DropzoneUploader