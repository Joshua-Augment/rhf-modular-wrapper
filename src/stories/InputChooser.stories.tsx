import React from "react";
import { ComponentMeta } from '@storybook/react';
import { InputChooser } from "../components";
import { Template } from "./_story_template";

export default {
  title: 'Components/InputChooser',
  component: InputChooser
} as ComponentMeta<typeof InputChooser>; 

// const onSubmit = (a:any) => new Promise((resolve, reject) => resolve(// console.log('FormSubmission:',a)))
const baseOptions = [
  {value: 1, label: 'Option 1'},
  {value: 2, label: 'Option 2'},
  {value: 3, label: 'Option 3'},
  {value: 4, label: 'Option 4'},
  {value: 5, label: 'Option 5'},
  {value: 6, label: 'Option 6'},
  {value: 7, label: 'Option 7'},
]
const loadOptions = (a:string, b: Function) => {
  setTimeout(()=>{
    b(baseOptions.filter(x => a === '' ? x.value === x.value : x.label.includes(a)))
  },500)
}

export const SimpleInputChooser = Template.bind({}) 
SimpleInputChooser.args = {
  children : <InputChooser cacheOptions defaultOptions type="select_async" label="Select Async using Input Chooser" loadOptions={(a,b) => loadOptions(a,b)} name="simple_InputChooser" />
}

export const MappedInputChooser = Template.bind({})
const mappedFields:any[][] = [
  [
    {name: 'async', type: 'select_async', label: 'Test async', cacheOptions:true, defaultOptions: true,loadOptions: (a,b) => loadOptions(a,b)},
    {name: 'normal', type: 'select', label: 'Test Select', options : baseOptions},
    {name: 'line', type: 'line', label: 'Test Line', placeholder: 'Write Something...'}
  ],
  [
    {name: 'async', type: 'select_async', label: 'Test async', cacheOptions:true, defaultOptions: true,loadOptions: (a,b) => loadOptions(a,b)},
    {name: 'normal', type: 'select', label: 'Test Select', options : baseOptions},
    {name: 'line', type: 'line', label: 'Test Line', placeholder: 'Write Something...'}
  ],
]
MappedInputChooser.args = {
  children : <div style={{display:'flex', flexDirection:'row',}}>{mappedFields.map((field,i) => <div style={{padding:'10px',width:'100%',flex:1}} key={i}>
    {field.map(_field =>  <InputChooser {..._field} name={`${_field.name}-${i}`} label={`${_field.label}-${i}`} key={_field.name} />)}
  </div>)}</div>
}

