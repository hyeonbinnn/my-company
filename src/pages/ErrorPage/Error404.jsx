import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import companyMini from '../../assets/companyMini.png';

const Error404 = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <Main>
      <Container>
        <ErrorBox>
          <h2>Error 404</h2>
          <p>
            서비스 이용에 불편을 드려 죄송합니다. <br />
            페이지를 찾을 수 없습니다.
          </p>
        </ErrorBox>
        <ErrorButton>
          <Btn1 onClick={goBack}>이전 페이지</Btn1>
          <Link to="/">
            <Btn2>메인 페이지</Btn2>
          </Link>
        </ErrorButton>
      </Container>
    </Main>
  );
};

export default Error404;

const Main = styled.main`
  width: 100%;
  height: 100vh;
  background-image: url(${companyMini});
  background-size: 100px;
  background-repeat: no-repeat;
  background-position: 50% 30%;
`;

const Container = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 30px;
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -55%);
`;

const ErrorBox = styled.div`
  h2 {
    font-size: 30px;
    margin-bottom: 30px;
  }

  p {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.black};
  }
`;

const ErrorButton = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;

  button {
    width: 100px;
    height: 40px;
    border-radius: 15px;
    font-weight: bold;
  }
`;

const Btn1 = styled.button`
  border: ${({ theme }) => `3px solid ${theme.colors.lightGray}`};
  color: ${({ theme }) => theme.colors.darkGray};
`;
const Btn2 = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
`;
