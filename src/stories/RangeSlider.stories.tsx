import React, { useEffect, useState } from "react";
import { ComponentMeta } from '@storybook/react';
import {Form, SubmitButton} from "../components/core/Form"

import Slider from "../components/Inputs/Range/Slider"
import { Template } from "./_story_template";

export default {
  title: 'Components/Inputs/Range',
  component: Slider
} as ComponentMeta<typeof Slider>; 

export const SimpleSlider = Template.bind({}) 
SimpleSlider.args = {
  children : <Slider name="slider" min={0} max={100} />
}