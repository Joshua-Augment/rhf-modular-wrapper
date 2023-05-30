import React, {useMemo} from 'react'
import { ILines } from "../../core";
import InputWrapper from "../../core/InputWrapper";
import { useFormContext } from "react-hook-form";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const WYSIWYG = (props:ILines) => {
  const {watch, setValue} = useFormContext()
  const _val = watch(props.name)
  const val = useMemo(() => _val ,[_val])

  return (    
    <InputWrapper {...props}>
      <ReactQuillWrapper {...props} value={val} onChange={(a: string) => setValue(props.name,a)} />
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