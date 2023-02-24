import React from "react";
import { ComponentMeta } from '@storybook/react';
import {Form, DatePicker} from "../components/"

export default {
  title: 'Components/Inputs/Special/Datepicker',
  component: DatePicker
} as ComponentMeta<typeof DatePicker>; 

const onSubmit = (a:any) => new Promise((resolve, reject) => resolve(console.log('FormSubmission:',a)))

export const SimpleDatePicker = () => {
  return <Form onSubmit={onSubmit} >
    <DatePicker label="Simple Form Input (Text)" name="simple_datepicker" />
  </Form>
}

export const SimpleTimePicker = () => {
  return <Form onSubmit={onSubmit} >
    <DatePicker label="Simple Form Input (Text)" name="simple_timepicker" options={{showTimeSelect : true, dateFormat:"Pp"}} />
  </Form>
}