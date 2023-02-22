import React from "react";
import ColorPicker from "../../core/ColorPicker";
import SingleDropdown from "../../core/DropdownButton/SingleDropdown";
import styled from "styled-components";
const ColorThumb = styled.div `
  width: 15px;
  height: 15px;
  background-color: ${({ color }) => color !== null && color !== void 0 ? color : "#000"};
`;
const FontColorDropDown = (props) => {
    const handleColorChange = (color) => {
        props.updater({ [props.type]: color });
    };
    return (React.createElement(SingleDropdown, { previewThumb: React.createElement(React.Fragment, null,
            props.icon,
            " ",
            React.createElement(ColorThumb, { color: props.color })), value: props.color },
        React.createElement(ColorPicker, { selectedColor: props.color, onColorChanged: handleColorChange })));
};
export default FontColorDropDown;
//# sourceMappingURL=index.js.map