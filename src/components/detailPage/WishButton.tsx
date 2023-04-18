import React, {useState} from 'react';
import styled from "styled-components";

type WishButtonProps = {
    children? : string
}

function WishButton({children} : WishButtonProps) {
    const [isClick, setIsClick] = useState(false);

    const handleClick = () => {
        setIsClick(!isClick);
    }

    return (
        <Container onClick={handleClick}>
            <Left>
                {isClick ? <Star>★</Star> : <Star>☆</Star>}
            </Left>
            <Center>
                <Text>{children}</Text>
            </Center>
            <Right>
                <span></span>
            </Right>
        </Container>
    );
}


const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  border: 1px solid grey;
  padding: 0 10px;
  margin-top: 10px;

  &:hover,
  &:active {
    border : 1px solid black;
  }
`;

const Left = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
`;

const Star = styled.span`
  font-size: 24px;
  margin-right: 10px;
`;

const Text = styled.span`
  font-size: 16px;
`;


export default WishButton;