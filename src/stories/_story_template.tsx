import React, { useEffect } from "react";
import { useState } from "@storybook/addons"
import { Form, SubmitButton } from "../components/core"

export const Template = ({defaultValues = {}, children}:{defaultValues?: any,children:React.ReactElement}) => {
  const [response, setResponse] = useState<string|null>(null)

  const _onSubmit = (a:any) => new Promise((resolve, reject) => {
    console.log("[Raw Submit] - ",a)
    setResponse(JSON.stringify(a,( key, value) => key == 'parent' ? null : value,2))
  })

  return <div>
    <p style={{margin:'10px',padding:'5px',border:'1px solid blue', borderRadius:'5px'}}>Submitted Object : {response}</p>
    <Form onSubmit={_onSubmit} defaultValues={defaultValues}>
    {children}
    <SubmitButton>Submit</SubmitButton>
  </Form>
</div>
}

export const TemplateWithAsyncArray = ({children, item, key}: {children: Function,item:any, key:string  }) => {
  const [value, setValue] = useState<any[]>([])
  const [response, setResponse] = useState<string|null>(null)

  useEffect(()=>{
    setTimeout(()=>{
      console.log("[Template Refreshed after 200 ms!]")
      setValue(item)
    },200)
  },[])

  const _onSubmit = (a:any) => new Promise((resolve, reject) => {
    console.log("[Raw Submit] - ",a)
    setResponse(JSON.stringify(a,( key, value) => key == 'parent' ? null : value,2))
  })

  return <div>
    <p style={{margin:'10px',padding:'5px',border:'1px solid blue', borderRadius:'5px'}}>Submitted Object : {response}</p>
    <Form onSubmit={_onSubmit}>
    {children({[key] : value})}
    <SubmitButton>Submit</SubmitButton>
  </Form>
</div>

}