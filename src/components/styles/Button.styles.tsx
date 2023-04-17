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

export const MessageButtonStyle = styled.button`
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

export const Outer = styled.div`
  width: 50px; /* 정사각형 상자의 가로 길이 */
  height: 50px; /* 정사각형 상자의 세로 길이 */
  background-color: white; /* 정사각형 상자의 배경색 */
  position: relative;
`

export const Inner = styled.div`
  width: 40px; /* 내부 상자의 가로 길이 */
  height: 40px; /* 내부 상자의 세로 길이 */
  background-color: ${({color}) => color}; /* 내부 상자의 배경색 */
  position: absolute; /* 내부 상자를 상위 요소의 위치에 상대적으로 위치시키기 위해 absolute로 설정 */
  top: 50%; /* 내부 상자를 수직 중앙 정렬하기 위해 top 속성을 50%로 설정 */
  left: 50%; /* 내부 상자를 수평 중앙 정렬하기 위해 left 속성을 50%로 설정 */
  transform: translate(-50%, -50%);
`