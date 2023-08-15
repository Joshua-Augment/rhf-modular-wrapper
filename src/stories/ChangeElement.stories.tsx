import React from "react";

import Line from "../components/Inputs/Text/Line"
import { Template } from "./_story_template";

export default {
  title: 'Components/Special/ChangeElement',
  component: Line
} 

// const onSubmit = (a:any) => new Promise((resolve, reject) => resolve(// console.log('FormSubmission:',a)))

const CustInput = (props: any) =>{
  return <div style={{display:'flex',flexDirection: 'column'}}>
    <div style={{background:'black', color: 'white'}}>
      {props.label ?? props.placeholder ?? ''} {' - '}
      {props.value}
    </div>
    <input type="text" value={props.value} onChange={(e)=>props.onChange(e.target.value)} />
    <div>{props.placeholder ?? 'No Placeholder!'}</div>
  </div>
}

export const LinesBootstrap = Template.bind({}) 
LinesBootstrap.args = {
  children : <>    
    <Line label="Simple Form Input (Text)" name="line.text" placeholder="Simple Form Placeholder" />
    <Line element={<CustInput/>} label="Form Input (custom Element)" name="line.custom" placeholder="Special Placeholder" type="text" />
    
  </>
}



