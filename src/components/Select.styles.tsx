import styled from "styled-components";

type SelectProps = {
    error?: boolean;
};

const SelectStyles = styled.select<SelectProps>`
  border: none;
  display: block;
  outline: none;
  padding: 8px 0;
  border-bottom: 2px solid #eeeeee;
  ${({ error }) =>
          error &&
          `
    &:focus {
      border-bottom: 2px solid #7760b4;
    }`}
  &:focus {
    border-bottom: 2px solid #25252a;
  }
`;

export default SelectStyles;