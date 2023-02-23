import React from "react";
import { ComponentMeta } from '@storybook/react';
import {Form} from "../components/core/Form"
import DropzoneUploader from "../components/Inputs/Uploaders/Dropzone"
import { Template } from "./_story_template";


export default {
  title: 'Components/Inputs/Uploaders/DropzoneUploader',
  component: DropzoneUploader
} as ComponentMeta<typeof DropzoneUploader>; 


export const DragDropUploader = Template.bind({}) 
DragDropUploader.args = {
    children : <DropzoneUploader label="Uppy Uploader" name="uploader"  endpoint="/" />
}