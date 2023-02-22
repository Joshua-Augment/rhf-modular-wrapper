"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerticalSpacer = exports.SquareButton = exports.BaseButton = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.BaseButton = styled_components_1.default.button `
  display: flex;
  align-items: center;
  height : 30px;
  border-radius: 0.5rem;
  padding-top : 4px;
  padding-bottom : 4px;
  transition : 0.2s all ease-in-out;
  background-color: ${({ active }) => active ? '#d1cdcd' : 'transparent'};
  border: none;
  cursor: pointer;

  &:hover, &:focus {
    background-color: #d2d2d2;
  }

  /* & + & {
    border-radius: none;
  }

  &:last-of-type {
    border-radius: 0 0.5rem 0.5rem 0;
  }
  &:first-of-type {
    border-radius: 0.5rem 0 0 0.5rem;
  } */
`;
exports.SquareButton = (0, styled_components_1.default)(exports.BaseButton) `
  width : 30px;
`;
exports.VerticalSpacer = styled_components_1.default.div `

  width:3px;
  height:25px;
  border-left: 1px solid #000000;
  display: inline;
`;
//# sourceMappingURL=styled_components.js.map