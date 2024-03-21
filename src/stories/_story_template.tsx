import React, { useEffect, useState } from "react";
import { Form, IForm, SubmitButton } from "../components/core"
import { useFormContext } from "react-hook-form";

export const Template = ({defaultValues = {}, children, yupSchema, ...formProps}:IForm<any>) => {
  const [response, setResponse] = useState<string|null>(null)

  const _onSubmit = (a:any) => new Promise((resolve, reject) => {
    // console.log("[Raw Submit] - ",a)
    setResponse(JSON.stringify(a,( key, value) => key == 'parent' ? null : value,2))
  })

  return <div>
    <p style={{margin:'10px',padding:'5px',border:'1px solid blue', borderRadius:'5px'}}>Submitted Object : {response}</p>
    <Form yupSchema={yupSchema} {...formProps} onSubmit={_onSubmit} defaultValues={defaultValues} >
      <ResetForm/>
    {children}
    <SubmitButton>Submit</SubmitButton>
  </Form>
</div>
}

const ResetForm = () => {
  const {reset, formState: {isSubmitted, isSubmitSuccessful}} = useFormContext()

  useEffect(()=>{
    if (isSubmitted && isSubmitSuccessful) {
      // console.log('Resetting form...')
      reset()
    }
  },[isSubmitSuccessful, isSubmitted])

  return <span data-reset="true" ></span>
}

export const TemplateWithAsyncArray = ({children, item, key}: {children: Function,item:any, key:string  }) => {
  const [value, setValue] = useState<any[]>([])
  const [response, setResponse] = useState<string|null>(null)

  useEffect(()=>{
    setTimeout(()=>{
      // console.log("[Template Refreshed after 200 ms!]")
      setValue(item)
    },200)
  },[])

  const _onSubmit = (a:any) => new Promise((resolve, reject) => {
    // console.log("[Raw Submit] - ",a)
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