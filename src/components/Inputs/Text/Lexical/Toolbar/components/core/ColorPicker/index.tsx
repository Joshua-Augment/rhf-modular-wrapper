import React, {useEffect, useState} from 'react'
import { SketchPicker } from 'react-color';

interface IColorPicker {
  selectedColor ?: string,
  onColorChanged : (color: string) => void
}


const ColorPicker = (props: IColorPicker) => {
  const [color, setColor] = useState(props.selectedColor ?? '#000000')

  useEffect(()=>{
    if (props.selectedColor !== undefined) {
      setColor(props.selectedColor)
    }
  },[props.selectedColor])

  const handleChange = (newColor : any) => {
    console.log("[colorHandleChange] - color : ",newColor)
    setColor(newColor.hex)
    props.onColorChanged(newColor.hex)
  }

  return (<SketchPicker color={color} onChangeComplete={handleChange} />)
}

export default ColorPicker