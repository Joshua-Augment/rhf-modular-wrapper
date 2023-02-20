import React from "react";
import { ComponentMeta } from '@storybook/react';
import {Form} from "../components/core/Form"
import Datepicker from "../components/Inputs/Datepicker/Datepicker";

export default {
  title: 'Components/Inputs/Special/Datepicker',
  component: Datepicker
} as ComponentMeta<typeof Datepicker>; 

const onSubmit = (a:any) => new Promise((resolve, reject) => resolve(console.log('FormSubmission:',a)))

export const SimpleDatePicker = () => {
  return <Form onSubmit={onSubmit} >
    <Datepicker label="Simple Form Input (Text)" name="simple_datepicker" />
  </Form>
}

export const SimpleTimePicker = () => {
  return <Form onSubmit={onSubmit} >
    <Datepicker label="Simple Form Input (Text)" name="simple_timepicker" options={{showTimeSelect : true, dateFormat:"Pp"}} />
  </Form>
}