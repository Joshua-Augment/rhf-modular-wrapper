import React from "react";
import { ComponentMeta } from "@storybook/react";
import { Template } from "./_story_template";
import { YesNo } from "../components";

export default {
  title: "Components/Inputs/Radiobox/YesNo",
  component: YesNo,
} as ComponentMeta<typeof YesNo>;

export const YesNoSimple = Template.bind({});
YesNoSimple.args = {
  children: <YesNo label="Simple YesNo" name="yesno" />,
};

export const YesNoWithOther = Template.bind({});
YesNoWithOther.args = {
  children: (
    <YesNo
      label="YesNo With other"
      name="yesno"
      otherOptions={[{ label: "Maybe", value: null, color: "#ffaa00" }]}
    />
  ),
};
