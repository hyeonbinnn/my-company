import React from 'react';
import styled from 'styled-components';

const BoardModal = () => {
  return (
    <>
      <Header>
        <h2>Name : </h2>
        <h2>Title : </h2>
      </Header>
      <Content>
        <p>내용</p>
      </Content>
    </>
  );
};

export default BoardModal;

const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 100px;
  margin-bottom: 50px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  padding: 20px;

  h2:nth-child(1) {
    margin-right: 90px;
  }

  @media ${(props) => props.theme.mediaQuery.mobile} {
    flex-direction: column;
    gap: 30px;
    padding: 20px 30px;
    margin-bottom: 30px;

    h2 {
      font-size: 18px;
    }

    h2:nth-child(1) {
      margin-right: 0px;
    }
  }
`;

const Content = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 30px 20px;
  border-radius: 20px;
  height: 300px;

  p {
    font-weight: bold;
    font-size: 15px;
  }

  @media ${(props) => props.theme.mediaQuery.mobile} {
    padding: 30px;
  }
`;
