import React from "react";
import { useState } from "@storybook/addons"
import { Form, SubmitButton } from "../components/core"

export const Template = ({children}:{children:React.ReactElement}) => {
  const [response, setResponse] = useState<string|null>(null)

  const _onSubmit = (a:any) => new Promise((resolve, reject) => {
    console.log("[Raw Submit] - ",a)
    setResponse(JSON.stringify(a,( key, value) => key == 'parent' ? null : value,2))
  })

  return <div>
    <p style={{margin:'10px',padding:'5px',border:'1px solid blue', borderRadius:'5px'}}>Submitted Object : {response}</p>
    <Form onSubmit={_onSubmit}>
    {children}
    <SubmitButton>Submit</SubmitButton>
  </Form>
</div>
}