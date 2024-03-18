"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseButtonTheme = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
exports.BaseButtonTheme = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border-radius: 5px;\n  padding: 10px;\n  border: 1px solid #035ceb;\n  background-color: #91b6f2;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s ease-in;\n  cursor: pointer;\n\n  &:disabled {\n    background-color: #6b86b3;\n    border: 1px solid #3461a9;\n    cursor:disabled;\n  }\n\n  &:hover {    \n    background-color: #679df3;\n  }\n  &:focus {    \n    background-color: #679df3;\n  }\n"], ["\n  border-radius: 5px;\n  padding: 10px;\n  border: 1px solid #035ceb;\n  background-color: #91b6f2;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s ease-in;\n  cursor: pointer;\n\n  &:disabled {\n    background-color: #6b86b3;\n    border: 1px solid #3461a9;\n    cursor:disabled;\n  }\n\n  &:hover {    \n    background-color: #679df3;\n  }\n  &:focus {    \n    background-color: #679df3;\n  }\n"])));
var templateObject_1;
//# sourceMappingURL=baseStyles.js.map