import React, {useEffect, useMemo} from 'react'
import { ILines } from "../../core";
import InputWrapper from "../../core/InputWrapper";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useInputValAndError } from '../../core/hook/useInputValnError';

const WYSIWYG = (props:ILines) => {
  const {value, setValue} = useInputValAndError(props.name)
  // const {watch, setValue} = useFormContext()
  // const _val = watch(props.name)
  useEffect(()=>{if (value === undefined || value === null) {setValue(props.name, '')}},[value])
  // const val = useMemo(() => _val ,[_val])

  return (    
    <InputWrapper type={props.type ?? 'wysiwyg'} {...props}>
      <ReactQuillWrapper {...props} value={value !== undefined && value !== null ? value : ''} onChange={(a: string) => setValue(props.name,a)} />
    </InputWrapper>
  )
}

const ReactQuillWrapper = (props : any) => {
  const toolbarOptions = useMemo(()=>([
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],
    ['link','image'],
  
    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction
  
    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  
    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],
  
    ['clean']                                         // remove formatting button
  ]),[]);

  return <ReactQuill theme={'snow'} modules={{toolbar : toolbarOptions}} onChange={props.onChange}  />
}

export default WYSIWYG