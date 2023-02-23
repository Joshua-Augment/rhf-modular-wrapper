import React, { useState } from "react";
import { ComponentMeta } from '@storybook/react';
import {Form, SubmitButton} from "../components/core/Form"

import Checkbox from "../components/Inputs/Checkboxes/Checkbox";
import CheckboxGroup from "../components/Inputs/Checkboxes/CheckboxGroup";
import { Template } from "./_story_template";

export default {
  title: 'Components/Inputs/Checkbox',
  component: Checkbox
} as ComponentMeta<typeof Checkbox>; 

export const CheckboxSimple = Template.bind({})
CheckboxSimple.args = {
  children : <>
    <Checkbox label="Simple Checkbox One" name="checkbox.one" />
    <Checkbox label="Simple Checkbox Two" name="checkbox.two" />
    <Checkbox label="Simple Checkbox Three" name="checkbox.three" />
  </>
} 
// {
//   children : <>
//     <Checkbox label="Simple Checkbox One" name="checkbox.one" />
//     <Checkbox label="Simple Checkbox Two" name="checkbox.two" />
//     <Checkbox label="Simple Checkbox Three" name="checkbox.three" />
//   </>
// }

export const CheckboxGroupExample = Template.bind({})  
CheckboxGroupExample.args = { 
  children : <CheckboxGroup title='Checkbox Group with Title - Horizontal Layout'>      
    <Checkbox label="Simple Checkbox One" name="checkbox.one" />
    <Checkbox label="Simple Checkbox Two" name="checkbox.two" />
    <Checkbox label="Simple Checkbox Three" name="checkbox.three" />
  </CheckboxGroup>
 }

export const CheckboxGroupExampleVertical = Template.bind({}) 
CheckboxGroupExampleVertical.args = {
  children : <CheckboxGroup title='Checkbox Group with Title - Vertical Layout' orientation="vertical">      
    <Checkbox label="Simple Checkbox One" name="checkbox.one" />
    <Checkbox label="Simple Checkbox Two" name="checkbox.two" />
    <Checkbox label="Simple Checkbox Three" name="checkbox.three" />
  </CheckboxGroup>}

// export const CheckboxGroupExampleVertical = () => {  
//   return <>
//   <p>Submit Object : </p>
//   <Form onSubmit={onSubmit} >
//     <CheckboxGroup title='Checkbox Group with Title - Vertical Layout' orientation="vertical">      
//       <Checkbox label="Simple Checkbox One" name="checkbox.one" />
//       <Checkbox label="Simple Checkbox Two" name="checkbox.two" />
//       <Checkbox label="Simple Checkbox Three" name="checkbox.three" />
//     </CheckboxGroup>
//     <SubmitButton>Submit</SubmitButton>
//   </Form>
//   </>
// }