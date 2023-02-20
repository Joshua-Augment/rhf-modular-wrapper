import React from "react";
import { ComponentMeta } from '@storybook/react';
import {Form} from "../components/core/Form"

import Line from "../components/Inputs/Text/Line"

export default {
  title: 'Components/Styling/CustomWrapper',
  component: Line
} as ComponentMeta<typeof Line>; 

const onSubmit = (a:any) => new Promise((resolve, reject) => resolve(console.log('FormSubmission:',a)))

const InputWrapper = (props:{label:string, helperText:string, children:any}) => {
  return <div style={{background:'blue', textAlign:'center'}}>
    <label style={{background:'red',color:'white'}}>{props.label}</label>
    <div>{props.children}</div>
  </div>
}

export const Lines = () => {
  return <Form onSubmit={onSubmit} inputWrapper={InputWrapper}>
    <Line label="Simple Form Input (Text)" name="lines.text" placeholder="Simple Form Placeholder" />
    <Line label="Simple Form Input (Number)" name="lines.number" placeholder="Simple Number Placeholder" type="number" />
    <Line label="Simple Form Input (Email)" name="lines.email" placeholder="Simple Email Placeholder" type="email" />
  </Form>
}
