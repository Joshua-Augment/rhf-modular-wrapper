import React from "react";
import ColorPicker from "../../core/ColorPicker";
import SingleDropdown from "../../core/DropdownButton/SingleDropdown";
import styled from "styled-components";

const ColorThumb = styled.div`
  width: 15px;
  height: 15px;
  background-color: ${({ color }) => color ?? "#000"};
`;

interface IFontColorDropDown {color: string;icon?: React.ReactNode; type:string; updater : any}
const FontColorDropDown = (props: IFontColorDropDown) => {
  const handleColorChange = (color: string) => {
    props.updater({[props.type] : color})
  };

  return (
    <SingleDropdown previewThumb={<>{props.icon} <ColorThumb color={props.color} /></>} value={props.color} >
      <ColorPicker selectedColor={props.color} onColorChanged={handleColorChange} />
    </SingleDropdown>
  );
};

export default FontColorDropDown;
