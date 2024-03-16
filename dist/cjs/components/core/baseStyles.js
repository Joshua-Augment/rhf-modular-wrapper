"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseButtonTheme = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.BaseButtonTheme = styled_components_1.default.button `
  border-radius: 5px;
  padding: 10px;
  border: 1px solid #035ceb;
  background-color: #91b6f2;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in;
  cursor: pointer;

  &:disabled {
    background-color: #6b86b3;
    border: 1px solid #3461a9;
    cursor:disabled;
  }

  &:hover {    
    background-color: #679df3;
  }
  &:focus {    
    background-color: #679df3;
  }
`;
//# sourceMappingURL=baseStyles.js.map