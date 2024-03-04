import React, { useEffect, useState } from "react";
import { ComponentMeta } from "@storybook/react";
import { Line, Form, SubmitButton, Select } from "../components";
import * as yup from "yup";
import { useFormContext, useWatch } from "react-hook-form";


export default {
  title: "Components/Validation",
  component: Form,
} as ComponentMeta<typeof Form>;

export const SimpleYupValidation = () => {
  const [response, setResponse] = useState<string|null>(null)

  const schema = yup.object().shape({
    test:yup.string().required("Write something to continue!"), 
    testSelect:yup.mixed().test(
      'test_null',
      'Please Select an Option to Continue!',
      (val) => {
        console.log('[yupValidation] - react select. Val', val, (val?.value !== undefined) && (val?.value !== null))
        return (val?.value !== undefined) && (val?.value !== null)
      })
  })

  const _onSubmit = (a:any) => new Promise((resolve, reject) => {
    // console.log("[Raw Submit] - ",a)
    setResponse(JSON.stringify(a,( key, value) => key == 'parent' ? null : value,2))
  })

  return <div>
    <p style={{margin:'10px',padding:'5px',border:'1px solid blue', borderRadius:'5px'}}>Submitted Object : {response}</p>
    <Form yupSchema={schema} onSubmit={_onSubmit}>
    <_SelectTest rsOptions={{isClearable:true}} helperText="Choose an Option to Continue" name="testSelect" options={[{value:1,label:'1'},{value:2,label:'2'}]} label="Test Select" />
    <Line name="test" label="Test Input" />
    <SubmitButton>Submit</SubmitButton>
  </Form>
</div>
}

const _SelectTest = (props: any) => {
  const value = useWatch({name: props.name})
  return <div>
    <p>Value : {JSON.stringify(value ?? {})}</p>
    <Select {...props} />
  </div>
}