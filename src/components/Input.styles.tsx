import styled from "styled-components";

type InputProps = {
    error?: boolean,
}
const InputStyles = styled.input<InputProps>`
  border: none;
  display: block;
  outline: none;
  padding: 8px 0;
  border-bottom: 2px solid #eeeeee;
    ${(error) => error && `
    &:focus {
      border-bottom: 2px solid #7760b4;
    }`}
  &:focus {
    border-bottom: 2px solid #25252a;
  }
  width: 100%;
`
export default InputStyles;