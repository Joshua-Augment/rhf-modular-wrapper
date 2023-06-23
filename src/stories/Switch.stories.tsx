import React, { useEffect, useState } from "react";
import { ComponentMeta } from '@storybook/react';

import Switch from "../components/Inputs/Checkboxes/Switch"
import { Template } from "./_story_template";

export default {
  title: 'Components/Inputs/Checkbox/Switch',
  component: Switch
} as ComponentMeta<typeof Switch>; 

export const SimpleSwitch = Template.bind({}) 
SimpleSwitch.args = {
  children : <Switch name="switch" label="Switch Item"   />
}
export const SimpleSwitchFoot = Template.bind({}) 
SimpleSwitchFoot.args = {
  children : <Switch name="switch" label="Switch Item"  footLabel={["On", "Off"]} />
}