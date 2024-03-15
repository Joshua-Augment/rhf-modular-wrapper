import React from "react";
import { ComponentMeta } from "@storybook/react";
import { Form } from "../components/core/Form";

import Radiobox from "../components/Inputs/Checkboxes/Radiobox";
import RadioboxGroup from "../components/Inputs/Checkboxes/CheckboxGroup";
import { Template } from "./_story_template";

export default {
  title: "Components/Inputs/Radiobox",
  component: Radiobox,
} as ComponentMeta<typeof Radiobox>;

export const RadioboxSimple = Template.bind({});
RadioboxSimple.args = {
  children: (
    <Radiobox
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

export const RadioboxSimpleDefault = Template.bind({});
RadioboxSimpleDefault.args = {
  defaultValues: {
    radiobox: "three",
  },
  children: (
    <Radiobox
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

export const RadioboxGroupHorizontal = Template.bind({});
RadioboxGroupHorizontal.args = {
  children: (
    <Radiobox
      orientation="horizontal"
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
