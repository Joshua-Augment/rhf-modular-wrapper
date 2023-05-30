import React from "react";
import { ComponentMeta } from '@storybook/react';

import {FormList, TableList} from "../components";
import { Template } from "./_story_template";

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