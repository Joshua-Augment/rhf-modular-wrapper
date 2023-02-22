"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DDItem = exports.DDItemContainer = exports.DDList = exports.DDWrapper = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const styled_components_2 = require("../styled_components");
exports.DDWrapper = (0, styled_components_1.default)(styled_components_2.BaseButton) `
  position: relative;
  display: inline-flex;
  width: auto;
  text-align: left;
`;
exports.DDList = styled_components_1.default.div `
  z-index: 100;
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
  position: absolute;
  top: 18px;
  left: 0;
  width: 100%;
  min-width: 125px;
`;
exports.DDItemContainer = styled_components_1.default.ul `
  width: 100%;
  list-style: none;
  padding-inline: 0;
  padding-right: 6px;
  padding-left: 6px;
  padding-top: 5px;
  padding-bottom: 5px;
  background-color: #dedede;
  border-radius: 3px;
`;
exports.DDItem = styled_components_1.default.li `
  padding: 3px 0px;
  text-align: ${({ centered }) => (centered === true ? "center" : "left")};

  &:hover {
    background-color: #c3c3c3;
  }
`;
//# sourceMappingURL=core.js.map