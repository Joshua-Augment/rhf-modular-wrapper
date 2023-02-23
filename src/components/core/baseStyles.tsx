import styled from "styled-components"

export const BaseButtonTheme = styled.button`
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
`