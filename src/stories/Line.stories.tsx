import React, { useEffect, useState } from "react";
import { ComponentMeta } from '@storybook/react';
import {Form, SubmitButton} from "../components/core/Form"

import Line from "../components/Inputs/Text/Line"
import Lines from "../components/Inputs/Text/Lines"
import WYSIWYG from "../components/Inputs/Text/WYSIWYG";
import { Template } from "./_story_template";

export default {
  title: 'Components/Inputs/Line',
  component: Line
} as ComponentMeta<typeof Line>; 

const onSubmit = (a:any) => new Promise((resolve, reject) => resolve(console.log('FormSubmission:',a)))

export const LinesBootstrap = Template.bind({}) 
LinesBootstrap.args = {
  children : <>    
    <Line label="Simple Form Input (Text)" name="line.text" placeholder="Simple Form Placeholder" />
    <Line label="Simple Form Input (Number)" name="line.number" placeholder="Simple Number Placeholder" type="number" />
    <Line label="Simple Form Input (Email)" name="line.email" placeholder="Simple Email Placeholder" type="email" />
    <Line label="Simple Form Input (Disabled)" disabled name="line.disabled" placeholder="Simple Disabled Placeholder" type="text" />
  </>
}

export const LineWithButton = Template.bind({})
LineWithButton.args = {
  children : <Line 
    label="Line with Button" 
    name="line_button" 
    buttons={
      {
        left: [
          {label:'#1',onClick: (a) => alert(`Value is ${a} From Button #1!`)},
          {label:'#2',onClick: (a) => alert(`Value is ${a} From Button #2!`)},
        ],
        right: [
          {label:'#R1',onClick: (a) => alert(`Value is ${a} From Button #R1!`)},
          {label:'#R2',onClick: (a) => alert(`Value is ${a} From Button #R2!`)},
        ],
      }
    } 
  />
}

export const TextArea = Template.bind({})
TextArea.args = {
  children : <>    
    <Lines label="Simple Form Input (Textarea)" name="lines.text" placeholder="Simple Textarea Placeholder" />
    <Lines label="Simple Form Input (Textarea) Long" rows={10} name="lines.long" placeholder="Simple Textarea Placeholder" />
    <Lines label="Simple Form Input (Textarea) Wide" cols={100} name="lines.wide" placeholder="Simple Textarea Placeholder" />
  </>
}

export const WYSIWYGEditor = Template.bind({}) 
WYSIWYGEditor.args = {
  children : <WYSIWYG label="Simple Form Input (WYSIWYG Editor)" name="wysiwyg" placeholder="Text Placeholder" />
}

export const WYSIWYGEditorWhenStateChanges = () => {
  const [response, setResponse] = useState<string|null>(null)

  useEffect(()=>{
    setTimeout(()=>{
      setResponse("Testing One Two Three")
    },1000)
  },[])

  const _onSubmit = (a:any) => new Promise((resolve, reject) => {
    console.log("[Raw Submit] - ",a)
    setResponse(JSON.stringify(a,( key, value) => key == 'parent' ? null : value,2))
  })

  return <div>
    <p style={{margin:'10px',padding:'5px',border:'1px solid blue', borderRadius:'5px'}}>Submitted Object : {response}</p>
    <Form onSubmit={_onSubmit}>
    <WYSIWYG label="Simple Form Input (WYSIWYG Editor)" name="wysiwyg" placeholder="Text Placeholder" />
    <SubmitButton>Submit</SubmitButton>
  </Form>
</div>
}