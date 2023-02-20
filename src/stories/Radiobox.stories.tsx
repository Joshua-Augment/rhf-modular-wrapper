import React from "react";
import { ComponentMeta } from '@storybook/react';
import {Form} from "../components/core/Form"

import Radiobox from "../components/Inputs/Checkboxes/Radiobox";
import RadioboxGroup from "../components/Inputs/Checkboxes/CheckboxGroup";

export default {
  title: 'Components/Inputs/Radiobox',
  component: Radiobox
} as ComponentMeta<typeof Radiobox>; 

const onSubmit = (a:any) => new Promise((resolve, reject) => resolve(console.log('FormSubmission:',a)))

export const RadioboxSimple = () => {
  return <Form onSubmit={onSubmit} >
    <Radiobox label="Simple Radiobox One" value="one" name="radiobox" />
    <Radiobox label="Simple Radiobox Two" value="two" name="radiobox" />
    <Radiobox label="Simple Radiobox Three" value="three" name="radiobox" />
  </Form>
}

export const RadioboxGroupExample = () => {  
  return <Form onSubmit={onSubmit} >
    <RadioboxGroup title='Radiobox Group with Title - Horizontal Layout'>      
      <Radiobox label="Simple Radiobox One" value="one" name="radiobox" />
      <Radiobox label="Simple Radiobox Two" value="two" name="radiobox" />
      <Radiobox label="Simple Radiobox Three" value="three" name="radiobox" />
    </RadioboxGroup>
  </Form>
}

export const RadioboxGroupExampleVertical = () => {  
  return <Form onSubmit={onSubmit} >
    <RadioboxGroup title='Radiobox Group with Title - Vertical Layout' orientation="vertical">      
      <Radiobox label="Simple Radiobox One" value="one" name="radiobox" />
      <Radiobox label="Simple Radiobox Two" value="two" name="radiobox" />
      <Radiobox label="Simple Radiobox Three" value="three" name="radiobox" />
    </RadioboxGroup>
  </Form>
}