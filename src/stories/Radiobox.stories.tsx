import React from "react";
import { ComponentMeta } from '@storybook/react';
import {Form} from "../components/core/Form"

import Radiobox from "../components/Inputs/Checkboxes/Radiobox";
import RadioboxGroup from "../components/Inputs/Checkboxes/CheckboxGroup";
import { Template } from "./_story_template";

export default {
  title: 'Components/Inputs/Radiobox',
  component: Radiobox
} as ComponentMeta<typeof Radiobox>; 

export const RadioboxSimple = Template.bind({})
RadioboxSimple.args =  {
  children : <>  
    <Radiobox label="Simple Radiobox One" value="one" name="radiobox" />
    <Radiobox label="Simple Radiobox Two" value="two" name="radiobox" />
    <Radiobox label="Simple Radiobox Three" value="three" name="radiobox" />
    </>
}

export const RadioboxGroupExample = Template.bind({})  
RadioboxGroupExample.args = {  
    children : <RadioboxGroup title='Radiobox Group with Title - Horizontal Layout'>      
      <Radiobox label="Simple Radiobox One" value="one" name="radiobox-test" />
      <Radiobox label="Simple Radiobox Two" value="two" name="radiobox-test" />
      <Radiobox label="Simple Radiobox Three" value="three" name="radiobox-test" />
    </RadioboxGroup>
}

export const RadioboxGroupExampleVertical = Template.bind({})
RadioboxGroupExampleVertical.args = {  
    children : <RadioboxGroup title='Radiobox Group with Title - Vertical Layout' orientation="vertical">      
      <Radiobox label="Simple Radiobox One" value="one" name="radiobox" />
      <Radiobox label="Simple Radiobox Two" value="two" name="radiobox" />
      <Radiobox label="Simple Radiobox Three" value="three" name="radiobox" />
    </RadioboxGroup>
}