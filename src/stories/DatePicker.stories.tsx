import React from "react";
import { ComponentMeta } from "@storybook/react";
import { Form, DatePicker } from "../components/";
import { Template } from "./_story_template";

export default {
  title: "Components/Inputs/Special/Datepicker",
  component: DatePicker,
} as ComponentMeta<typeof DatePicker>;

// const onSubmit = (a:any) => new Promise((resolve, reject) => resolve(// console.log('FormSubmission:',a)))

export const SimpleDatePicker = Template.bind({});
SimpleDatePicker.args = {
  defaultValues: {
    simple_datepickerDef: new Date(),
  },
  children: (
    <>
      <DatePicker label="Simple Form Input (Text)" name="simple_datepicker" />
      <DatePicker
        label="Simple Form Input (Text) With Default Value"
        name="simple_datepickerDef"
      />
    </>
  ),
};

export const SimpleTimePicker = Template.bind({});
SimpleTimePicker.args = {
  children: (
    <DatePicker
      label="Simple Form Input (Text)"
      name="simple_timepicker"
      options={{ showTimeSelect: true, dateFormat: "Pp" }}
    />
  ),
};
