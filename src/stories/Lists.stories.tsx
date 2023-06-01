import React from "react";
import { ComponentMeta } from '@storybook/react';

import {DatePicker, FormList, InputListtoTable, Line, Select, TableList, WYSIWYGEditor} from "../components";
import { Template } from "./_story_template";
import { Box } from "@mui/material";

export default {
  title: 'Components/Inputs/Lists/FormList',
  component: FormList
} as ComponentMeta<typeof FormList>; 

export const SimpleFormList = Template.bind({})
SimpleFormList.args =  {
  children : <FormList showIndex label="Simple List" name="list" items={[{name:'date',type:'datepicker',label:'Register Date'},{name:'name',label:'name'},{name:'email',label:'email',type:'email'},{name:'password',label:'password',type:'password'}]} />
}

export const TemplateFormList = Template.bind({})
TemplateFormList.args = {
  children : <FormList 
    showIndex label="Simple List" 
    name="list" 
    bodyTemplate={<div>
      <div data-add >Add </div>
      <div style={{display:'flex',margin:'5px', background:'blue'}}>
        <div data-name="date" />
        <div data-name="password" />
      </div>
      <div data-name="name" />
      <div data-name="email" />
      <div data-index />
      <div data-remove >Remove</div>
    </div>}
    items={[
      {name:'date',type:'datepicker',label:'Register Date'},
      {name:'name',label:'name'},
      {name:'email',label:'email',type:'email'},
      {name:'password',label:'password',type:'password'}
    ]} 
  />
}

export const SimpleTableList = Template.bind({})
SimpleTableList.args =  {
  children : <TableList showIndex label="Simple Table List" name="table_list" items={[{name:'date',type:'datepicker',label:'Register Date'},{name:'name',label:'name'},{name:'email',label:'email',type:'email'},{name:'password',label:'password',type:'password'}]} />
}

export const SimpleInputToTableList = Template.bind({})
SimpleInputToTableList.args = {
  children : <InputListtoTable 
    label="Input List to Table" 
    items={[
      {name:'name', type:'text'},
      {name:'email', type:'email'},
      {name:'date', type:'datepicker'},
      {name:'remarks', type:'wysiwyg'},
      {name:'type1', type:'select'},
    ]}
    inputName="inputs"
    name="data"
    >
      <Box>
        <Line name="inputs.name" label="Name" />
        <Line name="inputs.email" type="email" label="Email" />
        <DatePicker name="inputs.date" label="Date" />
        <WYSIWYGEditor name="inputs.remarks" label="Remarks" helperText="Optional Remarks if Any"/>
        <Select name="inputs.type1" options={[{value:1,label:'#1'},{value:2,label:'#2'},{value:3,label:'#3'}]} label="Type 1" />
      </Box>
    </InputListtoTable>
}