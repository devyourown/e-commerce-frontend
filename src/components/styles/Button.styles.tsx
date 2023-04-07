import styled from "styled-components";

export const ButtonStyles = styled.button`
  background-color: black;
  border: none;
  color: #ffffff;
  cursor: pointer;
  font-size: 18px;
  padding: 16px;
  border-radius: 8px;

  &:hover,
  &:active {
    background-color: #282c34;
  }
`

export const FindPasswordButtonsStyles = styled.button`
  border: none;
  color: #717172;
  background-color: white;
  font-size: 15px;
  &:hover,
  &:active {
    border-bottom: 2px solid #25252a;
  }
`

export const SingInButtonStyles = styled.button`
  background-color: #cccccc;
  color: black;
  border: none;
  border-radius: 8px;
  padding: 8px;
  max-width: 100%;
  flex: 1;

  &:hover,
  &:active {
    background-color: #bebdbd;
    color: black;
  }
`

