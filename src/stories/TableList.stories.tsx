import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { TableList } from "../components";

const meta: Meta<typeof TableList> = {
  title:'Inputs/List/TableList',
  component: TableList,
};

export default meta;
type Story = StoryObj<typeof TableList>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => (
    <TableList
      name="tablelist"
      items={[
        { name: "name", label: "Name" },
        { name: "description", label: "Description", type: "lines" },
        { name: "date", label: "Date", type: "date" },
      ]}
    />
  ),
};
