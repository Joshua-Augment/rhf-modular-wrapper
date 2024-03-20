import React, { useEffect, useState } from "react";
import { ComponentMeta } from "@storybook/react";
import { TableList } from "../components/Inputs";
import * as yup from "yup";

import Slider from "../components/Inputs/Range/Slider";
import { Template } from "./_story_template";

export default {
  title: "Components/Inputs/Tablelist",
  component: TableList,
} as ComponentMeta<typeof Slider>;

const schema = yup.object({
  test : yup
  .array()
  .of(
    yup.object({
      name: yup.string().required().label("Name"),
    })
  )
  .min(5)
});

export const TableListNotStatic = Template.bind({});
TableListNotStatic.args = {
  schema: schema,
  children: (
    <TableList
      name="test"
      items={[
        { name: "name", label: "Name" },
        { name: "email", label: "Email" },
        { name: "phone", label: "Phone" },
      ]}
    />
  ),
};

export const TableListStatic = Template.bind({});
TableListStatic.args = {
  schema: schema,
  children: (
    <TableList
      isStatic
      name="test"
      items={[
        { name: "name", label: "Name" },
        { name: "email", label: "Email" },
        { name: "phone", label: "Phone" },
      ]}
    />
  ),
};
