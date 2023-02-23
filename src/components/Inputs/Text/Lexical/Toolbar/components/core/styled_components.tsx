import styled from "styled-components"


export const BaseButton = styled.button.attrs({type:'button'})`
  display: flex;
  align-items: center;
  height : 30px;
  border-radius: 0.5rem;
  padding-top : 4px;
  padding-bottom : 4px;
  transition : 0.2s all ease-in-out;
  background-color: ${({active}) => active ? '#d1cdcd' : 'transparent'};
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
`

export const SquareButton = styled(BaseButton)`
  width : 30px;
`

export const VerticalSpacer = styled.div`
  width:3px;
  height:25px;
  border-left: 1px solid #000000;
  display: inline;
`