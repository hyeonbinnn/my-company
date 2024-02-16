import React from 'react';
import styled from 'styled-components';
import spin from '../../assets/spin.gif';

const Loading = () => {
  return (
    <Container>
      <Text>잠시만 기다려 주세요.</Text>
      <Img src={spin} alt="로딩 이미지" />
    </Container>
  );
};

export default Loading;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 80vh;
  gap: 20px;
`;

export const Text = styled.span`
  font-size: 20px;
  font-weight: bold;

  @media ${(props) => props.theme.mediaQuery.mobile} {
    font-size: 17px;
  }
`;

const Img = styled.img`
  width: 150px;
  height: 150px;

  @media ${(props) => props.theme.mediaQuery.mobile} {
    width: 100px;
    height: 100px;
  }
`;
