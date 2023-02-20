import styled from "styled-components"


export const BaseButton = styled.button`
  display: flex;
  align-items: center;
  height : 30px;
  padding-top : 4px;
  padding-bottom : 4px;
  transition : 0.2s all ease-in-out;
  background-color: #dcdcdc;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #d2d2d2;
  }

  &:focus {
    background-color: #c3c3c3;
  }

  & + & {
    border-radius: none;
  }

  &:last-of-type {
    border-radius: 0 0.5rem 0.5rem 0;
  }
  &:first-of-type {
    border-radius: 0.5rem 0 0 0.5rem;
  }
`

export const SquareButton = styled(BaseButton)`
  width : 30px;
`

export const VerticalSpacer = styled.div`
  width:1px;
  height:100%;
  border-left: 1px solid #c3c3c3;
  display: inline;
`