import React from "react";
import { ComponentMeta } from '@storybook/react';
import {Form} from "../components/core/Form"
import UppyDashboard from "../components/Inputs/Uploaders/UppyUploader/Dashboard"
import { Template } from "./_story_template";


export default {
  title: 'Components/Inputs/Uploaders/Image',
  component: UppyDashboard
} as ComponentMeta<typeof UppyDashboard>; 


export const ImageUploader = Template.bind({}) 
ImageUploader.args = {
    children : <UppyDashboard label="Uppy Uploader" name="uploader"  endpoint="/" />
}
