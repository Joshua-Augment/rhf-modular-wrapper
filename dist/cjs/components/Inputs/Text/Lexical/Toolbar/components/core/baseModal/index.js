"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const fa_1 = require("react-icons/fa");
const ModalBackdrop = styled_components_1.default.div `
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  flex-direction: column;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background-color: #28282899;
  flex-grow: 0px;
  flex-shrink: 1px;
  z-index: 100;
  visibility: ${({ show }) => show ? 'visible' : 'hidden'};
`;
const Modal = styled_components_1.default.div `
  padding: 20px;
  min-height: 100px;
  min-width: 300px;
  display: flex;
  flex-grow: 0px;
  background-color: #fff;
  flex-direction: column;
  position: relative;
  box-shadow: 0 0 20px #444;
  border-radius: 10px;
  width: 95%;  
  @media only screen and (min-width: 768px) {
  /* For everything bigger than 768px */
    width: 40%;
  }
`;
const CloseButton = (0, styled_components_1.default)(fa_1.FaTimes) `
  float:right;
`;
const ModalTitle = styled_components_1.default.div `
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
`;
const ModalBody = styled_components_1.default.div `
  padding-top: 10px;
`;
const BaseModal = (props) => {
    return (react_1.default.createElement(ModalBackdrop, { show: props.show },
        react_1.default.createElement(Modal, null,
            react_1.default.createElement(ModalTitle, null,
                props.title,
                " ",
                react_1.default.createElement(CloseButton, { onClick: () => props.onClose() })),
            react_1.default.createElement(ModalBody, null, props.children))));
};
exports.default = BaseModal;
//# sourceMappingURL=index.js.map