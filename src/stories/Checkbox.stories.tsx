import React from "react";
import { ComponentMeta } from '@storybook/react';
import {Form} from "../components/core/Form"

import Checkbox from "../components/Inputs/Checkboxes/Checkbox";
import CheckboxGroup from "../components/Inputs/Checkboxes/CheckboxGroup";

export default {
  title: 'Components/Checkbox',
  component: Checkbox
} as ComponentMeta<typeof Checkbox>; 

const onSubmit = (a:any) => new Promise((resolve, reject) => resolve(console.log('FormSubmission:',a)))

export const CheckboxSimple = () => {
  return <Form onSubmit={onSubmit} >
    <Checkbox label="Simple Checkbox One" name="checkbox.one" />
    <Checkbox label="Simple Checkbox Two" name="checkbox.two" />
    <Checkbox label="Simple Checkbox Three" name="checkbox.three" />
  </Form>
}

export const CheckboxGroupExample = () => {  
  return <Form onSubmit={onSubmit} >
    <CheckboxGroup title='Checkbox Group with Title'>      
      <Checkbox label="Simple Checkbox One" name="checkbox.one" />
      <Checkbox label="Simple Checkbox Two" name="checkbox.two" />
      <Checkbox label="Simple Checkbox Three" name="checkbox.three" />
    </CheckboxGroup>
  </Form>
}

export const CheckboxGroupExampleVertical = () => {  
  return <Form onSubmit={onSubmit} >
    <CheckboxGroup title='Checkbox Group with Title' orientation="vertical">      
      <Checkbox label="Simple Checkbox One" name="checkbox.one" />
      <Checkbox label="Simple Checkbox Two" name="checkbox.two" />
      <Checkbox label="Simple Checkbox Three" name="checkbox.three" />
    </CheckboxGroup>
  </Form>
}