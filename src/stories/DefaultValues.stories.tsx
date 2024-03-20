import React from "react";
import { ComponentMeta } from "@storybook/react";
import { Form } from "../components/core/Form";

import Radiobox from "../components/Inputs/Checkboxes/Radiobox";
import RadioboxGroup from "../components/Inputs/Checkboxes/CheckboxGroup";
import { Template } from "./_story_template";
import { InputChooser } from "../components/core";

export default {
  title: "Components/DefaultValues",
  component: InputChooser,
} as ComponentMeta<typeof Radiobox>;

export const DefaultLine = Template.bind({});
DefaultLine.args = {
  defaultValues: { simple: "A Simple Default Value" },
  children: <InputChooser name="simple" label="Simple Text" />,
};

export const DefaultNumber = Template.bind({});
DefaultNumber.args = {
  defaultValues: { simple: 2 },
  children: <InputChooser type="number" name="simple" label="Simple Text" />,
};

export const DefaultRadio = Template.bind({});
DefaultRadio.args = {
  defaultValues: {
    radiobox: "three",
  },
  children: (
    <InputChooser
      type="radio"
      label="Simple Radiobox One"
      options={[
        { value: "one", label: "One" },
        { value: "two", label: "Two" },
        { value: "three", label: "Three" },
      ]}
      name="radiobox"
    />
  ),
};

