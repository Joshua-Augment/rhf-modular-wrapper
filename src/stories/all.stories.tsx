import React, { useCallback, useEffect, useState } from "react";
import { ComponentMeta } from '@storybook/react';
import {Form, DatePicker, Line, Select, TSelectOption, DropzoneUploader, SubmitButton} from "../components"
import { Template } from "./_story_template";

import imgFile from "./1.png"

export default {
  title: 'Components/All',
  component: Form
} as ComponentMeta<typeof Form>; 

const BASE_SELECTS: TSelectOption[] = [
  { label: "Option 1", value: 1 },
  { label: "Option 2", value: 2 },
  { label: "Option 3", value: 3 },
  { label: "Option 4", value: 4 },
  { label: "Option 5", value: 5 },
  { label: "Option 6", value: 6 },
  { label: "Option 7", value: 7 },
  { label: "Option 8", value: 8 },
];

export const CheckboxGroupExampleVertical = () => {
  const [output,setOutput] = useState(<p>None Yet</p>)
  const [defaultValues, setDefaultValues] = useState<any>(null)

  useEffect(()=>{
    fetch(imgFile)
      .then((data) => data.blob())
      .then((data) => {
        const file = new File([data],'1.png', {type: 'image/png', lastModified: new Date().getTime(), path: '1.png'})
        setDefaultValues({
          line: 'TEST INPUT',
          line_number : 3,
          datepicker : new Date(new Date().getTime() - 1000 * 60 * 60 * 24),
          select: {label:'Option 2',value:2},
          dropzone : [file, file]
        })

        setReady(true)
      })
  },[])

  const [ready,setReady] = useState(false)

  const onSubmit = useCallback((a:any)=> new Promise((resolve,reject) =>{
    console.log("[return values] - ",a)
    setOutput(<p>{JSON.stringify(a)}</p>)
  }),[])

  return <div>
    {output}
    {
      ready ? <Form onSubmit={onSubmit} defaultValues={defaultValues}>
      <Line name="line" label="Line Input" helperText="Line Input" />
        <Line name="line_number" type="number" label="Line Input (Number)" helperText="Line Input (Number)" />
        <DatePicker name="datepicker" label="Date Picker" helperText="Date Picker" />
        <Select name="select" helperText="Select" label="Select" options={BASE_SELECTS} />
        <DropzoneUploader name="dropzone" label="Dropzone" helperText="Dropzone" />
        <SubmitButton>test</SubmitButton>
      </Form> : <p>Loading...</p>
    }
  </div>


}

