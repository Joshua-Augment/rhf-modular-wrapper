import React from "react";
import { ComponentMeta } from '@storybook/react';

import {FormList} from "../components";
import { Template } from "./_story_template";

export default {
  title: 'Components/Inputs/Lists/FormList',
  component: FormList
} as ComponentMeta<typeof FormList>; 

export const SimpleFormList = Template.bind({})
SimpleFormList.args =  {
  children : <FormList showIndex label="Simple List" name="list" items={[{name:'date',type:'datepicker',label:'Register Date'},{name:'name',label:'name'},{name:'email',label:'email',type:'email'},{name:'password',label:'password',type:'password'}]} />
}