import React from 'react'
import { IFormFrameInjector, LinesInputProps } from '../../core'
import InputWrapper from '../../core/InputWrapper'

import 'quill/dist/quill.snow.css';
import { useQuill } from 'react-quilljs';
import { useEffect } from 'react';

const WYSIWYG = (props: LinesInputProps) => {
  

  return (
    <InputWrapper noBorder {...props} >
      {
        (IWprops:IFormFrameInjector) => {
          console.log("[props] - ",IWprops)
          return <QuillEditor {...IWprops} />
        }
      }
    </InputWrapper>
  )
}

const QuillEditor = (props : IFormFrameInjector) => {
  const { quill, quillRef } = useQuill();

  // Set Default
  useEffect(() => {if (props.value !== undefined && quill !== undefined) {quill.clipboard.dangerouslyPasteHTML(props.value)}},[])

  // On CHange
  useEffect(() => {
    if (quill) {quill.on('text-change',(delta :any, oldDelta :any,source :any) => {props.onChange(quillRef.current.firstChild.innerHTML)})}
  },[quill])

  return <div>
  <div id={props.name} ref={quillRef}></div>
</div>
}

export default WYSIWYG