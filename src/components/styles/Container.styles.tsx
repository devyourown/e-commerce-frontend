import styled from "styled-components";
import {ButtonStyles} from "./Button.styles";
import InputStyles from "./Input.styles";

const ContainerStyles = styled.div`
  width: 300px;
  margin: 40px auto;
  
  ${ButtonStyles} {
    width: 100%;
    margin: 8px 0;
  }

  ${InputStyles} {
    margin-bottom: 16px;
  }
`
export default ContainerStyles;