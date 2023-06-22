import React, { useCallback, useEffect, useState } from "react";
import { ComponentMeta } from '@storybook/react';
import {Form, DatePicker,Switch, Line, Select, TSelectOption, DropzoneUploader, SubmitButton, AsyncSelect, TableList} from "../components"
import { Template } from "./_story_template";
import * as yup from "yup"

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

const yupValidation = yup.object({
  line: yup.string().matches(/[TEST INPUT]|[NOT]/i, 'INPUT MUST BE "TEST INPUT" OR "NOT"').required("INPUT REQUIRED"),
  line_number : yup.number().min(2).max(6,"NUMBER CANNOT BE GREATER THAN 6"),
  datepicker: yup.date(),
  switch : yup.boolean().isTrue("INPUT NEEDS TO BE TRUE"),
  select: yup.object({value: yup.number(),label: yup.string()}).nullable().required("SELECT AN OPTION"),
  select_async: yup.object({value: yup.number(),label: yup.string()}).nullable().required("SELECT AN OPTION"),
  dropzone: yup.array().of(yup.mixed().required("FILE INPUT REQUIRED")),
  table_list: yup.array().of(yup.object({
    line: yup.string().required("INPUT REQUIRED"),
    number: yup.number().required("INPUT REQUIRED"),
    yesno: yup.boolean().required("INPUT REQUIRED"),
    checkbox : yup.boolean().required("INPUT REQUIRED"),
    radiobox : yup.number().required("INPUT REQUIRED")
  })),
})

export const CheckboxGroupExampleVertical = () => {
  const [output,setOutput] = useState(<p>None Yet</p>)
  const [defaultValues, setDefaultValues] = useState<any>(null)

  useEffect(()=>{
    fetch(imgFile)
      .then((data) => data.blob())
      .then((data) => {
        const file:any = new File([data],'1.png', {type: 'image/png', lastModified: new Date().getTime(), path: '1.png'})
        setDefaultValues({
          line: 'TEST INPUT',
          line_number : 3,
          datepicker : new Date(new Date().getTime() - 1000 * 60 * 60 * 24),
          select: {label:'Option 2',value:2},
          select_async: {label:'Option 5',value:5},
          dropzone : [file, file],
          switch : false,
          table_list : [
            {line:'testing', number:3,yesno:false,checkbox:true, radiobox:2}
          ]
        })

        setReady(true)
      })
  },[])

  const [ready,setReady] = useState(false)

  const onSubmit = useCallback((a:any)=> new Promise((resolve,reject) =>{
    // console.log("[return values] - ",a)
    setOutput(<p>{JSON.stringify(a)}</p>)
  }),[])

  const loadingOptions = useCallback((a:any, callback:any)=> {
    setTimeout(() => {
      callback(BASE_SELECTS)
    },400)
  },[])

  const handleInputChange = (input:string, name: string, all: any, methods ?: any) => {
    console.group('Handle Input Change')
    console.log(`Handle Input Change! input : ${input}, name: ${name}`)
    console.log(`Handle Input Change! all `,all)
    console.log(`Handle Input Change! methods `,methods)

    console.log(`Testing Method! Changing line_number ${all.line_number} + 1 ! `,methods.setValue('line_number', Number(all.line_number) + 1))
    console.groupEnd()
    
    return 
  }

  return <div>
    {output}
    {
      ready ? <Form onSubmit={onSubmit} defaultValues={defaultValues} yupSchema={yupValidation}>
        <Line name="line_with_default_value" label="Line Input with default Value" defaultValue="This is a test Value" helperText="Line Input" />
        <Line onInputChange={handleInputChange} name="line" label="Line Input" helperText="Line Input" />
        <Line name="line_number" type="number" label="Line Input (Number)" helperText="Line Input (Number)" />
        <DatePicker name="datepicker" label="Date Picker" helperText="Date Picker" />
        <Select rsOptions={{isClearable:true}} name="select" helperText="Select" label="Select" options={BASE_SELECTS} />
        <AsyncSelect rsOptions={{isClearable:true}} name="select_async" helperText="Async Select" label="Async Select" loadOptions={loadingOptions} />
        <DropzoneUploader name="dropzone" label="Dropzone" helperText="Dropzone" />
        <Switch label="Switch" name="switch" footLabel={['NO','YES']} helperText="Switch" /> 
        <TableList name="table_list" helperText="Table List" label="Table List" 
          headerTemplate={<tr>
            <th>Line</th>
            <th>Number</th>
            <th>Yesno</th>
            <th>Checkbox</th>
            <th>Radiobox</th>
          </tr>}
          items={[{name:'line'},{name:'number',type:'number'},{name:'yesno',type:'yesno'},{name:'checkbox',type:'checkbox'},{name:'radiobox',options:[{value:1,label:1},{value:2,label:2}], type:'radiobox'}]}
        />
        <SubmitButton>test</SubmitButton>
      </Form> : <p>Loading...</p>
    }
  </div>


}

