import React from "react";
import { ComponentMeta } from '@storybook/react';
import {Form} from "../components/core/Form"

import Line from "../components/Inputs/Text/Line"
import Lines from "../components/Inputs/Text/Lines"
import WYSIWYG from "../components/Inputs/Text/WYSIWYG";
import { Template } from "./_story_template";

export default {
  title: 'Components/Inputs/Line',
  component: Line
} as ComponentMeta<typeof Line>; 

const onSubmit = (a:any) => new Promise((resolve, reject) => resolve(console.log('FormSubmission:',a)))

export const LinesBootstrap = Template.bind({}) 
LinesBootstrap.args = {
  children : <>    
    <Line label="Simple Form Input (Text)" name="line.text" placeholder="Simple Form Placeholder" />
    <Line label="Simple Form Input (Number)" name="line.number" placeholder="Simple Number Placeholder" type="number" />
    <Line label="Simple Form Input (Email)" name="line.email" placeholder="Simple Email Placeholder" type="email" />
  </>
}

export const TextArea = Template.bind({})
TextArea.args = {
  children : <>    
    <Lines label="Simple Form Input (Textarea)" name="lines.text" placeholder="Simple Textarea Placeholder" />
    <Lines label="Simple Form Input (Textarea) Long" rows={10} name="lines.long" placeholder="Simple Textarea Placeholder" />
    <Lines label="Simple Form Input (Textarea) Wide" cols={100} name="lines.wide" placeholder="Simple Textarea Placeholder" />
  </>
}

export const WYSIWYGEditor = Template.bind({}) 
WYSIWYGEditor.args = {
  children : <WYSIWYG label="Simple Form Input (WYSIWYG Editor)" name="wysiwyg" placeholder="Text Placeholder" />
}
