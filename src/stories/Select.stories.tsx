import React, { useState } from "react";
import { ComponentMeta } from '@storybook/react';
import {Select, TSelectOption } from "../components"

import { Template } from "./_story_template";

export default {
  title: 'Components/Inputs/Select',
  component: Select
} as ComponentMeta<typeof Select>; 

const BASE_SELECTS:TSelectOption[] = [
  {label: 'Option 1',value: 1},
  {label: 'Option 2',value: 2},
  {label: 'Option 3',value: 3},
  {label: 'Option 4',value: 4},
  {label: 'Option 5',value: 5},
  {label: 'Option 6',value: 6},
  {label: 'Option 7',value: 7},
  {label: 'Option 8',value: 8},
]

export const SimpleSelect = Template.bind({})
SimpleSelect.args = {
  children : <Select label="Simple Select" name="select" options={BASE_SELECTS} />
}

export const SimpleSelectCreateable = Template.bind({})
SimpleSelectCreateable.args = {
  children : <Select isCreateable label="Simple Select" name="select" options={BASE_SELECTS} />
} 

