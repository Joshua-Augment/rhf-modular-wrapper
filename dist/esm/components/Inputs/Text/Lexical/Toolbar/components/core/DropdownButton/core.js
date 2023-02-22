import styled from "styled-components";
import { BaseButton } from "../styled_components";
export const DDWrapper = styled(BaseButton) `
  position: relative;
  display: inline-flex;
  width: auto;
  text-align: left;
`;
export const DDList = styled.div `
  z-index: 100;
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
  position: absolute;
  top: 18px;
  left: 0;
  width: 100%;
  min-width: 125px;
`;
export const DDItemContainer = styled.ul `
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
export const DDItem = styled.li `
  padding: 3px 0px;
  text-align: ${({ centered }) => (centered === true ? "center" : "left")};

  &:hover {
    background-color: #c3c3c3;
  }
`;
//# sourceMappingURL=core.js.map