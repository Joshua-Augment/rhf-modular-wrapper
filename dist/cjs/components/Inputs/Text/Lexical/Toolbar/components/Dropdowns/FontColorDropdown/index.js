"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ColorPicker_1 = __importDefault(require("../../core/ColorPicker"));
const SingleDropdown_1 = __importDefault(require("../../core/DropdownButton/SingleDropdown"));
const styled_components_1 = __importDefault(require("styled-components"));
const ColorThumb = styled_components_1.default.div `
  width: 15px;
  height: 15px;
  background-color: ${({ color }) => color !== null && color !== void 0 ? color : "#000"};
`;
const FontColorDropDown = (props) => {
    const handleColorChange = (color) => {
        props.updater({ [props.type]: color });
    };
    return (react_1.default.createElement(SingleDropdown_1.default, { previewThumb: react_1.default.createElement(react_1.default.Fragment, null,
            props.icon,
            " ",
            react_1.default.createElement(ColorThumb, { color: props.color })), value: props.color },
        react_1.default.createElement(ColorPicker_1.default, { selectedColor: props.color, onColorChanged: handleColorChange })));
};
exports.default = FontColorDropDown;
//# sourceMappingURL=index.js.map